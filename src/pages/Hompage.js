import React, { Component } from 'react'

import PreviewContainer from "../containers/PreviewContainer";
import Slider from '../components/Slider'

class Homepage extends Component{
    render(){
        return(
            <>
                <Slider/>
                <PreviewContainer />
            </>
        )
    }
}

export default Homepage