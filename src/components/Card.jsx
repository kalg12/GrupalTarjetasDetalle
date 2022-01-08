import React from "react";

export const Card = ({ img, nombre, id, desc }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{nombre}</h5>
        <p className="card-text">{desc}</p>
        <a href="/" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};
