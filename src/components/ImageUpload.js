import React, { Component } from 'react';
import DisplayColors from './DisplayColors'
import DisplayFeatureImage from './DisplayFeatureImage'
import MatchedImages from './MatchedImages'
class ImageUpload extends Component {
    render() {
        return (
            <div>
                <h1>image upload</h1>
                < DisplayColors />
                < DisplayFeatureImage />
                < MatchedImages />

            </div>
        );
    }
}

export default ImageUpload;
