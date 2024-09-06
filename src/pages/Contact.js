import React from "react";
import Pagetitle from "../global/Pagetitle";
import Ourlocation from "../components/Contact/Ourlocation";
import ContactForm from "../components/Contact/ContactForm";

function Contact() {
  return (
    <>
      <Pagetitle
        title={`Contact Us`}
        description={`We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Ourlocation />
      <ContactForm />
    </>
  );
}

export default Contact;
