import React from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import {useState, useEffect} from 'react'



export default function App() {
  const [todos, setTodos] = useState([
    'Learn React',
    'Learn JSX',
    'Learn Hooks'
  ])
  //React store variables in a parent-child relationship, so if the state is stored in the parent component, 
  // it can be passed down and access from the child component
  const [todoValue, setTodoValue] = useState('')
  
  
  function persistData(newList) {
    localStorage.setItem('todos', JSON.stringify({todos: newList}))
  }
  
  //Any elements in a React component must be immutable, only the state is mutable
  const handleAddTodos = (todo) => { 
    let newTodoList = [...todos, todo]
    persistData(newTodoList)
    setTodos(newTodoList)
    setTodoValue('')

  }
  
  const handleDeleteTodos = (index) => {
    const newTodoList = todos.filter((todo, i) => {
      return i !== index
    })
    persistData(newTodoList)
    setTodos(newTodoList)
  }
  const handleEditTodos = (index) => {
    const todoTobeEdited = todos[index]
    setTodoValue(todoTobeEdited)
    handleDeleteTodos(index)
  }

// useEffect listen for events such as page loading, states changed,... 
// and perform actions based on when those events happen
// In this case, we use useEffect to to get the todos from the local storage (if has any)
// whenever the page is loaded
  useEffect(() => {
    if (!localStorage) {
      return
    }
    let localTodos = localStorage.getItem('todos')
    if (!localTodos) {
      return
    }
    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)

  }, [])

  return (
    <> 
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList todos={todos} handleDeleteTodos={handleDeleteTodos} handleEditTodos={handleEditTodos}/>
    </>
  )
}
