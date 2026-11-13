import './CartPage.css';
import user from '../../assets/user.webp';
import Table from '../Common/Table';
import QuantityInput from '../SingleProduct/QuantityInput';
import remove from '../../assets/remove.png';

const CartPage = () => {
  return (
    <section className="cart-page-container">
      <div className="user-info">
        <img src={user} alt="user-profile" />
        <div>
          <p className='user-name'>Arjun S</p>
          <p className='user-email'>arjsudheer2001@gmail.com</p>
        </div>
      </div>

      <Table headings={['Item' , 'Price' , 'Quantity' , 'Total' , 'Remove']}>
        <tbody>
          <tr>
            <td>iPhone 14</td>
            <td>$1099</td>
            <td className='table-quantity-input'><QuantityInput /></td>
            <td>$1099</td>
            <td><img src={remove} alt="remove-icon" className='remove-icon' /></td>
          </tr>
        </tbody>
      </Table>

      <table className="cart-bill">
        <tbody>
          <tr>
            <td>Subtotal</td>
            <td>$999</td>
          </tr>
          <tr>
            <td>Shipping Charge</td>
            <td>$5</td>
          </tr>
          <tr className='cart-final-bill'>
            <td>Total</td>
            <td>$1004</td>
          </tr>
        </tbody>
      </table>
      <button className='search-button checkout-button'>Checkout</button>
    </section>
  )
}

export default CartPage