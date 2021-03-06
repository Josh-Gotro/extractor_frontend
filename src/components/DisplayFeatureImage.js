import React, { Component } from 'react';
import Image from './Image'


class DisplayFeatureImage extends Component {

    deleteSucker = () => {
        // console.log(this.props.featureImage)
        if (this.props.featureImage.id) {
            return <button className="Butt" style={ {background: this.props.savedColor} }onClick={(e) => this.props.handleClick(e, this.props.featureImage.id)}>do not press</button>
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
