import './ProductCard.css';
import star from '../../assets/white-star.png';
import basket from '../../assets/basket.png';
import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import UserContext from '../../contexts/UserContext';

const ProductCard = ({product}) => {

  const {addToCart} = useContext(CartContext);
  const user = useContext(UserContext);

  return (
    <div className='product-card'>
      <div className="product-image">
        <NavLink to={`/product/${product?._id}`}>
          <img src={`http://localhost:5001/products/${product?.images?.[0]}`} alt="product-image" />
        </NavLink>
      </div>

      <div className="product-details">
        <h3 className="product-price">${product?.price}</h3>
        <p className="product-name">{product?.title}</p>

        <footer className="product-info-footer">
          <div className='product-info'>
            <p className="product-rating">
              <img src={star} alt="star" /> {product?.reviews?.rate}
            </p>
            <p className="product-review-count">{product?.reviews?.count}</p>
          </div>

          { product?.stock > 0 && user && 
            <button className="add-to-cart" onClick={() => addToCart(product,1)}>
              <img src={basket} alt="basket" />
            </button>
          }
        </footer>
      </div>
    </div>
  )
}

export default ProductCard