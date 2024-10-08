import { useEffect, useState } from "react";
import { getMoviesData } from "../../services/api.js";
import Loader from "../../components/Loader/Loader";
import MovieList from "../../components/MovieList/MovieList";

const HomePage = () => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const getData = async () => {
      const data = await getMoviesData();
      setMovies(data);
    };
    getData();
  }, []);
  if (!movies.length) return <Loader />;

  return (
    <div>
      <MovieList movieData={movies} />
    </div>
  );
};
export default HomePage;
