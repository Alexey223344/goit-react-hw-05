import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../Loader/Loader";
import { getDataReviews } from "../../services/api.js";

const MovieReviews = () => {
  const { moviesId } = useParams();
  const [reviews, setReviews] = useState();
  useEffect(() => {
    const getCastData = async () => {
      const castData = await getDataReviews(moviesId);
      setReviews(castData);
    };
    getCastData();
  }, [moviesId]);
  if (!reviews) return <Loader />;
  if (reviews.length === 0) {
    return <h2>No one has left a reviews...</h2>;
  }

  return (
    <ul>
      {reviews.map((review) => {
        const avatarPath = review.author_details.avatar_path
          ? `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}`
          : "https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg";

        return (
          <li key={review.id}>
            <img
              src={avatarPath}
              alt={review.author_details.username}
              onError={(e) => {
                e.target.src = "https://image.tmdb.org/t/p/w200/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg";
              }}
            />
            <div>
              <h2>
                Author: <span>{review.author}</span>
              </h2>
              <p>Comment:</p>
              <p>{review.content}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};
export default MovieReviews;
