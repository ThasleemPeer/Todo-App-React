import { useState } from "react";

function AddTodo({onNewItem}){ 
  const [todoName,SetTodoName]=useState("");
  const [dueDate,SetdueDate]=useState("");

  const handleNameChange=(event)=>{
 SetTodoName(event.target.value);
  };

  const handleDateChange=(event)=>{
    SetdueDate(event.target.value);

  };

  const handleAddButtonClicked=()=>{
    onNewItem(todoName,dueDate)
    SetTodoName("");
    SetdueDate("");
  };
  
  return(
    <div className="todo-container">
         <div className="row kg-row">
            <div className="col-6">
              <input type="text" placeholder="Enter Todo Here" value={todoName} onChange={handleNameChange}/>
            </div>
            <div className="col-4">
              <input type="date" value={dueDate} onChange={handleDateChange} />
            </div>
            <div className="col-2">
            <button type="button" className="btn btn-success kg-button" onClick={handleAddButtonClicked}>Add</button>
            </div>
         </div>
     </div>
  );}
 
  export default AddTodo;