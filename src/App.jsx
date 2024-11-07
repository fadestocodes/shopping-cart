import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'
import ProductCard from './components/productCard'
import Navbar from './components/navbar'
import Homepage from './components/homepage'
import Checkout from './components/checkout'

function App() {
  const [productList, setProductList] = useState([]);
  const [cartObject, setCartObject] = useState(
    {
      cartNumber : 0,
      cartItems : []
    }
  );
  
  // Fetch Fake Store API Data
  useEffect(() => {
    const fetchData = async () => {
      const URL = 'https://fakestoreapi.com/products';
      const response = await fetch(URL);
      const data = await response.json();
      setProductList(data);

    }
    fetchData();
  }, [] );
  
  //Logic To Update Cart Number
  const handleClick = (element) => {

    
    setCartObject(prevData => {
    const isItemInCart = prevData.cartItems.some( item => item.itemObj.id === element.id );

    if (isItemInCart) {
      return {
        ...prevData,
        cartNumber : prevData.cartNumber + 1,
        cartItems : prevData.cartItems.map( mappedItem => mappedItem.itemObj.id === element.id ?
          { ...mappedItem, quantity : mappedItem.quantity + 1 } : mappedItem
          )

        }
    } else {
      return {
        ...prevData,
        cartNumber : prevData.cartNumber + 1,
        cartItems : [...prevData.cartItems, {itemObj : element, quantity : 1}]
      }
    }
    })
  }

  
  //Create Context Value
  const contextValue = {
    productList,
    setProductList,
    cartObject,
    setCartObject,
    handleClick
  };





  return (
    <div className="main-container">
      < Outlet context = {contextValue} />
      {/* < Homepage productList = {productList} handleClick = {handleClick} cartObject = {cartObject} />
      < Checkout productList = {productList} cartObject = {cartObject} /> */}
    </div>
  );
}



export default App
