import { useContext } from 'react';
import { TodoItemsContext } from '../store/todo-items-store';
import TodoItem from './TodoItem'
import styles from './Todoitems.module.css';

const TodoItems=()=>{
    const {todoItems}= useContext(TodoItemsContext);
    

    return (
    <div className={styles.itemsContainer}>
        <div className="items-container">
        {todoItems.map((item) => ( <TodoItem 
        key={item.name}
         todoDate={item.dueDate} 
         todoName={item.name} />))}
    </div>
    </div>
    );
    
}
export default TodoItems;


