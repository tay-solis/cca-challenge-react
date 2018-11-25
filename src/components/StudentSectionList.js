import React, {Component} from 'react'
import RegisteredSection from './RegisteredSection'


//This component receives an array of registered classes and renders them as RegisteredSection components. It also displays the number of classes a student is registered in.
class StudentSectionList extends Component{
  constructor(){
    super();
    this.state = {
      sections: [],
      classesRegistered: 0
    }
  }


  componentWillReceiveProps(){
    let sections = this.props.sections;
    let classesRegistered = this.props.sections.length;
    this.setState({
      sections,
      classesRegistered
    })
  }

  componentDidMount(){
    let sections = this.props.sections;
    this.setState({
      sections
    })
  }
  
  render(){
    return(
      <aside className="studentSectionList">
        <h2>My Sections</h2>
        <p>Classes Registered: {this.state.classesRegistered}</p>
        {this.state.sections.map((section, i) =>(
          <RegisteredSection
            key={i}
            id={section.id}
            section_title= {section.section_title}
            />))}
      </aside>
    )
  }
}

export default StudentSectionList;
