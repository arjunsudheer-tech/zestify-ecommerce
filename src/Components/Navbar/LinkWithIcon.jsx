import './LinkWithIcon.css';

const LinkWithIcon = ({link , title , icon , sidebar}) => {
  return (
    <a href={link} className={sidebar ? 'sidebar-link' : 'navbar-link'}>
      {title} <img src={icon} alt="link-icon" className='link-icon' />
    </a>
  )
}

export default LinkWithIcon