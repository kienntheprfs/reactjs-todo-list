import React from 'react'
import TodoCard from './TodoCard'
export default function Todolist(props) {
  
  const {todos} = props
  return (
    <ul className='main'>
      {
        todos.map((todo, index) => {
          return (

          <TodoCard key={index}> 
            <p>{todo}</p>
          </TodoCard>
          
          )
        })
      }
    </ul>
  )
}
