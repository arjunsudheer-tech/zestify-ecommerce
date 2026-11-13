import './App.css';
import LoginPage from './Components/Authentication/LoginPage';
import CartPage from './Components/Cart/CartPage';
import HomePage from './Components/HomePage/HomePage';
import MyOrderPage from './Components/MyOrder/MyOrderPage';
import Navbar from './Components/Navbar/Navbar';
import ProductsPage from './Components/Products/ProductsPage';
import SingleProductPage from './Components/SingleProduct/SingleProductPage';

const App = () => {
  return (
    <div className='app-container'>
      <Navbar />
      <main>
        {/* <HomePage /> */}
        {/* <ProductsPage /> */}
        {/* <SingleProductPage /> */}
        {/* <CartPage /> */}
        {/* <MyOrderPage /> */}
        <LoginPage />
      </main>
    </div>
  )
}

export default App