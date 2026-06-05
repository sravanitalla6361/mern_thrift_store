import { useAppContext } from "../context/AppContext";
import ProductCard from "../components/ProductCard";
import { useNavigate } from "react-router-dom";
import "./Bag.css";

function Bag() {
  const { bag, removeFromBag, increaseQty, decreaseQty, clearBag } =
    useAppContext();

  const navigate = useNavigate();
  const total = bag.reduce(
    (sum, item) => sum + item.price * (item.quantity || 1),
    0,
  );

  return (
    <div className="bag-page">
      <h2 className="bag-title">My Bag ({bag.length})</h2>

      {bag.length === 0 ? (
        <p className="empty-text">Your bag is empty 🛍️</p>
      ) : (
        <div className="bag-container">
          {/* LEFT */}
          <div className="bag-items">
            {bag.map((item) => (
              <div key={item._id}>
                <ProductCard
                  product={item}
                  showRemoveButton={true}
                  onRemove={() => removeFromBag(item._id)}
                />

                {/* ✅ QUANTITY CONTROLS */}
                <div className="quantity-controls">
                  <button onClick={() => decreaseQty(item._id)}>-</button>
                  <span>{item.quantity || 1}</span>
                  <button onClick={() => increaseQty(item._id)}>+</button>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div className="bag-summary">
            <h3>Price Details</h3>

            <div className="summary-row">
              <span>Items ({bag.length})</span>
              <span>₹{total}</span>
            </div>

            <div className="summary-row">
              <span>Delivery</span>
              <span style={{ color: "green" }}>FREE</span>
            </div>

            <hr />

            <div className="summary-row total">
              <span>Total Amount</span>
              <span>₹{total}</span>
            </div>

            <button
              className="checkout-btn"
              onClick={() => {
                clearBag();
                navigate("/success");
              }}
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Bag;
