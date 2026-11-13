import Table from '../Common/Table';
import './MyOrderPage.css';

const MyOrderPage = () => {
  return (
    <section className="order-page">
      <Table headings={['Order' , 'Products' , 'Total' , 'Status']}>
        <tbody>
          <tr>
            <td>101</td>
            <td>Iphone 14 , Powerbank</td>
            <td>$1299</td>
            <td>Shipped</td>
          </tr>
        </tbody>
      </Table>
    </section>
  )
}

export default MyOrderPage