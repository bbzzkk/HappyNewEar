import React, { Component } from 'react';
import PreviewItem from './PreviewItem';


class PreviewList extends Component {
    render() {
        
        const result = this.props.itemjson.map(tmp => {
            return (
                <div>
                    <PreviewItem name={tmp}></PreviewItem>
                </div>
            );
        });

        return (
            result
        );
    }
}

export default PreviewList;