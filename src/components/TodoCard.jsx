import React from 'react'

export default function TodoCard({handleDeleteTodos, index, children}) {
  return (
    <li className='todoItem'>
      {children}

      <div className='actionsContainer'>
        
        <button>
          <i className="fa-regular fa-pen-to-square"></i>
        </button>

        <button onClick={() => handleDeleteTodos(index)}>
          <i className="fa-regular fa-trash-can"></i>
        </button>

      </div>
    </li>
  )
}
