import React, { Component } from 'react';
import DetailContainer from '../containers/DetailContainer';

class DetailPage extends Component{
    render(){
        return (
        <DetailContainer 
        params={this.props.match.params}/>)
    }
}

export default DetailPage