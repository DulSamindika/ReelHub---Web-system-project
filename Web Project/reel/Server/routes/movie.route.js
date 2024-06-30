const express = require('express');
const axios = require('axios');
const app = express();
const TMDB_API_KEY = '5fb8e6c4782ab03a6930346a50575111';


app.get('/api/:id', async (req, res) => {
    const movieId = req.params.id;
    try {
      const response = await axios.get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: TMDB_API_KEY
        }
      });
  
      const movie = response.data;
      const movieDetails = {
        name: movie.title,
        summary: movie.overview,
        category: movie.genres.map(genre => genre.name).join(', '),
        image: `https://image.tmdb.org/t/p/w500${movie.poster_path}`,
        duration: movie.runtime
      };
  
      res.json(movieDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Failed to fetch movie details' });
    }
  });
  