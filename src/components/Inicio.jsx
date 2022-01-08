import React from "react";
import { Carousel } from "./Carousel";

export const Inicio = () => {
  const imgArray = [
    "https://images8.alphacoders.com/106/thumb-1920-1065658.jpg",
    "https://www.wallpapertip.com/wmimgs/35-353305_the-avengers-wallpapers-1080p-avengers-wallpaper-hd.jpg",
    "https://www.wallpapertip.com/wmimgs/4-41662_poster-avengers-endgame-4k.jpg",
  ];
  return (
    <>
      <Carousel img={imgArray} />
    </>
  );
};
