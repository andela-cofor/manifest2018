import React, { Component } from 'react';
import './App.css';
import About from "./component/About/About";

class App extends Component {

  render() {
    return (
      <div className="App container-fluid" style={{ marginLeft: 20, marginRight: 20, marginTop: 20}}>
          <div id="myCarousel" class="carousel slide" data-ride="carousel" >
              <ol class="carousel-indicators">
                  <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                  <li data-target="#myCarousel" data-slide-to="1"></li>
              </ol>

              <div class="carousel-inner">

                  <div class="item active">
                      <img className="demo1" style={{ height: '10000px !important', width: '100000px' }} src="https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/23621364_10214745539535589_2576423523554200937_n.jpg?_nc_eui2=v1%3AAeGVRgQROAVWic0Zc8z3KqLUnDRhzn_DTPqNFnVRWtNbf1IVERb0t_V7J7bd6g5wiY4u53PO3ylT03zk6RGs_hi34lFYH7fU9VAcJhix7NLtvg&oh=657d38c12eae6361815cff01bc88cdaf&oe=5AA4A54F" alt="Los Angeles" />
                      <div class="carousel-caption">
                          {/*<h3>Los Angeles</h3>*/}
                          {/*<p>LA is always so much fun!</p>*/}
                          {/*<a href="#bottom"><button type="submit" class="btn btn-success" style={{ marginBottom: 10 }}>Register</button></a>*/}
                      </div>
                  </div>

                  <div className="item">
                      <img className="demo1" style={{ height: '10000px !important', width: '100000px' }} src="https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/24174197_10214839085234173_3394620636656646042_n.jpg?_nc_eui2=v1%3AAeEANena_f1iJ5nL9gOx0YcY_LKngWazP69v14RnZUjVzPdQ4q2CHc-fITLlOspos028U71MG75AAfXxKR0QQpxF7Ra4tJ5i6yPapGa7zcqZbw&oh=9348e9a9ba15b79433c6a3914c572057&oe=5A9A5116" alt="Los Angeles" />
                  </div>
                  {/*<div className="item">*/}
                      {/*<img className="demo1" style={{ height: '10000px !important', width: '100000px' }} src="https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/23621364_10214745539535589_2576423523554200937_n.jpg?_nc_eui2=v1%3AAeGVRgQROAVWic0Zc8z3KqLUnDRhzn_DTPqNFnVRWtNbf1IVERb0t_V7J7bd6g5wiY4u53PO3ylT03zk6RGs_hi34lFYH7fU9VAcJhix7NLtvg&oh=657d38c12eae6361815cff01bc88cdaf&oe=5AA4A54F" alt="Los Angeles" />*/}
                  {/*</div>*/}
                  {/*<div class="item">*/}
                      {/*<img className="demo1" style={{ height: '10000px !important', width: '100000px' }} src="https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/23621364_10214745539535589_2576423523554200937_n.jpg?_nc_eui2=v1%3AAeGVRgQROAVWic0Zc8z3KqLUnDRhzn_DTPqNFnVRWtNbf1IVERb0t_V7J7bd6g5wiY4u53PO3ylT03zk6RGs_hi34lFYH7fU9VAcJhix7NLtvg&oh=657d38c12eae6361815cff01bc88cdaf&oe=5AA4A54F" alt="Los Angeles" />*/}
                  {/*</div>*/}
                  {/*<div class="item">*/}
                      {/*<img className="demo1" style={{ height: '10000px !important', width: '100000px' }} src="https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/23621364_10214745539535589_2576423523554200937_n.jpg?_nc_eui2=v1%3AAeGVRgQROAVWic0Zc8z3KqLUnDRhzn_DTPqNFnVRWtNbf1IVERb0t_V7J7bd6g5wiY4u53PO3ylT03zk6RGs_hi34lFYH7fU9VAcJhix7NLtvg&oh=657d38c12eae6361815cff01bc88cdaf&oe=5AA4A54F" alt="Los Angeles" />*/}
                  {/*</div>*/}
                  {/*<div class="item">*/}
                      {/*<img className="demo1" style={{ height: '10000px !important', width: '100000px' }} src="https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/23621364_10214745539535589_2576423523554200937_n.jpg?_nc_eui2=v1%3AAeGVRgQROAVWic0Zc8z3KqLUnDRhzn_DTPqNFnVRWtNbf1IVERb0t_V7J7bd6g5wiY4u53PO3ylT03zk6RGs_hi34lFYH7fU9VAcJhix7NLtvg&oh=657d38c12eae6361815cff01bc88cdaf&oe=5AA4A54F" alt="Los Angeles" />*/}
                  {/*</div>*/}

                  <a class="left carousel-control" href="#myCarousel" data-slide="prev">
                      <span class="glyphicon glyphicon-chevron-left"></span>
                      <span class="sr-only">Previous</span>
                  </a>
                  <a class="right carousel-control" href="#myCarousel" data-slide="next">
                      <span class="glyphicon glyphicon-chevron-right"></span>
                      <span class="sr-only">Next</span>
                  </a>
              </div>
          </div>
          {/*<div class="jumbotron banner">*/}
              {/*<div class="container">*/}
                      {/*<img class="img-responsive" src='https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/23621364_10214745539535589_2576423523554200937_n.jpg?_nc_eui2=v1%3AAeGVRgQROAVWic0Zc8z3KqLUnDRhzn_DTPqNFnVRWtNbf1IVERb0t_V7J7bd6g5wiY4u53PO3ylT03zk6RGs_hi34lFYH7fU9VAcJhix7NLtvg&oh=657d38c12eae6361815cff01bc88cdaf&oe=5AA4A54F' />*/}
              {/*</div>*/}
          {/*</div>*/}
        {/*<header className="App-header container">*/}
          {/*<img class="img-responsive"*/}
               {/*src='https://scontent.flos2-1.fna.fbcdn.net/v/t1.0-9/23621364_10214745539535589_2576423523554200937_n.jpg?_nc_eui2=v1%3AAeGVRgQROAVWic0Zc8z3KqLUnDRhzn_DTPqNFnVRWtNbf1IVERb0t_V7J7bd6g5wiY4u53PO3ylT03zk6RGs_hi34lFYH7fU9VAcJhix7NLtvg&oh=657d38c12eae6361815cff01bc88cdaf&oe=5AA4A54F' />*/}
          {/*/!*<img src={logo} className="App-logo" alt="logo" />*!/*/}
          {/*/!*<h1 className="App-title">Welcome to React</h1>*!/*/}
        {/*</header>*/}
          <div className='row'>
              <About />
          </div>
      </div>
    );
  }
}

export default App;
