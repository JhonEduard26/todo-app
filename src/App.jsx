import './App.css'
import { Header } from './components/Header'
import { CreateTodo } from './components/CreateTodo'
import { TodoList } from './components/TodoList'
import { TodoItem } from './components/TodoItem'
import { TodoFilter } from './components/TodoFilter'
import { useState } from 'react'
import { TodoCounter } from './components/TodoCounter'

const defaultTodos = [
  {
    id: 1,
    text: 'Terminar la app',
    completed: false,
  },
  {
    id: 2,
    text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt cumque sed laboriosam? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit modi quos nesciunt!',
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

  const activeTodos = [...todos].filter((todo) => !todo.completed)
  const completedTodos = [...todos].filter((todo) => todo.completed)

  const [active, setActive] = useState(false)
  const [completed, setCompleted] = useState(false)

  const onDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  const onComplete = (id) => {
    const index = todos.findIndex((todo) => todo.id === id)
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
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
    setTodos(newTodos)
  }

  if (active && !completed) {
    return (
      <div className='App'>
        <Header />
        <CreateTodo />
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
        </TodoList>
        <TodoFilter
          activeFun={onActiveFilter}
          completedFun={onCompletedFilter}
          allFun={onAllFilter}
          active
        />
      </div>
    )
  } else if (completed && !active) {
    return (
      <div className='App'>
        <Header />
        <CreateTodo />
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
        </TodoList>
        <TodoFilter
          activeFun={onActiveFilter}
          completedFun={onCompletedFilter}
          allFun={onAllFilter}
          complete
        />
      </div>
    )
  } else {
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
              completeFun={onComplete}
              deleteFun={onDelete}
            />
          ))}
          <TodoCounter items={activeTodos.length} clearCompletedFun={onClearCompleted} />
        </TodoList>
        <TodoFilter
          activeFun={onActiveFilter}
          completedFun={onCompletedFilter}
          allFun={onAllFilter}
          all
        />
      </div>
    )
  }
}

export default App
