import React, { Component } from 'react';


class PreviewItem extends Component {
    render() {
        const { name, onSelect } = this.props;
        return (
            <div>
                <div onClick={() => onSelect(name)}>
                    <img size="small" src={name.imageUrl} />
                    <div className="content">
                        <div className="price">
                            {name.price}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PreviewItem;
