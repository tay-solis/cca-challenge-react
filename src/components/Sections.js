import React, {Component} from 'react'
import axios from 'axios'
import {rootURL} from '../config/constants'

import Section from './Section'
import StudentSectionList from './StudentSectionList'

axios.defaults.xsrfHeaderName = "X-CSRFTOKEN";
axios.defaults.xsrfCookieName = "csrftoken";


//This component renders the course catalog as well as the registered courses list. 
class Sections extends Component{
    constructor(){
        super()
        this.state = {
            sections: [],
            registeredSections:[]
        }
        this.register = this.register.bind(this)
        this.drop = this.drop.bind(this)
    }

    // Since the component has already updated itself, the course will simply be added to the registered section.
    register(data){
      let registeredSections = this.state.registeredSections;
      registeredSections.push(data);
      this.setState({
        registeredSections
      })
    }

    // The component will remove the course from the registered sections.
    drop(data){
      let registeredSections = this.state.registeredSections;
      for (let i = 0; i < registeredSections.length; i++){
        if(data.id === registeredSections[i].id){
          console.log(`Removing section ${i}`);
          registeredSections.splice(i, 1)
        }
      }
      this.setState({
        registeredSections
      })
    }

    componentDidMount(){
        axios.get(`${rootURL}sections/all`)
        .then((res)=>{
          let sections = [];
            for (let i = 0; i < res.data.length; i++){
              sections.push(<Section
                key={i}
                id={res.data[i].id}
                drop={this.drop}
                register={this.register}
                section_title= {res.data[i].section_title}
                section_id= {res.data[i].section_id}
                department= {res.data[i].department}
                instructor= {res.data[i].instructor}
                registered= {res.data[i].registered}
                capacity= {res.data[i].capacity}
                room= {res.data[i].room}
                />)
            }
            this.setState({
              sections
            })
        })
        .catch((err)=>{
            console.log(err);
        })
    }

    render(){
        return(
            <main className="courseListing">
              <section className="sections">
                {this.state.sections &&
                this.state.sections}
              </section>

                <StudentSectionList sections={this.state.registeredSections} />
            </main>
        )
    }
}

export default Sections
