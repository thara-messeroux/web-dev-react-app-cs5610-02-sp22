import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput/index.js";
import ReduxExamples from "./redux-examples";
import Styles from "./Styles";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";
import TuitList from "../Tuiter/TuitList/TuitList";

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      {/* <TodoItem/> */}
      <TuitList/>
      <TodoList/>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <ReduxExamples/>
      <Link to="/tuiter/profiles">Profile</Link> |<Link to="/tuiter">Tuiter</Link>
    </>
  );
};

export default Labs;
