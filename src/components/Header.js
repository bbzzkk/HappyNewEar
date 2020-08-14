import React, {Component} from 'react';

// import { resetGlobalState } from 'mobx/lib/internal';

// import {HeaderBlock, Wrapper } from '../styles/HeaderStyle'

//import Responsive from './Responsive';
//import Button from './Button';

class Header extends Component{
    render(){
        const {handleLogin} = this.props
        return (
            
                <div>
                    <div>
                        <div 
                        className="logo">
                            <img 
                        style={{width:'10em' }}src='images/header/HNElogo.png'/>
                        </div>
                        <div className="right">
                            <div className="options">
                                <button onClick={handleLogin}>로그인</button>
                                <button onClick={handleLogin}>관심상품</button>
                            </div>                
                        </div>
                    </div>
                </div>
   
            
        )}
}




export default Header
