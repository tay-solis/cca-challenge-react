import React from 'react'


//This component renders the title of the class a student is registered in.
const RegisteredSection = (props) => {
    return(
      <div className="registedSection">
        <h3>{props.section_title}</h3>
      </div>
    )

}

export default RegisteredSection
