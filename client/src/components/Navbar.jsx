import { Link, useNavigate, useLocation } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import { logout } from "../utils/auth";
import "./Navbar.css";

function Navbar() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user, logoutUser } = useAppContext();

  const authenticated = !!user;
  const isHomePage = location.pathname === "/";

  const handleLogout = () => {
    logout();
    logoutUser();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          ThriftStore
        </Link>

        <div className="navbar-links">
          <Link to="/" className="navbar-link">Home</Link>
          <Link to="/bag" className="navbar-link">My Bag</Link>
          <Link to="/wishlist" className="navbar-link">Wishlist</Link>

          {/* Auth Section */}
          {authenticated ? (
            <button onClick={handleLogout} className="navbar-btn">
              Logout
            </button>
          ) : (
            !isHomePage && (
              <div className="navbar-auth">
                <Link to="/login" className="navbar-link">
                  Login
                </Link>
                <Link to="/register" className="navbar-btn">
                  Sign Up
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;