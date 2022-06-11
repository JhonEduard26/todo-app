import '../styles/TodoItem.css'
import check from '../assets/icons/check.svg'
import close from '../assets/icons/close.svg'

function TodoItem({ id, text, completed, completeFun, deleteFun }) {
  return (
    <li className='TodoItem'>
      <div className='TodoItem-container'>
        <div
          className={`TodoItem-check ${completed && 'TodoItem-checked'}`}
          onClick={() => completeFun(id)}
        >
          {completed && <img src={check} />}
        </div>
        <p className={`TodoItem-text ${completed && 'TodoItem-text-completed'}`}>{text}</p>
        <img className='TodoItem-close' src={close} alt='' onClick={() => deleteFun(id)} />
      </div>
    </li>
  )
}

export { TodoItem }
