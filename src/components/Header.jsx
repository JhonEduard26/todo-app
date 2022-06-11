import '../styles/Header.css'
import sun from '../assets/icons/sun.svg'

function Header() {
  return (
    <div className='Header'>
      <p className='Header-title'>Todo</p>
      <img className='Header-icon' src={sun} alt='' />
    </div>
  )
}

export { Header }
