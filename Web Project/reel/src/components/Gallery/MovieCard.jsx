import React from 'react';
import './MovieCard.css';


const MovieCard = ({ movie }) => {
  
  

  return (

    <div>
      <div class="container">
     <div class="cellphone-container">    
      <div class="movie">       
        <div class="menu"></div>
        <div class="movie-img">
        <img src={movie.image} alt={movie.name} />
        </div>
        <div class="text-movie-cont">
          <div class="mr-grid">
            <div class="col1">
              <h1> {movie.name}</h1>
              <ul class="movie-gen">
                <li>PG-13  / {movie.category}</li>
                <li>{movie.duration} min  /</li>
              </ul>
            </div>
          </div>
          <div class="mr-grid summary-row">
            <div class="col2">
              <h5>Summery</h5>
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
              <p class="movie-description">{movie.summary}</p>
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



    </div>
  )
}

export default MovieCard;