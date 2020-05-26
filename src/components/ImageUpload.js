import React, { Component } from 'react';
import DisplayColors from './DisplayColors'
import DisplayFeatureImage from './DisplayFeatureImage'
import MatchedImages from './MatchedImages'


class ImageUpload extends Component {
    constructor(props){
        super(props)
        this.fileInputRef = React.createRef();
        this.openFileDialog = this.openFileDialog.bind(this);
    }

    openFileDialog = () => {
        if (this.props.disabled) return;
        this.fileInputRef.current.click();
    }


    render() {
        return (
            <div 
                className="Dropzone" 
                onClick={this.openFileDialog} 
                style={{cursor: this.props.disabled ? "default" : "pointer"}}
            >

                <input 
                ref={this.fileInputRef}
                className={"FileInput"}
                type={"file"}
                multiple onChange={this.onFilesAdded}
                />

                <h1>image upload</h1>
                    <div className={"Card"} >
                        {/* <span> */}
                            < DisplayColors />
                            < DisplayColors />
                            < DisplayColors />
                        {/* </span> */}
                        <span>
                            < DisplayFeatureImage />
                        </span>
                    </div>
                    < MatchedImages />
            </div>
        );
    }
}

export default ImageUpload;
