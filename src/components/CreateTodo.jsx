import '../styles/CreateTodo.css'

let value = ''

function CreateTodo({ createTodoFun }) {
  const onChangeInput = (event) => {
    value = event.target.value
  }

  return (
    <div className='CreateTodo-container'>
      <div className='CreateTodo-check' onClick={() => createTodoFun(value)}></div>
      <input
        className='CreateTodo-input'
        placeholder='Create a  new todo'
        onChange={onChangeInput}
      />
    </div>
  )
}

export { CreateTodo }
