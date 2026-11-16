import './QuantityInput.css';

const QuantityInput = ({quantity , setQuantity , stock , cartPage , productId}) => {
  return (
    <>
    <button 
      className='quantity-input-button' 
      disabled={quantity <=1} 
      onClick={() => {cartPage ? setQuantity("decrease", productId): setQuantity(quantity - 1)}}> 
     {" "} - {" "}
    </button>
      <p className="quantity-input-count">{quantity}</p>
    <button 
      className='quantity-input-button' 
      disabled={quantity >= stock} 
      onClick={() => {cartPage ? setQuantity("increase" , productId) : setQuantity(quantity + 1)}}> 
      {" "} + {" "}
    </button>
    </>
  )
}

export default QuantityInput