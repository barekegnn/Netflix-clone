import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import GetStarted from "../../Components/Get-started/Get-Started";
import ReasonToJoin from "../../Components/Reason-To-Join/Reason-To-Join";
import Carousel from "../../Components/Carousel/Carousel";
import {
  fetchTrendingMovies,
  fetchTrendingTV,
  fetchPopularMovies,
  fetchPopularTV,
} from "../../Api/tmdb";
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
      <Carousel
        title="Trending Movies"
        fetchFunction={fetchTrendingMovies}
        type="movie"
      />
      <Carousel title="Trending TV" fetchFunction={fetchTrendingTV} type="tv" />
      <Carousel
        title="Popular Movies"
        fetchFunction={fetchPopularMovies}
        type="movie"
      />
      <Carousel title="Popular TV" fetchFunction={fetchPopularTV} type="tv" />
      <ReasonToJoin />
      <Footer />
    </div>
  );
}
