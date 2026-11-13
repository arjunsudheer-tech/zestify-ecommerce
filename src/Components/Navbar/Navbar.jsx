import LinkWithIcon from './LinkWithIcon';
import './Navbar.css';
import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import orders from '../../assets/package.png';
import lock from '../../assets/locked.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='navbar-container'>
      <div className="left-navbar">
        <h1 className='navbar-header'>Zestify</h1>
        <form className="navbar-form">
          <input 
            type="text" 
            placeholder='Search products...'
            className='navbar-search'
          />
          <button type='submit' className='search-button'>Search</button>
        </form>
      </div>
      <div className="right-navbar">
        <LinkWithIcon link='/' title='Home' icon={rocket} />
        <LinkWithIcon link='/products' title='Products' icon={star} />
        <LinkWithIcon link='/login' title='LogIn' icon={idButton} />
        <LinkWithIcon link='/signup' title='SignUp' icon={memo} />
        <LinkWithIcon link='/orders' title='My Orders' icon={orders} />
        <LinkWithIcon link='/logout' title='LogOut' icon={lock} />
        <NavLink to='/cart' className='cart-counts'>
          Cart <p className='cart-count'>0</p>
        </NavLink>
      </div>
    </nav>
  )
}

export default Navbar