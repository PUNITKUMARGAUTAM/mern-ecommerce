import React from "react";
import "./Register.css";

const Register = ({ onClose }) => {
  return (
    <div className="form-container">
      <div className="modal">
        <button className="close-icon" onClick={onClose}>
          X
        </button>
        <h2>Register</h2>
        <form>
          <input type="text" placeholder="Enter your name" required />
          <input type="email" placeholder="Enter your email" required />
          <input type="password" placeholder="Enter password" required />
          <input type="text" placeholder="Enter role (admin, user)" required />
          <input type="number" placeholder="Enter phone number" required />
          <input type="text" placeholder="Enter address" required />

          <div className="btn-group">
            <button type="submit" className="submit-btn">
              Register
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

export default Register;
