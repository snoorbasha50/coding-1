import React from "react";
import styles from "./addTask.module.css";
import { useState } from "react";
const AddTask = () => {
  // NOTE: do not delete `data-cy` key value pair
  const [todo, setTodo] = useState([])
  const [init, setInit] = useState("")
  const [ids,setIds]=useState(0)
  const handleChange = (e) => {
      setInit(e.target.value);
  }

  const handleTodo = () => {
      
      setTodo([
          ...todo,{id:ids,value:init,isCompleted:false}
      ])
      setIds(ids+1);
      setInit("")
  }

  
  return (
    <div className={styles.todoForm}>
      <h1>Todo List</h1>
      <input data-cy="add-task-input" value={init} type="text" placeholder='Add Task' onChange={handleChange} />
      <button data-cy="add-task-button" onClick={handleTodo}>+</button>


        {todo.map((el)=> {
            return (
                <div key={el.id}>{el.value}</div>
            )
        })}
    </div>
  );
};

export default AddTask;