import React, { useState, useEffect } from "react";
import "./Results.css";
import VideoCard from "./VideoCard";
import axios from "./axios";
import FlipMove from "react-flip-move";

function Results({ selectedOptions }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const requests = await axios.get(selectedOptions);
      setMovies(requests.data.results);
      return requests;
    }
    fetchData();
  }, [selectedOptions]);


      console.log("AAAAAAAAAA",movies);


  return (
    <div className="results">
      <FlipMove>
        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
                {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}

                  {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
                    {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
                      {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
                        {movies.map((movie) => (
          <VideoCard key={movie.id} movie={movie} />
        ))}
      </FlipMove>
    </div>
  );
}

export default Results;
