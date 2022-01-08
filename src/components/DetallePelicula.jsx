import React from "react";
import { useParams } from "react-router";
import { Card } from "./Card";

export const DetallePelicula = () => {
  const { id, nombre, desc, img } = useParams();
  return (
    <>
      <Card img={img} nombre={nombre} desc={desc} id={id} />
    </>
  );
};
