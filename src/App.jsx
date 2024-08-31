import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'



export default function App() {
  const todos = [
    'Learn React',
    'Learn JSX',
    'Learn Hooks'
  ]
  

  return (
    <> 
      <TodoInput />
      <TodoList todos={todos} />
    </>
  )
}
