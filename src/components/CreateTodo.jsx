import '../styles/CreateTodo.css'

function CreateTodo() {
  return (
    <div className='CreateTodo-container'>
      <div className='CreateTodo-check'></div>
      <input className='CreateTodo-input' placeholder='Create a  new todo' />
    </div>
  )
}

export { CreateTodo }
