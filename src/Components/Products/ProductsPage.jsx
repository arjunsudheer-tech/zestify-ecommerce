import ProductsList from './ProductsList';
import './ProductsPage.css';
import ProductsSidebar from './ProductsSidebar';

const ProductsPage = () => {
  return (
    <section className="products-page-container">
      <ProductsSidebar />
      <ProductsList />
    </section>
  )
}

export default ProductsPage