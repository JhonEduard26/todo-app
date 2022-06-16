import '../styles/CreateTodo.css'

let value = ''

function CreateTodo({ createTodoFun, theme }) {
  const onChangeInput = (event) => {
    value = event.target.value
  }

  return (
    <div className={`CreateTodo-container ${theme && 'CreateTodo-container--dark'}`}>
      <div className='CreateTodo-check' onClick={() => createTodoFun(value)}></div>
      <input
        className={`CreateTodo-input ${theme && 'CreateTodo-input--dark'}`}
        placeholder='Create a  new todo...'
        onChange={onChangeInput}
      />
    </div>
  )
}

export { CreateTodo }
