import { BrowserRouter, Route, Routes } from "react-router-dom";
import { combineReducers, createStore } from "redux";
import { Provider } from "react-redux";
// import "./App.css";
// import HelloWorld from "./components/HelloWorld";
import Labs from "./components/Labs/index.js";
import Tuiter from "./components/Tuiter/index.js";
// import "bootstrap/dist/css/bootstrap.min.css";
import HelloWorld from "./components/HelloWorld.js";
import ExploreScreen from "./components/Tuiter/ExploreScreen/ExploreScreen.js";
import ProfileScreen from "./components/Tuiter/ProfileScreen/ProfileScreen.js";
// import "./vendors/bootstrap/css/bootstrap.min.css";
// import "./vendors/fontawesome/css/all.min.css";

// The pages

// Reducers
import who from "./components/Tuiter/reducers/who";
import tuits from "./components/Tuiter/reducers/tuits";
import ProfileInfo from "./components/Tuiter/reducers/profile";
import HomeScreen from "./components/Tuiter/HomeScreen/index.js";
import tuitsReducer from "./components/Tuiter/reducers/tuits-reducer";

const reducers = combineReducers({ who, tuits, ProfileInfo, tuitsReducer });
const store = createStore(reducers);

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/">
              <Route index element={<Labs />} />
              <Route path="hello" element={<HelloWorld />} />
              <Route path="tuiter" element={<Tuiter />}>
                <Route index element={<HomeScreen />} />
                <Route path="explore" element={<ExploreScreen />} />
                <Route path="profiles" element={<ProfileScreen />} />
              </Route>
            </Route>
          </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;