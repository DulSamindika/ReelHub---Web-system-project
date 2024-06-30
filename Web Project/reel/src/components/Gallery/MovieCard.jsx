import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MovieCard.css';


const MovieCard = ({ movieId }) => {
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await axios.get(`movie/api/${movieId}`);
        setMovie(response.data);
      } catch (error) {
        console.error('Failed to fetch movie details', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  if (!movie) {
    return <div>Loading...</div>;
  }


  return (

    <div>
      <div class="container">
     <div class="cellphone-container">    
      <div class="movie">       
        <div class="menu"></div>
        <div class="movie-img"></div>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1">
              <h1>Interstellar {movie.name}</h1>
              <ul class="movie-gen">
                <li>PG-13  / {movie.category}</li>
                <li>{movie.duration} min  /</li>
                <li>Adventure, Drama, Sci-Fi,</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>{movie.summary}</h5>
            </div>
            {/*<div class="col2">
               <ul class="movie-likes">
                <li><i class="material-icons">&#xE813;</i>124</li>
                <li><i class="material-icons">&#xE813;</i>3</li>
              </ul>
            </div>*/}
          </div>
          <div class="mr-grid">
            <div class="col1">
              <p class="movie-description">A group of elderly people are giving interviews about having lived in a climate of crop blight and constant dust reminiscent of The Great 
              Depression of the 1930's. The first one seen is an elderly woman stating her father was a farmer, but did not start out that way. </p>
            </div>
          </div>
          <div class="mr-grid actors-row">
            <div class="col1">
              <p class="movie-actors">Matthew McConaughey, Anne Hathaway, Jessica Chastain</p>
            </div>
          </div>
          <div class="mr-grid action-row">
            <div class="col2"><div class="watch-btn"><h3>WATCH TRAILER</h3></div>
            </div>
            {/*<div class="col6 action-btn"><i class="material-icons">&#xE161;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE866;</i>
            </div>
            <div class="col6 action-btn"><i class="material-icons">&#xE80D;</i>
            </div>*/}
          </div>
        </div>
      </div>
  </div>
</div>


  <img class="dribbble-link" src="https://image.flaticon.com/icons/png/512/124/124037.png" alt='movie'/>

    </div>
  )
}

export default MovieCard;