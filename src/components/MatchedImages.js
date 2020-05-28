import React, { Component } from 'react';
import Image from './Image'

class MatchedImages extends Component {

    mapImages = () => {
        if ( this.props.allImages !== null) { 
        return this.props.allImages.map(image => <Image key={image.id} imageDetails={image} handleClick={this.props.chooseFeatured}/>)
        };
    }

    render() {
        return (
            <div>
                <h1>All Images</h1>
                {this.mapImages()}
            </div>
        );
    }
}

export default MatchedImages;
