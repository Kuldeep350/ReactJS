import React, { Component } from 'react';
import './App.css';

// import logo from './logo.svg';
// import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//             <a className="App-link" href="https://reactjs.org" target="_blank"rel="noopener noreferrer">
//             Learn React
//           </a>
//         </header>
//       </div>
//     );
//   }
// }

//export default App;

class Helloreact extends Component{
  customeStyleLink={
    backgroundColor:'yellow',
    textDecoration:'none'
  }
    render(){
      return(
        <a href={this.props.link} style={this.customeStyleLink}>{this.props.linkText}</a>
      )
    }
  }
  export default Helloreact;