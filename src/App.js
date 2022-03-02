import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootswatch/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import './App.css';
import Labs from "./components/Labs";
import HelloWorld from "./components/HelloWorld";
import Tuiter from "./components/Tuiter";
import {BrowserRouter, Route, Routes} from "react-router-dom";

function App() {
  return (
        // Video 48:00

        <div className="container">

          <BrowserRouter>
          <Routes>
            <Route path="/HelloWorld" exact element={<HelloWorld/>}/>
            <Route path="/Labs" exact element={<Labs/>}/>
            <Route path="/" exact element={<Labs/>}/>
            <Route path="/Tuiter" exact element={<Tuiter/>}/>

          </Routes>


          </BrowserRouter>

            {/*<Labs/>*/}
            {/*<HelloWorld/>*/}
            {/*<Tuiter/>*/}
          {/*<Route path="/labs">*/}
          {/*  <Labs/>*/}
          {/*</Route>*/}
          {/*<Route path="/tuiter">*/}
          {/*  <Tuiter/>*/}
          {/*</Route>*/}
        </div>
  );
}
export default App;