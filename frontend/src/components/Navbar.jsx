import { useState } from "react";
import "./Navbar.css";
import Register from "../pages/Register";  
import Login from "../pages/Login";       

const Navbar = () => {
  const [showRegister, setShowRegister] = useState(false);
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <h2>My Shop</h2>
        </div>

        <div className="navbar-search">
          <input type="text" placeholder="Search Products" />
          <button>Search</button>
        </div>

        <div className="navbar-auth">
          <button className="signup-btn" onClick={() => setShowRegister(true)}>
            Signup
          </button>
          <button className="login-btn" onClick={() => setShowLogin(true)}>
            Login
          </button>
        </div>
      </nav>

      {/* ✅ Register Modal */}
      {showRegister && (
        <div className="form-container">
          <Register onClose={() => setShowRegister(false)} />
        </div>
      )}

      {/* ✅ Login Modal */}
      {showLogin && (
        <div className="form-container">
          <Login onClose={() => setShowLogin(false)} />
        </div>
      )}
    </>
  );
};

export default Navbar;
