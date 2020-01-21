import React from "react";
import { Link } from "react-router-dom";

const DropDown = ({ list, error }) => {

  if (error) {
    return (
      <div className="alert alert-danger mt-1" role="alert">
        Произошла ошибка , попробуйте еще раз
      </div>
    );
  }

  return (
    <ul className="list-unstyled border rounded position-absolute w-75 DropDown">
      {list.map(elem => (
        <li className="p-2 border-bottom bg-dark" key={elem.show.id}>
          <Link to={`/show/${elem.show.id}`} className="nav-link text-white">
            {elem.show.name}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
