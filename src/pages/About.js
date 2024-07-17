import React from "react";
import Aboutsection from "../components/About/Aboutsection";
import Pagetitle from "../global/Pagetitle";
import BestOfOurFeatures from "../components/About/BestOfOurFeatures";
import Getintouch from "../global/Getintouch";

function About() {
  return (
    <>
      <Pagetitle
        title={`About Us`}
        description={`
We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Aboutsection />

      <BestOfOurFeatures />
      <Getintouch />
    </>
  );
}

export default About;
