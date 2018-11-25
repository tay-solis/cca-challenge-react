import React, {Component} from 'react'
import axios from 'axios'
import {rootURL} from '../config/constants'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


// This component renders all of the information about a section from the section catalog and handles registration and dropping of that section. 
class Section extends Component{
  constructor(){
    super()
    this.state = {
      isRegistered: false,
      id: null,
      section_title: "",
      section_id: "",
      department: "",
      instructor: "",
      registered: "",
      capacity: "",
      room: "",

    }
    this.register = this.register.bind(this)
    this.drop = this.drop.bind(this)
  }

  componentDidMount(){
    this.setState({
      id: this.props.id,
      section_title: this.props.section_title,
      isRegistered: this.props.isRegistered,
      section_id: this.props.section_id,
      department: this.props.department,
      instructor: this.props.instructor,
      registered: this.props.registered,
      capacity: this.props.capacity,
      room: this.props.room,
    })
  }

  componentWillReceiveProps(){
    this.setState({
      id: this.props.id,
      section_title: this.props.section_title,
      isRegistered: this.props.isRegistered,
      section_id: this.props.section_id,
      department: this.props.department,
      instructor: this.props.instructor,
      registered: this.props.registered,
      capacity: this.props.capacity,
      room: this.props.room,
    });
  }

  //When a student clicks the "Register this Section" button, the component will make a call to the database to drop that section and update the amount of students registered in the section. It will also allow the student to access the "drop a section" button.
  register(){
    axios.get(`${rootURL}sections/${this.state.id}/register`)
    .then((res)=>{
      if(res.status === 200){
        console.log('registered successfully')
        this.setState({
          registered: res.data[0].registered,
          isRegistered: true
        });
        //Then, it will call the register function of the parent, which will update the student section list.
        return this.props.register(res.data[0]);
      } else {
        console.log('an error occurred');
      }
    })
  }

  // When a student hits the "Drop this Section" button, the component will make a call to the database to drop this section. It will also call the parent drop function to remove the section from the student section list. 
  drop(){
    axios.get(`${rootURL}sections/${this.state.id}/drop`)
    .then((res)=>{
      if(res.status === 200){
        console.log('registered successfully')
        this.setState({
          registered: res.data[0].registered,
          isRegistered: false
        });
        return this.props.drop(res.data[0]);
      } else {
        console.log('an error occurred');
      }
    })
  }

  render(){
    return(
      <article className="section" id={this.state.id}>
        <h2 className="title">{this.state.section_id} | {this.state.section_title}</h2>

        <div className="classLocation">
          <span className="department">{this.state.department}</span> |
          <span className="room"> {this.state.room}</span>
        </div>
        <p className="instructor"> {this.state.instructor}</p>
        <p>Spots taken: <span className="studentNumbers">{this.state.registered} / {this.state.capacity}</span> </p>

        <div className="registrationButtons">
        {/* If the student is not registered and the course is not full, the student can register the section. If it is full, the student will nto be able to access the register course button. */}
          {this.state.registered === this.state.capacity &&
          <p>This class is full.</p>}
          
          {!this.state.isRegistered && this.state.capacity !== this.state.registered &&
            <button onClick={this.register}> Register for this Class </button>
          }

          {this.state.isRegistered &&
            <button onClick={this.drop}> Drop this Class </button>
          }
        </div>
      </article>
    )
  }
}

export default Section
