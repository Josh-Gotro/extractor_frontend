import React, { Component } from 'react';

class DisplayColors extends Component {
    render() {
        return (
            <div className={"Column"} className='Splotch' style={{background: this.props.color}}>
                {/* {this.props.color} */}
            </div>
        );
    }
}

export default DisplayColors;
