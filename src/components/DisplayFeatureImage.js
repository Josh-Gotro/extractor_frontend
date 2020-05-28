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
                {/* <Image key={this.imgInfo()} featureDetails={this.imgInfo()} handleClick={this.props.featuredClick}/> */}
                <Image featureDetails={this.imgInfo()}/>
            </div>
        );
    }
}

export default DisplayFeatureImage;
