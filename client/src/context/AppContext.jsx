import React, { createContext, useContext, useState, useEffect } from "react";
import { getUser } from "../utils/auth";

const AppContext = createContext();

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export const AppProvider = ({ children }) => {
  const [user, setUser] = useState(getUser());
  const [bag, setBag] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  // Load bag and wishlist from localStorage on mount
  useEffect(() => {
    const savedBag = localStorage.getItem("bag");
    const savedWishlist = localStorage.getItem("wishlist");

    if (savedBag) {
      setBag(JSON.parse(savedBag));
    }
    if (savedWishlist) {
      setWishlist(JSON.parse(savedWishlist));
    }
  }, []);

  // Save bag to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("bag", JSON.stringify(bag));
  }, [bag]);

  // Save wishlist to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const addToBag = (product) => {
  const existing = bag.find(item => item._id === product._id);

  if (existing) {
    setBag(
      bag.map(item =>
        item._id === product._id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  } else {
    setBag([...bag, { ...product, quantity: 1 }]);
  }
};






const increaseQty = (productId) => {
  setBag(
    bag.map(item =>
      item._id === productId
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  );
};

const decreaseQty = (productId) => {
  setBag(
    bag
      .map(item =>
        item._id === productId
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter(item => item.quantity > 0)
  );
};




  const removeFromBag = (productId) => {
    setBag(bag.filter((item) => item._id !== productId));
  };

  const addToWishlist = (product) => {
    if (!wishlist.some((item) => item._id === product._id)) {
      setWishlist([...wishlist, product]);
    }
  };

  const removeFromWishlist = (productId) => {
    setWishlist(wishlist.filter((item) => item._id !== productId));
  };

  const toggleWishlist = (product) => {
    if (wishlist.some((item) => item._id === product._id)) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  const isInWishlist = (productId) => {
    return wishlist.some((item) => item._id === productId);
  };

  const isInBag = (productId) => {
    return bag.some((item) => item._id === productId);
  };

  const loginUser = (userData) => {
    setUser(userData);
  };

  const logoutUser = () => {
    setUser(null);
    setBag([]);
    setWishlist([]);
  };

  const clearBag = () => {
  setBag([]);
};

  const value = {
    user,
    bag,
    wishlist,
    addToBag,
    removeFromBag,
    addToWishlist,
    removeFromWishlist,
    toggleWishlist,
    isInWishlist,
    isInBag,
    loginUser,
    logoutUser,
    increaseQty,
  decreaseQty,
  clearBag,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
