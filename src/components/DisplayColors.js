import React, { Component } from 'react';

class DisplayColors extends Component {
    render() {
        return (
            <div className={"Column"} className='Splotch' style={{background: this.props.color}} onClick={() => this.props.colorClick(this.props.color)}>
                <h1>save</h1>
            </div>
        );
    }
}

export default DisplayColors;
