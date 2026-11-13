import ProductCard from '../Products/ProductCard'
import './FeaturedProducts.css'

const FeaturedProducts = () => {
  return (
    <section className="featured-products-section">
      <h2>Featured Products</h2>
      <div className="featured-products-list">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  )
}

export default FeaturedProducts