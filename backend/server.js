const express = require('express');
const axios = require('axios');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// TMDB API base URL and key
const TMDB_BASE_URL = 'https://api.themoviedb.org/3';
const API_KEY = process.env.TMDB_API_KEY;

// Endpoint to fetch trending movies
app.get('/api/trending', async (req, res) => {
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/trending/movie/week?api_key=${API_KEY}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

// Endpoint to fetch movies by genre (e.g., 28 for Action, 35 for Comedy)
app.get('/api/movies/:genre', async (req, res) => {
  const genreId = req.params.genre;
  try {
    const response = await axios.get(`${TMDB_BASE_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`);
    res.json(response.data.results);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));