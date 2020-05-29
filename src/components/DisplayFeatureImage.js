import React, { Component } from 'react';
import Image from './Image'


class DisplayFeatureImage extends Component {
    imgInfo = () => {
        console.log(this.props.img);
        
    //     if (this.props.featureImage !== null) {
    //         return this.props.featureImage;
    //    }
   }
    render() {
        return (
            <div>

                <Image key={this.props.featureImage.id} imageDetails={this.props.featureImage} handleClick={this.props.featuredClick}/>
                

            </div>
        );
    }
}

export default DisplayFeatureImage;
