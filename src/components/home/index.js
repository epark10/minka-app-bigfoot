import React from "react";
import { Hero } from "./hero";
import { TransformingEmployer } from "./transforming-employer";
import Testimonial from "./testimonial";

import { Video } from "./video";

export const Home = () => {
  return (
    <>
      <Hero />
      <TransformingEmployer />
      <Testimonial />
      <Video />
    </>
  );
};
