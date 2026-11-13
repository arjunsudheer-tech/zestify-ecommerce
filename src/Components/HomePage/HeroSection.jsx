import './HeroSection.css';

const HeroSection = ({link,title,subtitle,image}) => {
  return (
    <div className='hero-section-container'>
      <div className="left-hero-section">
        <h1 className='hero-title'>{title}</h1>
        <p className='hero-subtitle'>{subtitle}</p>
        <a href={link} className="hero-link">Buy Now</a>
      </div>
      <div className="right-hero-section">
        <img src={image} alt="hero-image" className='hero-image' />
      </div>
    </div>
  )
}

export default HeroSection