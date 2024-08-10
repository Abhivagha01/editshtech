import React from "react";
import Pagetitle from "../global/Pagetitle";
import OurClients from "../components/Client/OurClients";
import { Box } from "@mui/material";
import ClientsTestimonil from "../components/Client/ClientsTestimonil";

function Clients() {
  return (
    <>
      <Pagetitle
        title={`Client`}
        description={`
          We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Box
        sx={{
          py: {
            sm: 5,
            lg: 6,
          },
        }}
      >
        <OurClients />
        <ClientsTestimonil />
      </Box>
    </>
  );
}

export default Clients;
