import React, { useEffect } from "react";
import useFetch from "../hooks/useFetch";
import FilmInfo from "../components/FilmInfo";

const Info = props => {
  const [{ response }, doFetch] = useFetch();
  const id = props.match.params.id;
  const baseUrl = `http://api.tvmaze.com/shows/${id}`;

  useEffect(() => {
    doFetch(baseUrl);
  }, [doFetch, baseUrl]);


  return (
    <div>
      <h1 className="text-center">Film info</h1>
      <div className="row">
        <div className="col-6 offset-3">
          {response && <FilmInfo info={response} />}
        </div>
      </div>
    </div>
  );
};

export default Info;
