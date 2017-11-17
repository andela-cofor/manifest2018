import React, { Component } from 'react';

class About extends Component {
    render() {
        return (
            <div className="About" style={{height: 300}}>
                <p className="App-intro">
                    {/*<h4>About Comes Here!!!</h4>*/}
                </p>
                <div style={{display: 'flex', }}>
                    <div style={{flex: 1}}>
                        <h3>Mission</h3>
                    </div>
                    <div style={{flex: 2}}>
                        <h3>Vision</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
