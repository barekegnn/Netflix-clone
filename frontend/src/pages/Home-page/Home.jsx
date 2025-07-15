import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <main className="hero">
        <h1 className="hero__title">Unlimited movies, TV shows, and more</h1>
        <h2 className="hero__subtitle">Watch anywhere. Cancel anytime.</h2>
        <form className="hero__form">
          <input
            type="email"
            className="hero__input"
            placeholder="Email address"
            autoComplete="email"
          />
          <button className="hero__button" type="submit">
            Get Started
          </button>
        </form>
      </main>
      <Footer />
    </div>
  );
}
