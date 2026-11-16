import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Routing from './Components/Routing/Routing';
import { jwtDecode } from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import { ToastContainer , toast } from 'react-toastify/unstyled';
import 'react-toastify/dist/ReactToastify.css';
import { addToCartAPI, decreaseProductAPI, getCartAPI, increaseProductAPI, removeFromCartAPI } from './services/cartServices';
import UserContext from './contexts/UserContext';
import CartContext from './contexts/CartContext';

setAuthToken(localStorage.getItem('token'));

const App = () => {
  const [user , setUser] = useState(null);
  const [cart , setCart] = useState([]);

  useEffect(() => {
    try {
      const jwt = localStorage.getItem('token');
      const jwtUser = jwtDecode(jwt);
      if(Date.now() >= jwtUser.exp * 1000) {
        localStorage.removeItem('token');
        window.location.reload();
      } else {
        setUser(jwtUser);
      }
    } catch (error) {}
  } , []);

  const addToCart = (product,quantity) => {
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.product._id === product._id);
    if(productIndex === -1) {
      updatedCart.push({product , quantity});
    } else {
      updatedCart[productIndex].quantity += quantity;
    }

    setCart(updatedCart);

    addToCartAPI(product._id , quantity)
      .then((response) => {
        toast.success('Product added successfully');
      }).catch((error) => {
        toast.error('Failed to add product');
        setCart(cart);
      })
  }

  const getCart = () => {
    getCartAPI()
      .then((response) => setCart(response.data))
      .catch((error) => toast.error('Something went wrong'))
  }

  useEffect(() => {
    if(user) {
      getCart();
    }
  } , [user]);

  
  const removeFromCart = (id) => {
    const oldCart = [...cart];
    const newCart = oldCart.filter((item) => item.product._id !== id);
    setCart(newCart);

    removeFromCartAPI(id)
      .then((response) => {
        toast.success('Product removed from cart')
      })
      .catch((error) => {
        toast.error('Something went wrong.')
        setCart(oldCart);
      })
  }

  const updateCart = (type , id) => {
    const oldCart = [...cart];
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex((item) => item.product._id === id);

    if(type === 'increase') {
      updatedCart[productIndex].quantity += 1;
      setCart(updatedCart);

      increaseProductAPI(id).catch((error) => {
        toast.error('Something went wrong')
        setCart(oldCart);
      })
    }

    if(type === 'decrease') {
      updatedCart[productIndex].quantity -= 1;
      setCart(updatedCart);
    }

    decreaseProductAPI(id).catch((error) => {
        toast.error('Something went wrong')
        setCart(oldCart);
      })
  }

  return (
    <CartContext.Provider value={{cart , addToCart , removeFromCart , updateCart , setCart}}>
      <UserContext.Provider value={user}>
        <div className='app-container'>
          <Navbar />
          <main>
            <ToastContainer position='bottom-right' />
            <Routing />
          </main>
        </div>
      </UserContext.Provider>
    </CartContext.Provider>
  )
}

export default App