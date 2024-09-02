import {useContext, useRef } from "react";
import { RiAddLargeLine } from "react-icons/ri";
import { TodoItemsContext } from "../store/todo-items-store";
function AddTodo(){ 
  const {addNewItem}=useContext(TodoItemsContext)
  const todoNameElement=useRef();
  const dueDateElement=useRef();


  const handleAddButtonClicked=(event)=>{
    event.preventDefault();
    const todoNamee=todoNameElement.current.value;
    const dueDatee=dueDateElement.current.value;
    todoNameElement.current.value="";
    dueDateElement.current.value="";
    addNewItem(todoNamee,dueDatee)
  };
  
  return(
    <div className="todo-container">
         <form className="row kg-row" onSubmit={handleAddButtonClicked}>
            <div className="col-6">
              <input 
              type="text"
               ref={todoNameElement} 
               placeholder="Enter Todo Here"
               />
            </div>
            <div className="col-4">
              <input type="date" 
              ref={dueDateElement}
         />
            </div>
            <div className="col-2">
            <button type="submit" 
            className="btn btn-success kg-button" ><RiAddLargeLine /></button>
            </div>
         </form>
     </div>
  );}
 
  export default AddTodo;