import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Header from '../Header/Header.js';


function One() {
  return <div>Chao ban</div>
}

function App() {
  return (
    <div id="container">
      <Header></Header>
  {/* this is content area */}
  <div id="content">
    {/* this is the content for menu */}
    <div id="left-content">
      <h1>Category</h1>
      <ul className="drop">
        <li><a href="#">Menu item 1</a></li>
        <li><a href="#">Menu item 2</a></li>
        <li><a href="#">Menu item 3</a>
          <ul className="drop">
            <li><a href="#">Menu item 3.1</a></li>
            <li><a href="#">Menu item 3.2</a></li>
            <li><a href="#">Menu item 3.3</a></li>
            <li><a href="#">Menu item 3.4</a>
              <ul className="drop">
                <li><a href="#">Menu item 3.4.1</a></li>
                <li><a href="#">Menu item 3.4.2</a></li>
                <li><a href="#">Menu item 3.4.3</a></li>
                <li><a href="#">Menu item 3.4.4</a></li>
                <li><a href="#">Menu item 3.4.5</a>
                  <ul className="drop">
                    <li><a href="#">Menu item 3.4.5.1</a></li>
                    <li><a href="#">Menu item 3.4.5.2</a></li>
                    <li><a href="#">Menu item 3.4.5.3</a></li>
                    <li><a href="#">Menu item 3.4.5.4</a>
                      <ul className="drop">
                        <li><a href="#">Menu item 3.4.5.1.1</a></li>
                        <li><a href="#">Menu item 3.4.5.1.2</a></li>
                        <li><a href="#">Menu item 3.4.5.1.3</a></li>
                        <li><a href="#">Menu item 3.4.5.1.4</a>
                          <ul className="drop">
                            <li><a href="#">Menu item 3.4.5.1.4.1</a></li>
                            <li><a href="#">Menu item 3.4.5.1.4.2</a></li>
                            <li><a href="#">Menu item 3.4.5.1.4.3</a></li>
                            <li><a href="#">Menu item 3.4.5.1.4.4</a></li>
                          </ul>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
              </ul>  
            </li>
          </ul> 
        </li>
        <li><a href="#">Menu item 4</a></li>
        <li><a href="#">Menu item 5</a></li>
        <li><a href="#">Menu item 6</a></li>
      </ul>
    </div>
    {/* this is a content for item  */}
    <div id="right-content">
      <h2>Product : </h2>
      <div id="products">
        <div className="product">
          <div className="text">
            <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
          </div>
          <div className="p-img">
            <img src="images/mayanh1.jpg" width={200} height={200} />
          </div>
          <div className="text">
            <div className="p-cat">DIGITAL CAMERA </div>
            <div className="p-price">Please Call</div>
            <input type="button" className="button" name="add" defaultValue="Add to cart" />
          </div>
          <div className="clear" />
        </div>
        <div className="product">
          <div className="text">
            <div className="p-name"><a href="item.html">LUMIX DMC-G3</a></div>
          </div>
          <div className="p-img">
            <img src="images/mayanh2.jpg" width={200} height={200} />
          </div>
          <div className="text">
            <div className="p-cat">DIGITAL CAMERA </div>
            <div className="p-price">Please Call</div>
            <input type="button" className="button" name="add" defaultValue="Add to cart" />
          </div>
          <div className="clear" />
        </div>
        <div className="product">
          <div className="text">
            <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
          </div>
          <div className="p-img">
            <img src="images/mayanh3.jpg" width={200} height={200} />
          </div>
          <div className="text">
            <div className="p-cat">DIGITAL CAMERA </div>
            <div className="p-price">Please Call</div>
            <input type="button" className="button" name="add" defaultValue="Add to cart" />
          </div>
          <div className="clear" />
        </div>
        <div className="product">
          <div className="text">
            <div className="p-name"><a href="item.html">LUMIX DMC-G3</a></div>
          </div>
          <div className="p-img">
            <img src="images/mayanh2.jpg" width={200} height={200} />
          </div>
          <div className="text">
            <div className="p-cat">DIGITAL CAMERA </div>
            <div className="p-price">Please Call</div>
            <input type="button" className="button" name="add" defaultValue="Add to cart" />
          </div>
          <div className="clear" />
        </div>	
        <div className="product">
          <div className="text">
            <div className="p-name"><a href="item.html">LUMIX DMC-G2</a></div>
          </div>
          <div className="p-img">
            <img src="images/mayanh3.jpg" width={200} height={200} />
          </div>
          <div className="text">
            <div className="p-cat">DIGITAL CAMERA </div>
            <div className="p-price">Please Call</div>
            <input type="button" className="button" name="add" defaultValue="Add to cart" />
          </div>
          <div className="clear" />
        </div>
        <div style={{clear: 'both'}} />
      </div>
      <div style={{clear: 'both'}} />
    </div>
    <div style={{clear: 'both'}} />
  </div>
</div>

  );
}

// class App extends Component {
//   render(){
//     return (
//       <div className="App">
//         <div className="container">
//           <div className="row" rong="300px" cao="250px" nen="grey" mauchu="red">
//             <B tieude="San pham 1" linkanh="https://twpark.com/wp-content/uploads/2024/09/3Y9A5146-1-1024x664.jpg"></B>
//             <B tieude="San pham 1" linkanh="https://twpark.com/wp-content/uploads/2024/09/3Y9A5146-1-1024x664.jpg"></B>
//             <B tieude="San pham 1" linkanh="https://twpark.com/wp-content/uploads/2024/09/3Y9A5146-1-1024x664.jpg"></B>
//             <B tieude="San pham 1" linkanh="https://twpark.com/wp-content/uploads/2024/09/3Y9A5146-1-1024x664.jpg"></B>
//             <B tieude="San pham 1" linkanh="https://twpark.com/wp-content/uploads/2024/09/3Y9A5146-1-1024x664.jpg"></B>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }

// B là con, App là cha (data => App->B) K.báo cha: key=value <Component can key='value

function B(props) {
  return <div>
    <div style={{with: props.rong, height: props.cao, backgroundColor: props.nen}} className='col-xs-3 col-sm-3 col-md-3 col-lg-3'>
      <img src={props.linkanh} height="200px" width="200px" />
      <p>{props.tieude}: </p>
      <p style={{ color: props.mauchu}}>Gia san pham: 400K</p>
      
    </div>
  </div>
}


function Greeting(props) {
  return <h1>Hello, {props.name}!</h1>;
}

class Four extends Component {
  render() {
    return (
      <div>
        <button>Day la vi du class</button>
      </div>
    );
  }
}


export default App;
