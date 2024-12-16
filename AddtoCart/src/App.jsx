import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router"; // Only Router here
import Navbar from "./Components/Navbar";
import Cart from "./Components/Cart";

const App = () => {
  const [cart, setCart] = useState([]);

  return (
    <> {/* Keep Router here */}
      <Navbar cart={cart} setCart={setCart} /> {/* Pass cart and setCart to Navbar */}
      <Routes>
        <Route path="/" element={<Navbar cart={cart} setCart={setCart} />} />
        <Route path="/Cart" element={<Cart cart={cart} />} />
      </Routes>
    </>
  );
};

export default App;
