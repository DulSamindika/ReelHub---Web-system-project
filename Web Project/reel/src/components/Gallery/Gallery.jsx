import React, {useEffect, useState} from 'react';
import MovieCard from './MovieCard';
import axios from 'axios';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';

const Gallery = () => {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(`https://api.themoviedb.org/3/movie/popular`, {
          params: {
            api_key: '5fb8e6c4782ab03a6930346a50575111'
          }
        });

        const movies = response.data.results.map(movie => ({
          id: movie.id,
          name: movie.title,
          summary: movie.overview.split(' ').slice(0, 30).join(' ') + (movie.overview.split(' ').length > 30 ? '...' : ''),
          category: movie.genre_ids.join(', '),  // You may want to convert genre IDs to genre names
          image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
          duration: movie.runtime
        }));

        setMovies(movies);
      } catch (error) {
        console.error('Failed to fetch movies', error);
      }
    };

    fetchMovies();
  }, []);

  if (movies.length === 0) {
    return <div>Loading...</div>;
  }


  return (
    <div>
      <Carousel>
      <Carousel.Item interval={1000}>
        <img 
        className="d-block w-100"
        src="./Images/carsol-1.jpg" 
        alt="Card-1"  />
        <Carousel.Caption>
        <h1>Welcome to the Gallery</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={1000}>
        <img 
        className="d-block w-100"
        src="./Images/carsol-2 .jpg" 
        alt="Card-2"  />
        <Carousel.Caption>
        <h1>Welcome to the Gallery</h1>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img 
        className="d-block w-100"
        src="./Images/carsol-3.jpg" 
        alt="Card 3"  />
        <Carousel.Caption>
        <h1>Welcome to the Gallery</h1>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      <h2>Welcome to the Gallery</h2>
      <p>This is the Portfolio section.</p>
      <Row>
      {movies.map(movie => (
      <div key={movie.id} className="col-md-4 mb-3">
      <MovieCard  movie={movie}/>
      </div>
    ))}</Row>
    </div>
  );
};

export default Gallery;