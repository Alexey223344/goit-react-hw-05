import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getDataCredits } from "../../services/api";

const MovieCast = () => {
  const { moviesId } = useParams();
  const [cast, setCast] = useState();

  useEffect(() => {
    const getCastData = async () => {
      const castData = await getDataCredits(moviesId);
      setCast(castData);
    };
    getCastData();
  }, [moviesId]);
  if (!cast) return <Loader />;

  return (
    <ul>
      {cast.map((item) => {
        const avatarPath = item.profile_path
          ? `https://image.tmdb.org/t/p/w200${item.profile_path}`
          : "https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg";

        return (
          <li key={item.id}>
            <img
              src={avatarPath}
              alt={item.name}
              onError={(e) => {
                e.target.src = "https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg";
              }}
            />
            <div>
              <p>{item.name}</p>
              <p>
                <span>Character:</span>
                {item.character}
              </p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieCast;
