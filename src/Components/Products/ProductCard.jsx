import './ProductCard.css';
import iphone from '../../assets/iphone.jpg';
import star from '../../assets/white-star.png';
import basket from '../../assets/basket.png';

const ProductCard = () => {
  return (
    <div className='product-card'>
      <div className="product-image">
        <a href="/product/1">
          <img src={iphone} alt="product-image" />
        </a>
      </div>

      <div className="product-details">
        <h3 className="product-price">$999</h3>
        <p className="product-name">iPhone 14 Pro</p>

        <footer className="product-info-footer">
          <div className='product-info'>
            <p className="product-rating">
              <img src={star} alt="star" /> 5.0
            </p>
            <p className="product-review-count">120</p>
          </div>

          <button className="add-to-cart">
            <img src={basket} alt="basket" />
          </button>
        </footer>
      </div>
    </div>
  )
}

export default ProductCard