import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Pagetitle from "../../global/Pagetitle";

function Term() {
  const [term, setTerm] = useState([]);

  const fetchsetTerm = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/termpolicy/view"
      );
      console.log(response);
      setTerm(response?.data?.data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchsetTerm();
  }, []);

  return (
    <>
      <Pagetitle
        title={`Terms & Conditions`}
        description={`
          We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />
      <Container>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: "bold",
            textAlign: "center",
            my: 4,
          }}
        >
          Terms & Conditions
        </Typography>
        <Grid item xs={12} sm={12} md={12} key={term._id}>
          <div
            dangerouslySetInnerHTML={{ __html: term?.Term }}
            style={{ marginTop: 20 }}
          />
        </Grid>
      </Container>
    </>
  );
}

export default Term;
