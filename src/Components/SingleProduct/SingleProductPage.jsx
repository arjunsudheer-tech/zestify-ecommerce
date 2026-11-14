import { useState } from 'react';
import './SingleProductPage.css';
import QuantityInput from './QuantityInput';
import { useParams } from 'react-router-dom';
import useData from '../../hooks/useData';

const SingleProductPage = () => {

  const [selectedImage , setSelectedImage] = useState(0);
  const [quantity , setQuantity] = useState(1);
  const { id } = useParams();

  const { data: product , error } = useData(`/products/${id}`);

  return (
    <section className="single-product-container">
      {error && <em className='form-error'>{error}</em>}
      {
        product && 
        <>
        <div className='single-product-main'>
          <div className="single-product-thumbnails">
            {product.images.map((image , index) => <img src={`http://localhost:5001/products/${image}`} className={selectedImage === index ? 'selected-image' : ''} alt={product.title} onClick={() => setSelectedImage(index)} />)}
          </div>
          <img src={`http://localhost:5001/products/${product.images[selectedImage]}`} alt={product.title} className='single-product-display' />

          <div className="single-product-details">
            <h1 className='single-product-title'>{product.title}</h1>
            <p className="single-product-description">{product.description}</p>
            <p className="single-product-price">${product.price.toFixed(2)}</p>

            <h2 className="quantity-title">Quantity:</h2>
            <div className='quantity-input'>
              <QuantityInput 
                quantity={quantity} 
                setQuantity={setQuantity} 
                stock={product.stock}
              />
            </div>
            <button className='search-button add-cart-button'>Add to Cart</button>
          </div>
        </div>

        </>
      }
    </section>
  )
}

export default SingleProductPage