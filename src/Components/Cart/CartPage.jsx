import './CartPage.css';
import Table from '../Common/Table';
import QuantityInput from '../SingleProduct/QuantityInput';
import remove from '../../assets/remove.png';
import { useMemo , useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import CartContext from '../../contexts/CartContext';
import checkoutAPI from '../../services/orderServices';
import { toast } from 'react-toastify';

const CartPage = () => {

  const user = useContext(UserContext);
  const {cart , removeFromCart , updateCart , setCart } = useContext(CartContext);

  const subTotal = useMemo(() => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    })

    return total;
  } , [cart]);

  const checkout = () => {
    const oldCart = [...cart];
    setCart([]);
    checkoutAPI()
      .then((response) => {
        toast.success('Order placed successfully')
      }).catch((error) => {
        toast.error('Something went wrong');
        setCart(oldCart);
      })
  }

  return (
    <section className="cart-page-container">
      <div className="user-info">
        <img src={`http://localhost:5001/profile/${user?.profilePic}`} alt="user-profile" />
        <div>
          <p className='user-name'>Name : {user?.name}</p>
          <p className='user-email'>Email : {user?.email}</p>
        </div>
      </div>

      <Table headings={['Item' , 'Price' , 'Quantity' , 'Total' , 'Remove']}>
        {
          cart.map(({product , quantity}) => 
          <tbody>
            <tr key={product._id}>
              <td>{product.title}</td>
              <td>${product.price}</td>
              <td className='table-quantity-input'>
                <QuantityInput quantity={quantity} setQuantity={updateCart} productId={product._id} cartPage={true} stock={product.stock} />
                </td>
              <td>${quantity * product.price}</td>
              <td><img src={remove} alt="remove-icon" className='remove-icon' onClick={() => removeFromCart(product._id)} /></td>
            </tr>
          </tbody>
          )}
      </Table>

      <table className="cart-bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>${subTotal}</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className='cart-final-bill'>
            <td>Total</td>
            <td>${subTotal + 5}</td>
          </tr>
        </tbody>
      </table>
      <button className='search-button checkout-button' onClick={checkout}>Checkout</button>
    </section>
  )
}

export default CartPage