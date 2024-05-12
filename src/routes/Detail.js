import { useState, useEffect, useCallback } from "react";
import { useParams } from "react-router-dom";

function Detail() {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState([]);
  const getMovieDetail = useCallback(async () => {
    const json = await (await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)).json();
    setMovieDetail(json.data.movie);
    console.log(json.data.movie);
  }, [id]);

  useEffect(() => {
    getMovieDetail();
  }, [getMovieDetail]);

  return (
    <div>
      <h2>{movieDetail.title_long}</h2>
      <img src={movieDetail.medium_cover_image} alt={movieDetail.title_long} />
      <h3>RATING : 10/{movieDetail.rating}</h3>
      <p>{movieDetail.description_full}</p>
    </div>
  );
}

export default Detail;
