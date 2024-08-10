import React, { useEffect, useState } from "react";
import { Container, Grid, Typography } from "@mui/material";
import axios from "axios";
import Pagetitle from "../../global/Pagetitle";

function Policy() {
  const [policy, setPolicy] = useState([]);

  const fetchsetPolicy = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/termpolicy/view"
      );
      setPolicy(response?.data?.data[0]);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchsetPolicy();
  }, []);

  return (
    <>
      <Pagetitle
        title={`Policy`}
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
          Policy
        </Typography>
        <Grid item xs={12} sm={12} md={12} key={policy._id}>
          <div
            dangerouslySetInnerHTML={{ __html: policy?.Policy }}
            style={{ marginTop: 20 }}
          />
        </Grid>
      </Container>
    </>
  );
}

export default Policy;
