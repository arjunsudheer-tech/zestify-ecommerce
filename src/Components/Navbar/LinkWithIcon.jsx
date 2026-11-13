import { NavLink } from 'react-router-dom';
import './LinkWithIcon.css';

const LinkWithIcon = ({link , title , icon , sidebar}) => {
  return (
    <NavLink to={link} className={sidebar ? 'sidebar-link' : 'navbar-link'}>
      {title} <img src={icon} alt="link-icon" className='link-icon' />
    </NavLink>
  )
}

export default LinkWithIcon