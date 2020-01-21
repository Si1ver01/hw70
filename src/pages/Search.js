import React, { useEffect, useState } from "react";
import Input from "../components/Input";
import DropDown from "../components/DropDown";
import useFetch from "../hooks/useFetch";
import { useLocation } from "react-router-dom";

const Search = () => {
  const [name, setName] = useState("");
  const [isDropDown, setIsDropDown] = useState(true);
  const [{ response, loading, error }, doFetch, clearResponse] = useFetch();
  const baseUrl = `http://api.tvmaze.com/search/shows?q=${name}`;
  const { pathname } = useLocation();

  useEffect(() => {
    clearResponse();
    setIsDropDown(false);
  }, [pathname,clearResponse]);

  useEffect(() => {
    if (name) {
      doFetch(baseUrl);
    }
  }, [doFetch, baseUrl, name]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-6 offset-3">
          <Input value={name} handler={setName} clear={clearResponse} dropHandler={setIsDropDown}/>
        </div>
        <div className="col-6 offset-3 position-relative">
          {response && isDropDown && <DropDown list={response} loading={loading} error={error}/>}
        </div>
      </div>
    </div>
  );
};

export default Search;
