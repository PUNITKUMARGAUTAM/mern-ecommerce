import { BrowserRouter as Router, Routes , Route, RouterProvider } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar";
// import Home from './pages/Home';
// import Products from "./pages/Products";
// import Cart from "./pages/Cart";
// import { useState } from "react";

function App() {

  // const [cart , setCart] = useState([]);

  // const  addToCart = (product) => {
  //   setCart([...cart , product]);
  // };

  return (

    <Navbar></Navbar>
    // <Router>
    //   <Navbar/>
    //   <Routes>
      
    //        <Route path='/' element={<Home />} />
    //        <Route path="products" element={<Products addToCart={addToCart} />}/>
    //        <Route path="/cart" element={<Cart cart={cart} />} />

    //   </Routes>
    // </Router>
 
  );
}

export default App;
