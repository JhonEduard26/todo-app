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
  const [state, setState] = useState({
    active: false,
    completed: false,
    darkTheme: false,
  })

  const onAllFilter = () => {
    setState({
      ...state,
      active: false,
      completed: false,
    })
  }
  const onActiveFilter = () => {
    setState({
      ...state,
      active: true,
      completed: false,
    })
  }
  const onCompletedFilter = () => {
    setState({
      ...state,
      active: false,
      completed: true,
    })
  }
  const onToggleTheme = () => {
    setState({
      ...state,
      darkTheme: !state.darkTheme,
    })
  }

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
  const onClearCompleted = () => {
    const newTodos = todos.filter((todo) => !todo.completed)
    saveTodos(newTodos)
  }

  const todosPending = todos.filter((todo) => !todo.completed).length

  return (
    <div className={`App ${state.darkTheme && 'App-dark'}`}>
      <Header toggleTheme={onToggleTheme} theme={state.darkTheme} />
      <CreateTodo createTodoFun={onCreate} theme={state.darkTheme} />
      <TodoList>
        {(state.active &&
          !state.completed &&
          todos
            .filter((todo) => !todo.completed)
            .map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                completeFun={onComplete}
                deleteFun={onDelete}
                theme={state.darkTheme}
              />
            ))) ||
          (state.completed &&
            !state.active &&
            todos
              .filter((todo) => todo.completed)
              .map((todo) => (
                <TodoItem
                  key={todo.id}
                  id={todo.id}
                  text={todo.text}
                  completed={todo.completed}
                  completeFun={onComplete}
                  deleteFun={onDelete}
                  theme={state.darkTheme}
                />
              ))) ||
          (!state.completed &&
            !state.active &&
            todos.map((todo) => (
              <TodoItem
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                completeFun={onComplete}
                deleteFun={onDelete}
                theme={state.darkTheme}
              />
            )))}
        <TodoCounter
          items={todosPending}
          clearCompletedFun={onClearCompleted}
          theme={state.darkTheme}
        />
        <TodoFilter
          activeFun={onActiveFilter}
          completedFun={onCompletedFilter}
          allFun={onAllFilter}
          all={!state.active && !state.completed}
          active={state.active}
          complete={state.completed}
          theme={state.darkTheme}
        />
      </TodoList>
    </div>
  )
}
export default App
