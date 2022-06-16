import '../styles/Header.css'
import sun from '../assets/icons/sun.svg'
import moon from '../assets/icons/moon.svg'

function Header({ toggleTheme, theme }) {
  return (
    <div className='Header'>
      <p className='Header-title'>Todo</p>
      <img className='Header-icon' src={theme ? sun : moon} alt='' onClick={toggleTheme} />
    </div>
  )
}

export { Header }
