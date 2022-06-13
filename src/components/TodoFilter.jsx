import '../styles/TodoFilter.css'

function TodoFilter({ activeFun, completedFun, allFun, active, complete, all }) {
  return (
    <div className='TodoFilter'>
      <button
        className={`TodoFilter-button ${all ? 'TodoFilter-active' : ''}`.trim()}
        type='button'
        onClick={allFun}
      >
        All
      </button>
      <button
        className={`TodoFilter-button ${active ? 'TodoFilter-active' : ''}`.trim()}
        type='button'
        onClick={activeFun}
      >
        Active
      </button>
      <button
        className={`TodoFilter-button ${complete ? 'TodoFilter-active' : ''}`.trim()}
        type='button'
        onClick={completedFun}
      >
        Completed
      </button>
    </div>
  )
}

export { TodoFilter }
