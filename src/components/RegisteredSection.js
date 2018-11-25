import React, {Component} from 'react'

class RegisteredSection extends Component{
  render(){
    return(
      <div className="registedSection">
        <h3>{this.props.section_title}</h3>
      </div>
    )
  }
}

export default RegisteredSection
