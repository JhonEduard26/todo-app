import '../styles/TodoFilter.css'

function TodoFilter({ activeFun, completedFun, allFun }) {
  return (
    <div className='TodoFilter'>
      <button className='TodoFilter-button' type='button' onClick={allFun}> 
        All
      </button>
      <button className='TodoFilter-button' type='button' onClick={activeFun}>
        Active
      </button>
      <button className='TodoFilter-button' type='button' onClick={completedFun}>
        Completed
      </button>
    </div>
  )
}

export { TodoFilter }
