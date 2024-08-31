import React from 'react'
import {useState} from 'react'
export default function TodoInput(props) {
  const {handleAddTodos} = props
  const {todoValue, setTodoValue} = props
  
  return (
    <header>
      <input 
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
