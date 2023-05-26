import propTypes from "prop-types";
import { Link } from "react-router-dom";
function Movie({ id, coverImg, title, rating, dateUploaded, genres, summary }) {
  return (
    <div>
      <img src={coverImg} alt={title + "'s cover is not ready"} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
        (평점:{rating})
      </h2>
      {/* <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul> */}
    </div>
  );
}

Movie.protoTypes = {
  id: propTypes.string.isRequired,
  coverImg: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  rating: propTypes.string.isRequired,
  dateUploaded: propTypes.string.isRequired,
  genres: propTypes.arrayOf(propTypes.string).isRequired,
  summary: propTypes.string.isRequired,
};

export default Movie;
