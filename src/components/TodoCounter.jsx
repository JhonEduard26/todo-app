import '../styles/TodoCounter.css'

function TodoCounter({ items, clearCompletedFun, theme }) {
  return (
    <li className={`TodoCounter-item ${theme && 'TodoCounter-item--dark'}`}>
      <p>{items} items left</p>
      <button className='TodoCounter-clear' type='button' onClick={clearCompletedFun}>
        Clear completed
      </button>
    </li>
  )
}

export { TodoCounter }
