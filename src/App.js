import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootswatch/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import Labs from "./components/Labs";
import Hello from "./components/Hello";
import Tuiter from "./components/tuiter";
import {BrowserRouter} from "react-router-dom";


// import {Component} from "react";
//
// class Tuiter extends Component {
//   render() {
//     return null;
//   }
// }

function App() {
  return (
      <BrowserRouter>
      <div className="container">
        <Hello/>
        <Labs/>
        <Tuiter/>
      </div>
        <BrowserRouter>
  );
}
export default App;


// import logo from './logo.svg';
// import './App.css';
//
// function App() {
//   return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//               className="App-link"
//               href="https://reactjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header>
//       </div>
//   );
// }
//
// export default App;