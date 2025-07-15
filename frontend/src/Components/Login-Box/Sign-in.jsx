import React from "react";
import "./Sign-in.css";

function SignIn() {
  return (
    <form className="login-box">
      <h2 className="login-box__title">Sign In</h2>
      <div className="login-box__field">
        <input
          type="email"
          className="login-box__input"
          placeholder="Email address"
          autoComplete="email"
          required
        />
      </div>
      <div className="login-box__field">
        <input
          type="password"
          className="login-box__input"
          placeholder="Password"
          autoComplete="current-password"
          required
        />
      </div>
      <button className="login-box__button" type="submit">
        Sign In
      </button>
      <div className="login-box__options">
        <label className="login-box__remember">
          <input type="checkbox" /> Remember me
        </label>
        <a href="#" className="login-box__help">
          Need help?
        </a>
      </div>
    </form>
  );
}

export default SignIn;
