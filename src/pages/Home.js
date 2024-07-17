import React from "react";
import Heroslider from "../components/Home/Heroslider";
import Moreabout from "../components/Home/Moreabout";
import Whychooseus from "../components/Home/Whychooseus";
import Ourservices from "../components/Home/Ourservices";
import Counter from "../components/Home/Counter";
import Ourclients from "../components/Home/Ourclients";
import Getintouch from "../global/Getintouch";
import Blogs from "../components/Home/Blogs";

function Home() {
  return (
    <>
      <Heroslider />
      <Moreabout />
      <Whychooseus />
      <Ourservices />
      <Counter />
      <Ourclients />
      <Getintouch />
      <Blogs />
    </>
  );
}

export default Home;
