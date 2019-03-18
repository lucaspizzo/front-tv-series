import React, { Component } from 'react'
import { BannerImageComponent } from './style';

class BannerImage extends Component {
    
    render() {
        return (
            <BannerImageComponent className="col-md-6 col-sm-12">
                <img src={this.props.value} />
            </BannerImageComponent>
        );
    };
};


export default BannerImage;