import clsx from "clsx";
import { Suspense, useEffect, useRef, useState } from "react";
import s from "./MovieDetailsPage.module.css";
import { NavLink, Outlet, useLocation, useParams } from "react-router-dom";
import { getFullDataMovie } from "../../services/api";
import Loader from "../../components/Loader/Loader";

const MovieDetailsPage = () => {
  const { moviesId } = useParams();
  const [fullData, setFullData] = useState();
  const location = useLocation();
  const goBack = useRef(location.state);
  const changeClassLink = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };
  useEffect(() => {
    const getFullData = async () => {
      const fullDataMovie = await getFullDataMovie(moviesId);
      setFullData(fullDataMovie);
    };
    getFullData();
  }, [moviesId]);
  if (!fullData) return <Loader />;
  const posterPath = fullData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${fullData.poster_path}`
    : "https://image.tmdb.org/t/p/w500/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg";

  return (
    <div>
      <div>
        <NavLink to={goBack.current ?? "/movies"}>Go Back</NavLink>
        <div>
          <img
            src={posterPath}
            alt={fullData.title}
            onError={(e) => {
              e.target.src = "https://image.tmdb.org/t/p/w500/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg";
            }}
          />
          <div>
            <h2>{fullData.title}</h2>
            <p>
              Rating:<span>{fullData.popularity}%</span>
            </p>
          </div>
          <div>
            <h3>Overview:</h3>
            <p>{fullData.overview}</p>
          </div>
          <div>
            <h3>Genres:</h3>
            <p>
              {fullData.genres.map((item) => (
                <span key={item.id}>{item.name}</span>
              ))}
            </p>
          </div>
        </div>
      </div>
      <div>
        <h3>Additional Information:</h3>
        <ul>
          <li>
            <NavLink to="cast" className={changeClassLink}>
              Cast
            </NavLink>
          </li>
          <li>
            <NavLink to="reviews" className={changeClassLink}>
              Reviews
            </NavLink>
          </li>
        </ul>
      </div>
      <div>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </div>
    </div>
  );
};
export default MovieDetailsPage;
