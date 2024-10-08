import axios from "axios";

const options = {
  headers: {
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3ZGY4NGNhYWYzOTdhMjRjYjNiMmExNTk4NjZiNjkwZSIsIm5iZiI6MTcyODQxNDE3MC41NzUyODIsInN1YiI6IjY3MDUyZTQxNWY5NTg5MjQ4OGMwMjBkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.FYRPelsygWQp_w3aSrkLq8Xh5XyYmxcx5p2G0-VLAbA",
    accept: 'application/json',
  },
};

export const getMoviesData = async () => {
    const { data } = await axios.get(
      'https://api.themoviedb.org/3/trending/movie/day?language=en-US',
      options
    );
  
    return data.results;
  };
  
  export const getSerchMovie = async query => {
    console.log(query);
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/search/movie?query=${query}&include_adult=false&language=en-US&page=1`,
      options
    );
  
    return data.results;
  };
  

  
  export const getFullDataMovie = async moviesId => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${moviesId}?language=en-US`,
      options
    );
  
    return data;
  };
  
  export const getDataCredits = async moviesId => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${moviesId}/credits?language=en-US`,
      options
    );
  
    return data.cast;
  };
  
  export const getDataReviews = async moviesId => {
    const { data } = await axios.get(
      `https://api.themoviedb.org/3/movie/${moviesId}/reviews?language=en-US&page=1`,
      options
    );
  
    return data.results;
  };
