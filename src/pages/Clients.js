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
