import React, { Component } from 'react'
import Footer from '../components/Footer'

class FooterContainer extends Component{
    handleClick=() =>{}
    render(){
        return(
            <Footer handleClick={this.handleClick} />
        )
    }
}

export default FooterContainer