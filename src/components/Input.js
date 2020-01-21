import React from "react";

const Input = ({ value, handler, clear, dropHandler }) => {
  const inputHandler = e => {
    handler(e.target.value);
    dropHandler(true);
  };

  return (
    <div className="form-group mb-0 ">
      <label htmlFor="name">Search for TV Show:</label>
      <input
        type="text"
        className="form-control"
        id="name"
        placeholder="Enter serial name"
        value={value}
        onChange={inputHandler}
      />
    </div>
  );
};

export default Input;
