import React, { useRef } from "react";
import Heroslider from "../components/Home/Heroslider";
import Moreabout from "../components/Home/Moreabout";
import Whychooseus from "../components/Home/Whychooseus";
import Ourservices from "../components/Home/Ourservices";
import Counter from "../components/Home/Counter";
import Getintouch from "../global/Getintouch";
import Blogs from "../components/Home/Blogs";
import OurClients from "../components/Client/OurClients";

function Home() {
  const getInTouchRef = useRef(null);

  return (
    <>
      <Heroslider getInTouchRef={getInTouchRef}/>
      <Moreabout />
      <Whychooseus />
      <Ourservices />
      <Counter />
      <OurClients />
      <Getintouch ref={getInTouchRef} />
      <Blogs />
    </>
  );
}

export default Home;
