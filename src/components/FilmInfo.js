import React from "react";

const FilmInfo = ({ info }) => {
  return (
    <div className="row">
      <div className="col-4 offset-1">
        <img src={info.image.medium} className="img-fluid" alt="Poster" />
      </div>
      <div className="col6">
        <ul className='list-unstyled'>
          <li>Name : {info.name} </li>
          <li>Type : {info.type}</li>
          <li>Language : {info.language} </li>
          <li>Runtime : {info.runtime}</li>
          <li>Premiered :{info.premiered}</li>
        </ul>
      </div>
    </div>
  );
};

export default FilmInfo;
