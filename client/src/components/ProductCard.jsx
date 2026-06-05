import React from "react";
import { useAppContext } from "../context/AppContext";
import "./ProductCard.css";

const ProductCard = ({ product, showRemoveButton, onRemove }) => {
  const { title, price, image, seller } = product || {};

  const { toggleWishlist, isInWishlist, addToBag, removeFromBag, isInBag } =
    useAppContext();

  const handleWishlistClick = (e) => {
    e.stopPropagation();
    toggleWishlist(product);
  };

  const handleBagClick = (e) => {
    e.stopPropagation();

    if (isInBag(product?._id)) {
      removeFromBag(product._id);
    } else {
      addToBag(product);
    }
  };

  const handleRemove = (e) => {
    e.stopPropagation();
    if (onRemove) onRemove();
  };

  return (
    <article className="product-card">
      <div className="product-card__image-wrap">
        {/* Wishlist Button */}
        <button
          className={`product-card__wishlist-btn ${
            isInWishlist(product?._id) ? "active" : ""
          }`}
          onClick={handleWishlistClick}
        >
          {isInWishlist(product?._id) ? "❤️" : "🤍"}
        </button>

        {/* Remove button (for bag page) */}
        {showRemoveButton && (
          <button
            className="product-card__remove-btn"
            onClick={(e) => {
              e.stopPropagation();
              onRemove();
            }}
          >
            ×
          </button>
        )}
        <img
          className="product-card__image"
          src={image || "https://via.placeholder.com/300"}
          alt={title}
        />
      </div>

      <div className="product-card__content">
        <div className="product-card__tags">
          <span className="product-card__tag">Thrift</span>
          <span className="product-card__tag">Vintage</span>
        </div>

        <h3 className="product-card__title">{title}</h3>
        <p className="product-card__price">₹{price}</p>

        <p className="product-card__seller">
          Sold by {seller?.name || "Unknown"}
        </p>

        {/* Toggle Add/Remove Bag */}
        <button
          className={`product-card__add-to-bag ${
            isInBag(product?._id) ? "added" : ""
          }`}
          onClick={handleBagClick}
        >
          {isInBag(product?._id) ? "Added to Bag" : "Add to Bag"}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
