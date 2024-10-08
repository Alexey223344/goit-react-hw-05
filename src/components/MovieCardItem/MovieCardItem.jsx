const MovieCardItem = ({ itemData }) => {
  const posterPath = itemData.poster_path
    ? `https://image.tmdb.org/t/p/w500/${itemData.poster_path}`
    : "https://image.tmdb.org/t/p/w500/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg";
  return (
    <div>
      <img
        src={posterPath}
        alt={itemData.original_title}
        onError={(e) => {
          e.target.src = "https://image.tmdb.org/t/p/w500/5LdGr01PGRmrg6Hh3LYPGlOOdUx.jpg";
        }}
      />
      <div>
        <h2>{itemData.title}</h2>
        <p>Release:{itemData.release_date}</p>
      </div>
    </div>
  );
};
export default MovieCardItem;
