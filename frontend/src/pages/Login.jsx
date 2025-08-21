import React from "react";
import "./Login.css";

const Login = ({ onClose }) => {
  return (
    <div className="form-container">
      <div className="modal">
        <button className="close-icon" onClick={onClose}>
          X
        </button>
        <h2>Login</h2>
        <form>
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter password" required />

          <div className="btn-group">
            <button type="submit" className="submit-btn">
              Login
            </button>
            <button
              type="button"
              className="close-btn"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
