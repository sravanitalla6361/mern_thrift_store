import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Login from "./pages/Login";
import Register from "./pages/Register";
import Products from "./pages/Products";
import Bag from "./pages/Bag";
import Wishlist from "./pages/Wishlist";
import ProductDetails from "./pages/ProductDetails";
import CheckoutSuccess from "./pages/CheckoutSuccess";
function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/success" element={<CheckoutSuccess />} />
        
        {/* No protection */}
        <Route path="/bag" element={<Bag />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </Router>
  );
}

export default App;
