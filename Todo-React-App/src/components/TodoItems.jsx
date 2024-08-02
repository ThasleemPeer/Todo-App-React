import TodoItem from './TodoItem'
import styles from './TodoItems.module.css';
const TodoItems=({todoItems,onDeleteClick})=>{
    return (
    <div className={styles.itemsContainer}>
        <div className="items-container">
        {todoItems.map((item,index) => ( <TodoItem key={index} todoDate={item.dueDate} todoName={item.name} onDeleteClick={onDeleteClick}/>))}
    </div>
    </div>
    );
    
}
export default TodoItems;


