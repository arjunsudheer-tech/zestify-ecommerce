import ProductCard from './ProductCard';
import './ProductsList.css';
import useData from '../../hooks/useData';
import ProductCardSkeleton from './ProductCardSkeleton';
import { useSearchParams } from 'react-router-dom';
import Pagination from '../Common/Pagination';

const ProductsList = () => {

  const [search , setSearch] = useSearchParams();
  const category = search.get('category');
  const page = search.get('page');

  const handlePageChange = (page) => {
    const currentParams = Object.fromEntries([...search]);
    setSearch({...currentParams , page: page})
  }

  const {data , error , isLoading} = useData('/products' , {
    params: {
      category,
      page
    }
  } , [category , page]);

  const skeletons = [1 , 2 , 3 , 4 , 5 , 6 , 7 , 8];

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
          {
            isLoading 
            ? 
            skeletons.map((n) => <ProductCardSkeleton key={n} />)
            :
            data?.products && data?.products?.map((product) => 
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
        {
          data && 
          <Pagination 
            totalPosts={data.totalProducts}
            postsPerPage={8}
            onClick={handlePageChange}
            currentPage={page}
          />
        }
    </section>
  )
}

export default ProductsList