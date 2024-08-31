import React from 'react'

export default function TodoInput(props) {
  const {handleAddTodos} = props
  const {todoValue, setTodoValue} = props
  
  return (
    <header>
      <input 
      // BIND the input field to the todoValue state, 
      // whenever the todoValue state changes, the input field will also change
      value={todoValue}
      onKeyDown={(e) => {
        if (e.key === 'Enter') {
          handleAddTodos(todoValue)
        }
      }}
      onChange={
        (e) => {setTodoValue(e.target.value)}
      } 
      placeholder='Enter todo ...'
      /> 
      <button 
      onClick={() => handleAddTodos(todoValue)}
      > Add</button>
    </header>

  )
}
