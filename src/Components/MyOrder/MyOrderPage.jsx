import useData from '../../hooks/useData';
import Table from '../Common/Table';
import './MyOrderPage.css';

const MyOrderPage = () => {
  const {data: orders , error} = useData('/order');

  return (
    <section className="order-page">
      {error && <em className='form-error'>{error}</em>}
      {orders && 
        <Table headings={['Order' , 'Products' , 'Total' , 'Status']}>
          <tbody>
            {orders.map((order , index) => 
              <tr key={order._id}>
                <td>{index + 1}</td>
                <td>
                  {order.products.map((item) => (
                    <p key={item.product._id}>
                      {item.product.title} ({item.quantity})
                    </p>
                  ))}
                </td>
                <td>${order.total}</td>
                <td>{order.status}</td>
              </tr>
            )}
          </tbody>
        </Table>
    }
    </section>
  )
}

export default MyOrderPage