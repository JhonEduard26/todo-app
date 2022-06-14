import './App.css'
import { useState } from 'react'
import { Header } from './components/Header'
import { CreateTodo } from './components/CreateTodo'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { TodoFilter } from './components/TodoFilter'
import { TodoCounter } from './components/TodoCounter'
import { useLocalStorage } from './hooks/useLocalStorage'

import { v4 as uuidv4 } from 'uuid'

function App() {
  const [todos, saveTodos] = useLocalStorage()

  const activeTodos = [...todos].filter((todo) => !todo.completed)
  const completedTodos = [...todos].filter((todo) => todo.completed)

  const [active, setActive] = useState(false)
  const [completed, setCompleted] = useState(false)

  const onCreate = (text) => {
    if (!text.trim()) {
      alert('Ingresa un texto para el Todo')
    } else {
      const newTodos = [...todos]
      newTodos.push({
        id: uuidv4(),
        text,
        completed: false,
      })
      saveTodos(newTodos)
    }
  }

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    saveTodos(newTodos)
  }

  const onComplete = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    saveTodos(newTodos)
  }

  const onAllFilter = () => {
    setActive(false)
    setCompleted(false)
  }

  const onActiveFilter = () => {
    setActive(true)
    setCompleted(false)
  }

  const onCompletedFilter = () => {
    setActive(false)
    setCompleted(true)
  }

  const onClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    saveTodos(newTodos)
  }

  if (active && !completed) {
    return (
      <div className='App'>
        <Header />
        <CreateTodo createTodoFun={onCreate} />
        <TodoList>
          {activeTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              completeFun={onComplete}
              deleteFun={onDelete}
            />
          ))}
          <TodoCounter items={activeTodos.length} clearCompletedFun={onClearCompleted} />
          <TodoFilter
            activeFun={onActiveFilter}
            completedFun={onCompletedFilter}
            allFun={onAllFilter}
            active
          />
        </TodoList>
      </div>
    )
  } else if (completed && !active) {
    return (
      <div className='App'>
        <Header />
        <CreateTodo createTodoFun={onCreate} />
        <TodoList>
          {completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              completeFun={onComplete}
              deleteFun={onDelete}
            />
          ))}
          <TodoCounter items={activeTodos.length} clearCompletedFun={onClearCompleted} />
          <TodoFilter
            activeFun={onActiveFilter}
            completedFun={onCompletedFilter}
            allFun={onAllFilter}
            complete
          />
        </TodoList>
      </div>
    )
  } else {
    return (
      <div className='App'>
        <Header />
        <CreateTodo createTodoFun={onCreate} />
        <TodoList>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              text={todo.text}
              completed={todo.completed}
              completeFun={onComplete}
              deleteFun={onDelete}
            />
          ))}
          <TodoCounter items={activeTodos.length} clearCompletedFun={onClearCompleted} />
          <TodoFilter
            activeFun={onActiveFilter}
            completedFun={onCompletedFilter}
            allFun={onAllFilter}
            all
          />
        </TodoList>
      </div>
    )
  }
}

export default App
