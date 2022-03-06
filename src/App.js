import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import "./App.css";
// import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs/index.js";
import HomeScreen from './components/Tuiter/HomeScreen/HomeScreen.js';
import Tuiter from "./components/Tuiter/index.js";
import "./vendors/bootstrap/css/bootstrap.min.css";
import "./vendors/fontawesome/css/all.min.css";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <header/>
        <Routes>
          <Route path="/" element={<Labs />} />
          <Route path="/labs" element={<Labs />} />
          <Route path="/tuiter" element={<Tuiter />} />
          <Route path="/homescreen" element={<HomeScreen />} />
        </Routes>
        <footer/>
      </div>
    </BrowserRouter>
  );
}
export default App;