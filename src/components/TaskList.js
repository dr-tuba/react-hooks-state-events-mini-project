import React from "react";
import Task from "./Task";

function TaskList({ tasks, setTasks, selectedCategory }) {
  function handleDeleteClick(e) {
    const removedTaskArray = tasks.filter(task => e.target.previousSibling.textContent !== task.text)
    setTasks(removedTaskArray)
  }
  
  return (
    <div className="tasks">
      {tasks.map(task => { 
        if (selectedCategory === 'All') { return (
        <Task 
          key = {task.text}
          text = {task.text}
          category = {task.category}
          handleDeleteClick = {handleDeleteClick}
        />
        )
        } else if (selectedCategory === task.category) { return (
          <Task 
            key = {task.text}
            text = {task.text}
            category = {task.category}
            handleDeleteClick = {handleDeleteClick}
          />
          )}
      })}
    </div>
  );
}

export default TaskList;
