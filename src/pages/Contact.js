import React from "react";
import Pagetitle from "../global/Pagetitle";
import Ourlocation from "../components/Contact/Ourlocation";
import ContaactForm from "../components/Contact/ContaactForm";

function Contact() {
  return (
    <>
      <Pagetitle
        title={`Contact Us`}
        description={`We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Ourlocation />
      <ContaactForm />
    </>
  );
}

export default Contact;
