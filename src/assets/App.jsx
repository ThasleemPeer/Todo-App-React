import React from "react"
import AppName from "./compnents/AppName"
import AddTodo from "./compnents/AddTodo"
import Todoitem1 from "./compnents/Todoitem1"
import Todoitem2 from "./compnents/Todoitem2"
import "./App.css";
function App() {

  return (
  <div className="container ">
    <AppName></AppName>
    <AddTodo></AddTodo>
    <div className="items-container">
    <Todoitem1></Todoitem1>
    <Todoitem2></Todoitem2>
    </div>
  </div>
  );
}

export default App;
