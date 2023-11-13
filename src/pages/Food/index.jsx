import axios from "axios";
import React from "react";
import "./style.css";

const Food = () => {
  return (
    <div>
      <h1>halo</h1>
      <input onChange={handleChangeName} placeholder="cari nama" />
      <select>
        <option>makanan</option>
        <option>minuman</option>
      </select>
      <button onClick={handleSubmit}></button>
    </div>
  );
};

export default Food;
