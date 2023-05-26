import Movie from "../components/Movie";
import { useState, useEffect } from "react";

function Home() {
  const [loading, setloading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const res = await (
      await fetch(
        "https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=date_added"
      )
    ).json();
    // console.log(res.data.movies);
    setMovies(res.data.movies);
    setloading(false);
  };

  useEffect(() => {
    getMovies();
    // const getMovies = fetch(
    //   "https://yts.mx/api/v2/list_movies.json/minimum_rating=8.5&sort_by=year"
    // )
    // .then((res) => res.json())
    // .then((json) => console.log(json.data.movies));
    // console.log(getMovies);
  }, []);

  return (
    <div>
      {loading ? (
        <div>
          <img src={require("../assets/img/spinner-1.gif")} alt={"loading"} />
          <h2>Loading..</h2>
        </div>
      ) : (
        <div>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              rating={movie.rating}
              dateUploaded={movie.date_uploaded}
              genres={movie.genres}
              summary={movie.summary}
            />
          ))}
        </div>
      )}
    </div>
  );
}
export default Home;
