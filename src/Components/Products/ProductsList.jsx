import ProductCard from './ProductCard';
import './ProductsList.css';

const ProductsList = () => {
  return (
    <section className="products-list-section">
      <header className="products-list-header">
        <h2>Products</h2>
        <select name="sort" id="" className='products-sorting'>
          <option value="">Relevance</option>
          <option value="price desc">Price HIGH to LOW</option>
          <option value="price asc">Price LOW to HIGH</option>
          <option value="rate desc">Rate HIGH to LOW</option>
          <option value="rate asc">Rate LOW to HIGH</option>
        </select>
      </header>

        <div className="products-list">
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
          <ProductCard />
        </div>
    </section>
  )
}

export default ProductsList