import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Get-Started.css";

function GetStarted() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Optionally, pass email to login page via state or query
    navigate("/login");
  };

  return (
    <section className="get-started">
      <p className="get-started__prompt">
        Ready to watch? Enter your email to create or restart your membership.
      </p>
      <form className="get-started__form" onSubmit={handleSubmit}>
        <input
          type="email"
          className="get-started__input"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button className="get-started__button" type="submit">
          Get Started <span className="get-started__arrow">&rarr;</span>
        </button>
      </form>
    </section>
  );
}

export default GetStarted;
