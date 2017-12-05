import React, { Component } from 'react';
import './ContactUs.css';

class ContactUs extends Component {
    render() {
        return (
            <div className="ContactUs" style={{height: 300}}>
                <div style={{display: 'flex', }}>
                    <div style={{flex: 1}}>
                        <h3>Contact Us</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default ContactUs;
