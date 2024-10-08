import MovieCardItem from "../MovieCardItem/MovieCardItem";
import { Link, useLocation } from "react-router-dom";

const MovieList = ({ movieData }) => {
  const location = useLocation();
  if (movieData.length === 0) {
    return <h2>Nothing found on request....</h2>;
  }
  return (
    <div>
      <ul>
        {movieData.map((item) => {
          return (
            <li key={item.id}>
              <Link to={`/movies/${item.id}`} state={location}>
                <MovieCardItem itemData={item} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default MovieList;
