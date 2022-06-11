import './App.css'
import { Header } from './components/Header'
import { CreateTodo } from './components/CreateTodo'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { useState } from 'react'

const defaultTodos = [
  {
    id: 1,
    text: 'Terminar la app',
    completed: false,
  },
  {
    id: 2,
    text: 'Aprender React',
    completed: false,
  },
  {
    id: 3,
    text: 'Correr 3 kilometros',
    completed: false,
  },
]

function App() {
  const [todos, setTodos] = useState(defaultTodos)
  console.log(todos)

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const handleComplete = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[index].completed = true
    setTodos(newTodos)
  }

  return (
    <div className='App'>
      <Header />
      <CreateTodo />
      <TodoList>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            id={todo.id}
            text={todo.text}
            completed={todo.completed}
            completeFun={handleComplete}
            deleteFun={handleDelete}
          />
        ))}
      </TodoList>
    </div>
  )
}

export default App
