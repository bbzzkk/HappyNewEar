import React, { Component } from 'react'

// import {inject, observer}from 'mobx-react'

import Footer from '../components/Footer'

// @inject('')
// @observer
class FooterContainer extends Component{
    handleClick=() =>{}
    render(){
        return(
            <Footer handleClick={this.handleClick} />
        )
    }
}

export default FooterContainer