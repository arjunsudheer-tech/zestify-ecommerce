import useData from '../../hooks/useData'
import ProductCard from '../Products/ProductCard'
import ProductCardSkeleton from '../Products/ProductCardSkeleton';
import './FeaturedProducts.css'

const FeaturedProducts = () => {

  const { data , error , isLoading } = useData('/products/featured');

  const skeletons = [1 , 2 , 3];

  return (
    <section className="featured-products-section">
      <h2>Featured Products</h2>
      <div className="featured-products-list">
        {error && <em className='form-error'>{error}</em>}
        {
          data && data.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}

          {isLoading && 
            skeletons.map((n) => <ProductCardSkeleton key={n} />)  
          }
      </div>
    </section>
  )
}

export default FeaturedProducts