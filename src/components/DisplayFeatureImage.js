import React, { Component } from 'react';
import Image from './Image'


class DisplayFeatureImage extends Component {
   
    render() {
        return (
            <div>
                <Image key={this.props.featureImage.id} imageDetails={this.props.featureImage} handleClick={this.props.featuredClick}/>
            </div>
        );
    }
}

export default DisplayFeatureImage;
