import { useEffect, useState } from 'react'

const ITEM_NAME = 'tasks_v1'

function useLocalStorage() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    const localStorageItem = localStorage.getItem(ITEM_NAME)
    let parsedItem

    if (!localStorageItem) {
      localStorage.setItem(ITEM_NAME, JSON.stringify([]))
      parsedItem = initialValue
    } else {
      parsedItem = JSON.parse(localStorageItem)
    }

    setTodos(parsedItem)
  }, [])

  const saveTodos = (newItem) => {
    const stringifiedItem = JSON.stringify(newItem)
    localStorage.setItem(ITEM_NAME, stringifiedItem)
    setTodos(newItem)
  }

  return [todos, saveTodos]
}

export { useLocalStorage }
