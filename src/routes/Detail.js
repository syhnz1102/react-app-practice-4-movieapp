// import { useCallback, useEffect, useState } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Detail() {
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [movieInfo, setMovieInfo] = useState();
  //useEffect안으로 함수를 넣고, 끝에 [id]작성하여 id 바뀔때만 렌더링하도록 이슈 해결
  useEffect(() => {
    const getMovie = async () => {
      const json = await (
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
      ).json();
      console.log(json.data.movie);
      setMovieInfo(json.data.movie);
      setLoading(false);
      // console.log(movieInfo);
    };
    getMovie();
  }, [id]);

  //useCallBack 활용하여 이슈 해결 -> React Hook useEffect has a missing dependency: 'getMovie'
  // const getMovie = useCallback(async () => {
  //   const json = await (
  //     await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  //   ).json();
  //   console.log(json.data.movie.id);
  //   setMovieInfo(json.data.movie.id);
  // }, [id]);
  // useEffect(() => {
  //   getMovie();
  // }, [getMovie]);

  return (
    <div>
      {loading ? (
        <div>
          <img src={require("../assets/img/spinner-1.gif")} alt={"loading"} />
          <h2>Loading..</h2>
        </div>
      ) : (
        <div>
          <h1>
            <Link to={movieInfo.url}>{movieInfo.title_long}</Link>
          </h1>
          <img src={movieInfo.medium_cover_image} alt={"cover img"} />
          <h3>평점</h3>
          <p>{movieInfo.rating}</p>
          <h3>줄거리</h3>
          <p>{movieInfo.description_full}</p>
          <h3>장르</h3>
          <ul>
            {movieInfo.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
export default Detail;
