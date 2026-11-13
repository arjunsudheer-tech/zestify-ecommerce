import LinkWithIcon from '../Navbar/LinkWithIcon';
import './ProductsSidebar.css';
import { useEffect, useState } from 'react';
import apiClient from '../../utils/api-Client';

const ProductsSidebar = () => {
  const [categories , setCategories] = useState([]);
  const [error , setError] = useState('');

  useEffect(() => {
    apiClient.get('/category')
      .then((response) => setCategories(response.data))
      .catch((error) => setError(error.message));
  } , []);

  return (
    <aside className="products-sidebar">
      <h2>Category</h2>
      <div className="category-links">
        {error && <em className='form-error'>{error}</em>}
        {
          categories.map((category) => 
        <LinkWithIcon 
          id={category._id}
          key={category._id}
          link={`products?category=${category.name}`}
          title={category.name}
          icon={`http://localhost:5001/category/${category.image}`}
          sidebar={true}
        />
        )}
      </div>
    </aside>
  )
}

export default ProductsSidebar