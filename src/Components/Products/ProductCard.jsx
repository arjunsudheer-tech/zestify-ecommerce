import './ProductCard.css';
import star from '../../assets/white-star.png';
import basket from '../../assets/basket.png';
import { NavLink } from 'react-router-dom';

const ProductCard = ({id , image , price , title , rating , ratingCount , stock}) => {
  return (
    <div className='product-card'>
      <div className="product-image">
        <NavLink to={`/product/${id}`}>
          <img src={`http://localhost:5001/products/${image}`} alt="product-image" />
        </NavLink>
      </div>

      <div className="product-details">
        <h3 className="product-price">${price}</h3>
        <p className="product-name">{title}</p>

        <footer className="product-info-footer">
          <div className='product-info'>
            <p className="product-rating">
              <img src={star} alt="star" /> {rating}
            </p>
            <p className="product-review-count">{ratingCount}</p>
          </div>

          { stock > 0 && 
            <button className="add-to-cart">
              <img src={basket} alt="basket" />
            </button>
          }
        </footer>
      </div>
    </div>
  )
}

export default ProductCard