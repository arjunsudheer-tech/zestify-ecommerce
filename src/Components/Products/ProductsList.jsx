import { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductsList.css';
import apiClient from '../../utils/api-Client';

const ProductsList = () => {

  const [products , setProducts] = useState([]);
  const [error , setError] = useState('');

  useEffect(() => {
    apiClient.get('/products')
      .then((response) => setProducts(response.data.products))
      .catch((error) => setError(error.message))
  } , []);

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
          {error && <em className='form-error'>{error}</em>}
          {products.map((product) => 
            <ProductCard 
              key={product._id} 
              id={product._id}
              image={product.images[0]}
              price={product.price}
              title={product.title}
              rating={product.reviews.rate}
              ratingCount={product.reviews.count}
              stock={product.stock}
            />
          )}
        </div>
    </section>
  )
}

export default ProductsList