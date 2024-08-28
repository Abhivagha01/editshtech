import React from "react";
import Pagetitle from "../global/Pagetitle";
import { Box } from "@mui/material";
import Getintouch from "../global/Getintouch";

function GetATouch() {
  return (
    <>
      <Pagetitle
        title={`Quote`}
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
        <Getintouch />
      </Box>
    </>
  );
}

export default GetATouch;
