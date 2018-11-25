import React, {Component} from 'react'

class Header extends Component{
    render(){
        return(
            <nav>
                <img className="logo" src="./full-logo.png"/>
                <h1>CCA Course Catalog</h1>
            </nav>
        )
    }
}

export default Header;
