import React from "react";
import { Link } from "react-router-dom";
import { Card } from "./Card";

export const Peliculas = () => {
  const peliculas = [
    {
      id: 1,
      nombre: "Capitán América",
      desc: "Pelicula de Steve Rogers",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/capita-n-ame-rica-el-primer-vengador-1525786476.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 2,
      nombre: "Iron Man",
      desc: "Pelicula de Tony Stark",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/iron-man-1-1525786538.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 3,
      nombre: "El increíble Hulk",
      desc: "Pelicula del Dr Banner",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/el-increi-ble-hulk-1525787024.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 4,
      nombre: "Thor",
      desc: "Pelicula del Dios del Trueno",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/thor-1546418437.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 5,
      nombre: "Los Vengadores",
      desc: "Pelicula de los vengadores",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-1525787643.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
    {
      id: 6,
      nombre: "Guardianes de la Galaxia",
      desc: "Pelicula de los guardianes",
      img: "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/guardianes-de-la-galaxia-1525787553.jpg?crop=1xw:1xh;center,top&resize=980:*",
    },
  ];
  return (
    <div className="container">
      <section className="row mt-5">
        {peliculas.map((x) => {
          return (
            <Link
              key={x.id}
              to={`/detallepelicula/${x.id}/${x.nombre}/${x.desc}/${x.img}`}
              className="col-md-4"
            >
              <Card img={x.img} nombre={x.nombre} desc={x.desc} id={x.id} />
            </Link>
          );
        })}
      </section>
    </div>
  );
};
