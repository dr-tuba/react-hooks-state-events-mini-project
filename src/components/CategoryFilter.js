import React from "react";
import Buttons from "./Buttons";

function CategoryFilter({ categories, selectedCategory, setSelectedCategory }) {  
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => { return (
        <Buttons 
        key = {category}
        category = {category}
        selectedCategory = {selectedCategory}
        setSelectedCategory = {setSelectedCategory}
      /> 
      )})}
    </div>
  );
}

export default CategoryFilter;
