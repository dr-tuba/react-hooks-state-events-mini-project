import React from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";
import { useState } from 'react';

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {
  const [tasks, setTasks ] = useState(TASKS)
  const [categories, setCategories] = useState(CATEGORIES)
  const [selectedCategory, setSelectedCategory] = useState('All')
  const [details, setDetails] = useState('')

  const onTaskSubmitForm = (e) => {
    e.preventDefault()
    const newTask = {
      category: e.target[1].value,
      text: details
    }
    setTasks([...tasks, newTask])
  }
  
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter 
      categories = {categories}
      selectedCategory = {selectedCategory}
      setSelectedCategory = {setSelectedCategory}
        />
      <NewTaskForm 
        categories = {categories}
        details = {details}
        setDetails = {setDetails}
        onTaskSubmitForm = {onTaskSubmitForm}
        />
      <TaskList 
        tasks = {tasks}
        setTasks = {setTasks}
        selectedCategory = {selectedCategory}
        />
    </div>
  );
}

export default App;
