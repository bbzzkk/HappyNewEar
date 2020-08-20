import React, { Component } from 'react'

import PreviewContainer from "../containers/PreviewContainer";
import Slider from '../components/Slider'

import { HomepageLayout } from '../styles/HomepageLayout';

class Homepage extends Component{
    render(){
        return(
            <HomepageLayout>
                <Slider/>
                <PreviewContainer />
            </HomepageLayout>
        )
    }
}

export default React.memo(Homepage)