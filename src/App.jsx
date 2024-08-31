import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import {useState} from 'react'



export default function App() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Learn JSX',
    'Learn Hooks'
  ])
  //React store variables in a parent-child relationship, so if the state is stored in the parent component, 
  // it can be passed down and access from the child component
  const [todoValue, setTodoValue] = useState('')
  //Any elements in a React component must be immutable, only the state is mutable
  const handleAddTodos = (todo) => { 
    setTodos([...todos, todo])
  }
  
  const handleDeleteTodos = (index) => {
    const newTodos = todos.filter((todo, i) => {
      return i !== index
    })
    setTodos(newTodos)
  }
  const handleEditTodos = (index) => {
    const todoTobeEdited = todos[index]
    setTodoValue(todoTobeEdited)
    handleDeleteTodos(index)
  }

  return (
    <> 
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos}/>
    </>
  )
}
