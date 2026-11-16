import LinkWithIcon from './LinkWithIcon';
import './Navbar.css';
import rocket from '../../assets/rocket.png';
import star from '../../assets/glowing-star.png';
import idButton from '../../assets/id-button.png';
import memo from '../../assets/memo.png';
import orders from '../../assets/package.png';
import lock from '../../assets/locked.png';
import { NavLink, useNavigate } from 'react-router-dom';
import { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';

const Navbar = () => {

  const [search , setSearch] = useState('');

  const user = useContext(UserContext);
  const {cart} = useContext(CartContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if(!search.trim() !== '') {
      navigate(`products?search=${search.trim()}`);
    }
  }

  return (
    <nav className='navbar-container'>
      <div className="left-navbar">
        <h1 className='navbar-header'>Zestify</h1>
        <form className="navbar-form" onSubmit={handleSubmit}>
          <input 
            type="text" 
            placeholder='Search products...'
            className='navbar-search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <button type='submit' className='search-button'>Search</button>
        </form>
      </div>
      <div className="right-navbar">
        <LinkWithIcon link='/' title='Home' icon={rocket} />
        <LinkWithIcon link='/products' title='Products' icon={star} />
        { !user && 
          <>
            <LinkWithIcon link='/login' title='LogIn' icon={idButton} />
            <LinkWithIcon link='/signup' title='SignUp' icon={memo} />
          </>
        }
        { user && 
        <>
          <LinkWithIcon link='/orders' title='My Orders' icon={orders} />
          <LinkWithIcon link='/logout' title='LogOut' icon={lock} />
          <NavLink to='/cart' className='cart-counts'>
            Cart <p className='cart-count'>{cart.length}</p>
          </NavLink>
        </>
        }
      </div>
    </nav>
  )
}

export default Navbar