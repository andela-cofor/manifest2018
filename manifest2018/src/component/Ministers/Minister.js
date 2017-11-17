import React, { Component } from 'react';
import './Minister.css'

class Minister extends Component {
    render() {
        return (
            <div className="Ministers" style={{height: 300}}>
                <div style={{display: 'flex', }}>
                    <div style={{flex: 1, color: 'white'}}>
                        <h3>Minister</h3>
                    </div>
                    <div style={{flex: 1, color: 'white'}}>
                        <h3>Minister</h3>
                    </div>
                    <div style={{flex: 1, color: 'white'}}>
                        <h3>Minister</h3>
                    </div>
                    <div style={{flex: 1, color: 'white'}}>
                        <h3>Minister</h3>
                    </div>
                    <div style={{flex: 1, color: 'white'}}>
                        <h3>Minister</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Minister;
