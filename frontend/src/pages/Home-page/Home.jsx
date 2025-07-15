import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import GetStarted from "../../Components/Get-started/Get-Started";
import TrendingNow from "../../Components/Trending-Now/Trending-Now";
import ReasonToJoin from "../../Components/Reason-To-Join/Reason-To-Join";
import "./Home.css";

export default function Home() {
  return (
    <div className="home">
      <Header />
      <main className="hero">
        <h1 className="hero__title">Unlimited movies, TV shows, and more</h1>
        <h2 className="hero__subtitle">Watch anywhere. Cancel anytime.</h2>
        <GetStarted />
      </main>
      <TrendingNow />
      <ReasonToJoin />
      <GetStarted />
      <Footer />
    </div>
  );
}
