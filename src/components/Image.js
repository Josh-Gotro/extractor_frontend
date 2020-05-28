import React, { Component } from 'react';



class Image extends Component {
    callImage = () => {
        //console.log('img component')
            const img = this.props.imageDetails.html;
            return <img src={img} alt={this.props.imageDetails.id} ></img>
        
    }

    render() {
       
        return (
            <div className="card" onClick={() => this.props.handleClick(this.props.imageDetails)}>
                {/* {this.props.imageDetails.id} */}
                {this.callImage()}
            
            </div>
        );
    }
}




export default Image;
