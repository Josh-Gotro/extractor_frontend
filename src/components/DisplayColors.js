import React, { Component } from 'react';

class DisplayColors extends Component {
    render() {
        return (
            <span className='Splotch' style={{background: this.props.color}}>
                {this.props.color}
            </span>
        );
    }
}

export default DisplayColors;
