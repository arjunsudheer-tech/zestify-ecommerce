import LinkWithIcon from '../Navbar/LinkWithIcon';
import './ProductsSidebar.css';
import useData from '../../hooks/useData';

const ProductsSidebar = () => {
  
  const { data: categories , error } = useData('/category')

  return (
    <aside className="products-sidebar">
      <h2>Category</h2>
      <div className="category-links">
        {error && <em className='form-error'>{error}</em>}
        {
          categories && categories?.map((category) => 
        <LinkWithIcon 
          id={category._id}
          key={category._id}
          link={`/products?category=${category.name}`}
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