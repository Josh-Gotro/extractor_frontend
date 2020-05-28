import React, { Component } from 'react';

class DisplayColors extends Component {
    render() {
        return (
            <span style={{background: this.props.color}}>
                <h1>color</h1>
                {this.props.color}
            </span>
        );
    }
}

export default DisplayColors;
