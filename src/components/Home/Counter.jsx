import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import counter_back_image from "../../assets/common_background.png";
import { TitleTwoAnimation } from "../../global/TitleTwoAnimation";
import axios from "axios";

const Counter = () => {
  //eslint-disable-next-line
  const [counterOn, setCounterOn] = useState(false);
  const [experiences, setExperiences] = useState([]);

  const fetchExperiences = async () => {
    try {
      const response = await axios.get(
        "http://localhost:8000/api/experince/view"
      );
      console.log(response);
      setExperiences(response.data.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchExperiences();
  }, []);

  const theme = useTheme();

  return (
    <Box
      sx={{
        my: 2,
        py: 2,
        backgroundImage: `url(${counter_back_image})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "@media (max-width:600px)": {
          backgroundImage: `url(${counter_back_image})`,
        },
      }}
    >
      <Container sx={{ my: { sm: 2, lg: 6 } }}>
        <Box align="center" py={3}>
          <TitleTwoAnimation
            variant="h4"
            py={3}
            title="We have the experience"
          />
        </Box>
        <Box sx={{ py: { sm: 2, md: 4, lg: 8 } }}>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <Grid
              container
              spacing={2}
              sx={{ display: "flex", justifyContent: "center" }}
            >
              {experiences.map((item, index) => (
                <React.Fragment key={index}>
                  <Grid item xs={12} md={6} lg={3}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.white,
                        textAlign: "center",
                      }}
                    >
                      Happy Clients
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.white,
                        textAlign: "center",
                      }}
                    >
                      <CountUp end={item.happyClients} duration={2} />+
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.white,
                        textAlign: "center",
                      }}
                    >
                      Hard Workers
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.white,
                        textAlign: "center",
                      }}
                    >
                      <CountUp end={item.hardWorkers} duration={2} />+
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.white,
                        textAlign: "center",
                      }}
                    >
                      Hours Spent
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.white,
                        textAlign: "center",
                      }}
                    >
                      <CountUp end={item.hoursSpent} duration={2} />+
                    </Typography>
                  </Grid>
                  <Grid item xs={12} md={6} lg={3}>
                    <Typography
                      variant="h6"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.white,
                        textAlign: "center",
                      }}
                    >
                      Projects
                    </Typography>
                    <Typography
                      variant="h3"
                      sx={{
                        fontWeight: "bold",
                        color: theme.palette.white,
                        textAlign: "center",
                      }}
                    >
                      <CountUp end={item.projects} duration={2} />+
                    </Typography>
                  </Grid>
                </React.Fragment>
              ))}
            </Grid>
          </ScrollTrigger>
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
