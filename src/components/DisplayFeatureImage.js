import React, { Component } from 'react';
import Image from './Image'


class DisplayFeatureImage extends Component {

    deleteSucker = () => {
        console.log(this.props.featureImage)
        if (this.props.featureImage.id) {
            return <button onClick={() => this.props.handleClick(this.props.featureImage.id)}>please delete me forever</button>
        }
    }

    render() {
        return (
            <div >
                <Image key={this.props.featureImage.id} imageDetails={this.props.featureImage} handleClick={this.props.featuredClick} />
                {this.deleteSucker()}
            </div>
        );
    }
}

export default DisplayFeatureImage;
