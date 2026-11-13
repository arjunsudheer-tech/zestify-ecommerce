import LinkWithIcon from '../Navbar/LinkWithIcon';
import './ProductsSidebar.css';
import rocket from '../../assets/rocket.png'

const ProductsSidebar = () => {
  return (
    <aside className="products-sidebar">
      <h2>Category</h2>
      <div className="category-links">
        <LinkWithIcon 
          link='products?category=electronics'
          title='Electronics'
          icon={rocket}
          sidebar={true}
        />
      </div>
    </aside>
  )
}

export default ProductsSidebar