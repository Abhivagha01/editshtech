import React from "react";
import Pagetitle from "../global/Pagetitle";
import  Portifolio from '../components/Portfolio/Portfolio'

function Portfolio() {
  return (
    <>
      <Pagetitle
        title={`Portfolio`}
        description={`We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />

      <Portifolio/>
    </>
  );
}

export default Portfolio;
