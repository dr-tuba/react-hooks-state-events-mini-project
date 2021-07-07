import React from "react";

function NewTaskForm({ categories, details, setDetails, onTaskSubmitForm }) {
  const handleDetails = (e) => {
    setDetails(e.target.value)
  }
  
  const categoriesWithoutAll = categories.filter(category => category !== 'All')

  return (
    <form onSubmit={onTaskSubmitForm} className="new-task-form">
      <label>
        Details
        <input onChange={handleDetails}type="text" name="text" />
      </label>
      <label>
        Category
        <select name="category">
          {categoriesWithoutAll.map(category => { return (
            <option key={category}>{category}</option>
          )})}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
