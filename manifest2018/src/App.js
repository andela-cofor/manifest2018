import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import About from "./component/About/About";
import Minister from "./component/Ministers/Minister";
import Registration from "./component/Registration/Registration";
import ContactUs from "./component/ContactUs/ContactUs";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header container">
          <img class="img-responsive"
               src='https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/23621364_10214745539535589_2576423523554200937_n.jpg?_nc_eui2=v1%3AAeGVRgQROAVWic0Zc8z3KqLUnDRhzn_DTPqNFnVRWtNbf1IVERb0t_V7J7bd6g5wiY4u53PO3ylT03zk6RGs_hi34lFYH7fU9VAcJhix7NLtvg&oh=657d38c12eae6361815cff01bc88cdaf&oe=5AA4A54F' />
          {/*<img src={logo} className="App-logo" alt="logo" />*/}
          {/*<h1 className="App-title">Welcome to React</h1>*/}
        </header>
          <div>
              <About />
          </div>
          <div>
              <Minister/>
          </div>
          <div>
              <Registration />
          </div>
          <div>
              <ContactUs />
          </div>
      </div>
    );
  }
}

export default App;
