import React from 'react'

const Buttons = ({ category, selectedCategory, setSelectedCategory }) => {
    const handleClick = (e) => {
        setSelectedCategory(e.target.textContent)
      }
    
    return (
        <button className={(selectedCategory === category ? 'selected' : null )} onClick={handleClick}>{category}</button>
    )
}

export default Buttons
