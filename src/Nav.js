import React from "react";
import "./Nav.css";
import request from "./request";

function Nav({ setSelectedOptions }) {
  return (
    <div className="nav">
      <h2 onClick={() => setSelectedOptions(request.fetchTrending)}>
        Trending
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchTopRated)}>
        Top Rated
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchActionMovies)}>
        Action
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchComedyMovies)}>
        Comedy
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchHorrorMovies)}>
        Horror
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchRomanceMovies)}>
        Romance
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchMystery)}>Mystery</h2>
      <h2 onClick={() => setSelectedOptions(request.fetchSciFi)}>Sci-Fi</h2>
      <h2 onClick={() => setSelectedOptions(request.fetchWestern)}>Western</h2>
      <h2 onClick={() => setSelectedOptions(request.fetchAnimation)}>
        Animation
      </h2>
      <h2 onClick={() => setSelectedOptions(request.fetchTV)}>TV Movie</h2>
    </div>
  );
}

export default Nav;
