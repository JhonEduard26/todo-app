import '../styles/TodoCounter.css'

function TodoCounter({ items, clearCompletedFun }) {
  return (
    <li className='TodoCounter-item'>
      <p>{items} items left</p>
      <button className='TodoCounter-clear' type='button' onClick={clearCompletedFun}>
        Clear completed
      </button>
    </li>
  )
}

export { TodoCounter }
