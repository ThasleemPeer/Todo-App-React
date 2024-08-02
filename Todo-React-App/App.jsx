import AppName from "./src/components/AppName";
import AddTodo from "./src/components/AddoTodo";
import TodoItems from "./src/components/TodoItems";
import './App.css';
import { useState } from "react";
import WelcomeMessage from "./src/components/WelcomeMessage";

function App() {
 
  const [todoItems,SetTodoitems]=useState([]);
  const handleNewItem=(itemName,itemDueDate)=>{
    console.log(`New Item Added :${itemName} Date:${itemDueDate}`);
    const newTodoItems=[...todoItems,{
      name: itemName,
      dueDate: itemDueDate
    }];
    SetTodoitems(newTodoItems);
  };
  
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItems.filter(item =>item.name !==todoItemName)
    SetTodoitems(newTodoItems)
    console.log(`Item Deleted ${todoItemName}`);

  }

  return (
   <center className="todo-container">
    <AppName/>
    <AddTodo onNewItem={handleNewItem}/>
    {todoItems.length==0  && <WelcomeMessage />}
    <TodoItems todoItems={todoItems} onDeleteClick={handleDeleteItem }></TodoItems>
   </center>
  );
}

export default App
