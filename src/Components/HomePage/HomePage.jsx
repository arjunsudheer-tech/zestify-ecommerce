import HeroSection from "./HeroSection"
import iphone from '../../assets/iphone-duo.png';
import mac from '../../assets/mac-system-cut.jfif';
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <section>
      <HeroSection 
        link='/'
        title='Buy iPhone Duo'
        subtitle='Twice the screen, zero compromise. Meet Apple’s ultra thin foldable powerhouse.'
        image={iphone} 
      />
      <FeaturedProducts />
      <HeroSection 
        link='/'
        title='Build your own setup'
        subtitle='Elevate your daily workflow with a seamless MacBook setup that keeps everything within reach.'
        image={mac} 
      />
    </section>
  )
}

export default HomePage