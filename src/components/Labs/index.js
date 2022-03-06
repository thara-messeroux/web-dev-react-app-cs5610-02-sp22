import React from "react";
import { Link } from "react-router-dom";
import Classes from "./Classes";
import ConditionalOutput from "./ConditionalOutput/index.js";
import Styles from "./Styles";
import TodoItem from "./Todo/TodoItem";
import TodoList from "./Todo/TodoList";

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      {/* <TodoItem/> */}
      <TodoList/>
      <ConditionalOutput/>
      <Styles/>
      <Classes/>
      <Link to="/homescreen">HomeScreen</Link> |<Link to="/tuiter">Tuiter</Link>
    </>
  );
};

export default Labs;
