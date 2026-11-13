import './QuantityInput.css';

const QuantityInput = () => {
  return (
    <>
    <button className='quantity-input-button' disabled> - </button>
      <p className="quantity-input-count">0</p>
     <button className='quantity-input-button'> + </button>
    </>
  )
}

export default QuantityInput