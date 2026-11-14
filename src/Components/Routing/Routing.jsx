import LoginPage from '../Authentication/LoginPage';
import Logout from '../Authentication/Logout';
import SignupPage from '../Authentication/SignupPage';
import CartPage from '../Cart/CartPage';
import HomePage from '../HomePage/HomePage';
import MyOrderPage from '../MyOrder/MyOrderPage';
import ProductsPage from '../Products/ProductsPage';
import SingleProductPage from '../SingleProduct/SingleProductPage';
import { Routes , Route } from 'react-router-dom';

const Routing = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/products' element={<ProductsPage />} />
      <Route path='/product/:id' element={<SingleProductPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/signup' element={<SignupPage />} />
      <Route path='/orders' element={<MyOrderPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/logout' element={<Logout />} />
    </Routes>
  )
}

export default Routing