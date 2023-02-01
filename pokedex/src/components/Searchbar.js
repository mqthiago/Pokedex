import React, { useState } from "react";

const Searchbar = () => {
  const [search, setSearch] = useState("dito");

  const onChangeHandler = (e) => {
    console.log("pokemon: ", e.target.value);
    setSearch(e.target.value);
  };

  const onButtonClickhandler = () => {
    console.log("pokemon ", search);
  };
  return (
    <div className="searchbar-container">
      <div className="searchbar">
        <input placeholder="Buscar pokemon" onChange={onChangeHandler} />
      </div>
      <div className="searchbar-btn">
        <button onClick={onButtonClickhandler}>Buscar</button>
      </div>
    </div>
  );
};

export default Searchbar;
