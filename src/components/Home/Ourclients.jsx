import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Button } from "@mui/material";
import React from "react";
import client1 from "../../assets/clients/client1.png";
import { Link } from "react-router-dom";
import { Titleanimation } from "../../global/Titleanimation";

function OurClients() {
  const theme = useTheme();

  const clients = [
    { id: 1, src: client1, alt: "Client 1" },
    { id: 2, src: client1, alt: "Client 2" },
    { id: 3, src: client1, alt: "Client 3" },
    { id: 4, src: client1, alt: "Client 3" },
    { id: 5, src: client1, alt: "Client 3" },
    { id: 6, src: client1, alt: "Client 3" },
    { id: 7, src: client1, alt: "Client 3" },
    { id: 8, src: client1, alt: "Client 3" },
    { id: 9, src: client1, alt: "Client 3" },
  ];

  const styles = {
    headerBox: {
      display: "flex",
      justifyContent: "center",
      position: "relative",
      mb: 4,
      fontFamily: theme.typography.fontFamily,
    },
    headerText: {
      color: theme.palette.text.primary,
      pb: 2,
      fontFamily: theme.typography.fontFamily,
    },
    underline: {
      width: "150px",
      height: "4px",
      borderRadius: "2px",
      backgroundColor: theme.palette.secondary.main,
      position: "absolute",
      left: "50%",
      transform: "translateX(-50%)",
      bottom: "0px",
    },
    clientBox: {
      display: "flex",
      justifyContent: "center",
      width: "100%",
      flexWrap: "wrap",
    },
    clientImageContainer: {
      width: "150px",
      height: "100px",
      m: 1,
    },
    clientImage: {
      width: "100%",
      height: "100%",
      objectFit: "contain",
    },
  };

  return (
    <Box sx={{
      py:10
    }}>
      <Container>
        <Titleanimation title={`Our clients`} />
        <Box sx={{ py: { sm: 4, lg: 4, xl: 10 } }}>
          <Grid container spacing={2} justifyContent="center" sx={{
            pt:4
          }}>
            {clients.map((client) => (
              <Grid item key={client.id} xs={6} sm={4} md={3} lg={2}>
                <Box sx={styles.clientImageContainer}>
                  <img
                    src={client.src}
                    alt={client.alt}
                    style={styles.clientImage}
                  />
                </Box>
              </Grid>
            ))}
          </Grid>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 4,
            }}
          >
            <Button
              sx={{
                zIndex: 3,
                width: "150px",
                border: "1px solid #100404",
                borderRadius: "20px",
              }}
            >
              <Link
                to="/"
                sx={{
                  backgroundColor: theme.palette.white,
                  color: theme.palette.black,
                }}
              >
                View More
              </Link>
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default OurClients;
