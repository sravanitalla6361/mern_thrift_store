// Auth utility functions

export const isAuthenticated = () => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");
  return !!(token && user);
};

export const getUser = () => {
  try {
    const user = localStorage.getItem("user");

    if (!user || user === "undefined") {
      return null;
    }

    return JSON.parse(user);
  } catch (error) {
    return null;
  }
};

export const getToken = () => {
  return localStorage.getItem("token");
};

export const login = (user, token) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("token", token);
};

export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("token");
  localStorage.removeItem("wishlist");
  localStorage.removeItem("bag");
};
