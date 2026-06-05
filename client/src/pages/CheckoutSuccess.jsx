import { Link } from "react-router-dom";
import "./CheckoutSuccess.css";

function CheckoutSuccess() {
  return (
    <div className="checkout-page">
      <div className="checkout-card">
        <h1>🎉 Order Placed Successfully!</h1>
        <p>Your thrift finds are on the way 💖</p>

        <Link to="/" className="back-home-btn">
          Continue Shopping
        </Link>
      </div>
    </div>
  );
}

export default CheckoutSuccess;