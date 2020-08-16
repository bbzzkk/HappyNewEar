import React, { Component } from 'react'

// import {inject, observer} from 'mobx-react'

import Header from '../components/Header'

// @inject('HomeStore')
// @observer
class HeaderContainer extends Component{
    handleLogin = () =>{
        //
        
    }
    render(){
        return(
            <Header handleLogin={this.handleLogin}/>
        )
    }
}

export default HeaderContainer