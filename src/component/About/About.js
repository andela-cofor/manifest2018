import React, { Component } from 'react';

import firebase from 'firebase';
import Materialize from 'materialize-css';

class About extends Component {

    constructor() {
        super();
        this.state = {email: ''};

        this.addUser=this.addUser.bind(this);
    }

    componentDidMount() {
        var config = {
            apiKey: "AIzaSyBmqwP-OTevpPyC-eIKoMGmLxHQtJ6O0Y8",
            authDomain: "mani-34be7.firebaseapp.com",
            databaseURL: "https://mani-34be7.firebaseio.com",
            projectId: "mani-34be7",
            storageBucket: "mani-34be7.appspot.com",
            messagingSenderId: "943225900418"
        };
        firebase.initializeApp(config);
    }

    register = (event) => {
        event.preventDefault();
    }

    /**
     * Listen for change event
     * @param {object} event
     * @memberof Login
     * @returns {void}
     */
    handleChange = (event) => {
        this.setState({ email: event.target.value });
    }

    /**
     * Listen for change event
     * @param {object} event
     * @memberof Login
     * @returns {void}
     */
    handleSubmit = (event) => {
        // console.log(this.state)
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.state.email)) {
            this.validateUser();
        } else {
            Materialize.toast('You have entered an invalid email address!', 4000);
        }
    }

    validateUser = () => {
        let userEmail = this.state.email;
        let hasRegistered = false;

        firebase.database().ref('/users/').once('value').then(function(snapshot) {
            let emails = (snapshot.val()) || 'Anonymous';
            Object.keys(emails).forEach((key) => {
                if(emails[key]['email'] === userEmail) {
                    hasRegistered = true;
                    Materialize.toast('Email already exists', 4000);
                }
            })
        })
            .then(() => {
                if(hasRegistered === false) {
                    this.addUser();
                };
            })
    }

    addUser = () => {
        firebase.database().ref('users/').push({
            email: this.state.email,
        })
            .then(() => {
                Materialize.toast('You have successfully registered for this event', 4000);
            })
    }

    render() {
        return (
            <div className="About" style={{height: 300, color: '#5a5a5a'}}>
                <div style={{ marginTop: 30 }}>
                    <div className="row" style={{ marginBottom: 50}}>

                        <div className='col-lg-1'></div>

                        <div className='col-lg-5' style={{ marginTop: 10, color: '#5a5a5a'}}>
                            <img class="img-responsive" style={{ margin: '0 auto'}} alt=""
                                 src='http://www.turquoisepeople.co.uk/wp-content/uploads/2014/11/jobs-hero-1-1440-900.jpg' />
                        </div>

                        <div className='col-lg-5 text-left ' style={{ color: '#5a5a5a'}}>
                            <h2 style={{ fontFamily: 'Helvetica,Arial,sans-serif', fontWeight: 'normal', marginTop: 100}}>
                                Our mission is to empower believers to move now.
                            </h2>
                            <p style={{fontSize: '16px', fontWeight: '300'}}>
                                Revival is not the move of God's Spirit but the move of God's People. <strong>Mark 16:20</strong>
                            </p>
                        </div>

                    </div>

                    <div className="row" style={{ marginBottom: 100}}>

                        <div className='col-lg-1'></div>

                        <div className='col-lg-5 text-left' style={{ marginTop: 80, color: '#5a5a5a', marginBottom: 80}}>
                            <h2 style={{ fontFamily: 'Helvetica,Arial,sans-serif', fontWeight: 'normal', marginTop: 30}}>
                                Our vision is to see the move of God's Spirit in the lives of believers.
                            </h2>
                            <p style={{fontSize: '16px', fontWeight: '300'}}>
                                Everyday is a revival with God.
                            </p>
                        </div>

                        <div className='col-lg-5' style={{ marginTop: 10, color: '#5a5a5a'}}>
                            <img class="img-responsive" style={{ margin: '0 auto'}} alt=""
                                 src='https://static1.squarespace.com/static/570b09ec45bf2194c86bdc72/t/58eeeacebe6594f0ff520771/1492052704196/Leadership+Circles' />
                        </div>

                    </div>

                    <div className="row container-fluid" style={{ marginTop: 100 }}>
                        <div className="col-lg-3" style={{marginBottom: 100}}>
                            <img class="img-responsive" style={{ height:'140px', width: '140px', borderRadius: '50%', margin: '0 auto', filter: 'grayscale(100%)'}} alt="" src='https://scontent.flos3-1.fna.fbcdn.net/v/t1.0-9/13726710_117374528699787_6780756575670897995_n.jpg?_nc_eui2=v1%3AAeEwfCWawJ7YufL7ZJuOTIek3P4b_JVmyIMw2FJqJxM3EweNXhOzQgvAnp2Q7WX4927Jkuv3Zr9I4savufTzUHqlAVTtTEKEMF80tK_BMSOqIg&oh=1579f2ba0a4a80ee0c6203e347404ade&oe=5A90FB75' />
                            <a href="https://web.facebook.com/osho.oluwatobiii" style={{textDecoration: 'none'}}>
                                <h2 style={{fontSize: '20px', color: '#5a5a5a', textAlign: 'center'}}>Toby Osho</h2>
                            </a>
                            <strong><p>Ministering in Song</p></strong>
                        </div>
                        <div className="col-lg-3" style={{marginBottom: 100}}>
                            <img class="img-responsive" style={{ height:'140px', width: '140px', borderRadius: '50%', margin: '0 auto', filter: 'grayscale(100%)'}} alt=""
                                 src='https://scontent.flos3-1.fna.fbcdn.net/v/t1.0-9/12803239_10208843541829335_4608025519985567461_n.jpg?_nc_eui2=v1%3AAeFuzKnezGh9JNSXNnwuzyQaj3G2ayRSAhDlZ_luSARvpGcRaGe9a03yAX-K8C-kpUaPx0bdITm3pSTfeIof263hCwrMKgGQx2TJhiQSchoSTw&oh=e692a5cee80fa0811ee1261145c45288&oe=5A96B2F2' />
                            <a href="https://web.facebook.com/ofor.b.chinedu" style={{textDecoration: 'none'}}>
                                <h2 style={{fontSize: '20px', color: '#5a5a5a', textAlign: 'center'}}>Chinedu Ofor</h2>
                            </a>
                            <strong><p>Ministering in Word</p></strong>
                        </div>
                        <div className="col-lg-3" style={{marginBottom: 100}}>
                            <img class="img-responsive" style={{ height:'140px', width: '140px', borderRadius: '50%', margin: '0 auto', filter: 'grayscale(100%)'}} alt=""
                                 src='https://scontent.flos3-1.fna.fbcdn.net/v/t1.0-9/23658762_1573373099419963_5624368280267824121_n.jpg?_nc_eui2=v1%3AAeFaT13OAyKU7m2GVlhELhNHSjbAyytbgapgyedtkq3DsLURAnQ4DqzwMdQq3hDI80M-YWuiMsIVN_ITvrFbG6BsfSQz-vTyZNygEFJAHNmYfA&oh=f162c8470c7a780f6139fd84ad979dce&oe=5A99C148' />
                            <a href="https://web.facebook.com/precious.tirorome" style={{textDecoration: 'none'}}>
                                <h2 style={{fontSize: '20px', color: '#5a5a5a', textAlign: 'center',}}>Precious Tirorome</h2>
                            </a>
                            <strong><p>Ministering in Song</p></strong>
                        </div>
                        <div className="col-lg-3" style={{marginBottom: 100}}>
                            <img class="img-responsive" style={{ height:'140px', width: '140px', borderRadius: '50%', margin: '0 auto'}} alt="" src='https://scontent.flos3-1.fna.fbcdn.net/v/t1.0-9/11811364_10207248714962985_5970137543411737971_n.jpg?_nc_eui2=v1%3AAeE6k_zBdw4NrsDfhc9oCMHpXXBl2RPoHIwHRlwwSnzDFopl1dVeHkX6m2pA-jQBuNxZL1YmtQSTppm2eT-eHarBdcNShghgaLEj2vMV7c1v4Q&oh=3f3116a0ce8f84c7ce4f901eb18d4d00&oe=5A6229E4' />
                            <a href="https://web.facebook.com/chijioke.nnamani.3" style={{textDecoration: 'none', filter: 'grayscale(100%)'}}>
                                <h2 style={{fontSize: '20px', color: '#5a5a5a', textAlign: 'center'}}>Chijioke Nnamani</h2>
                            </a>
                            <strong><p>Ministering in Word</p></strong>
                        </div>
                    </div>

                    <div className="row bottom" style={{margin: '0 auto'}}>
                        <div className="col-lg-4"></div>
                        <div className="col-lg-4" style={{ marginBottom: 100, boxShadow: '10px 10px 30px #333'}}>
                            <form style={{ marginTop: 50, marginBottom: 50 }} onSubmit={this.register}>
                                <div class="form-group" >
                                    <label for="exampleInputEmail1"><h5>Enter your email to register</h5></label>
                                    <input type="email" onChange={this.handleChange} value={this.state.email} class="form-control" id="inputEmail1" aria-describedby="emailHelp" placeholder="user@email.com" />
                                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                                </div>
                                <button type="submit" class="btn btn-primary" style={{ marginBottom: 10 }} onClick={this.handleSubmit}>Submit</button>
                            </form>
                        </div>
                        <div className="col-lg-1"></div>
                    </div>
                    <div className="row">
                        <div className="col-lg-4">
                            <h5 className="contact">Contact: 07030296746 or mainifest218@gmail.com</h5>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;
