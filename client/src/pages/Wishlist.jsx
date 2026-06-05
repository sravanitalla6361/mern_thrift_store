import ProductCard from "../components/ProductCard";
import { useAppContext } from "../context/AppContext";
import "./Wishlist.css";

function Wishlist() {
  const { wishlist, removeFromWishlist } = useAppContext();

  return (
    <div className="wishlist-page">
      <div className="container">
        <h1 className="page-title">My Wishlist</h1>

        {wishlist.length === 0 ? (
          <div className="empty-wishlist">
            <p>Your wishlist is empty. Start adding some favorites!</p>
          </div>
        ) : (
          <>
            <div className="wishlist-summary">
              <p className="wishlist-count">
                {wishlist.length} item{wishlist.length !== 1 ? "s" : ""} in your
                wishlist
              </p>
            </div>

            <div className="wishlist-items">
              {wishlist.map((product) => (
                <div key={product._id} className="wishlist-item">
                  <ProductCard
                    product={product}
                    showRemoveButton={true}
                    onRemove={() => removeFromWishlist(product._id)}
                  />
                </div>
              ))}
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Wishlist;
