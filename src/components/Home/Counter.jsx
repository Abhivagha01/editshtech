import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";
import counter_back_image from "../../assets/common_background.png";
import { TiltleTwoAnimation } from "../../global/TiltleTwoAnimation,";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);
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
        "@media (maxWidth:600px)": {
          backgroundImage: `url(${counter_back_image})`,
        },
      }}
    >
      <Container sx={{ my: { sm: 2, lg: 6 } }}>
        <Box align="center" py={3}>
          <TiltleTwoAnimation
            variant="h4"
            py={3}
            title={`We have the experience`}
          />
        </Box>
        <Box sx={{ py: { sm: 2, md: 4, lg: 8 } }}>
          <ScrollTrigger
            onEnter={() => setCounterOn(true)}
            onExit={() => setCounterOn(false)}
          >
            <Grid container spacing={3}>
              {[
                { end: 50, label: "Happy Clients" },
                { end: 80, label: "Projects" },
                { end: 98, label: "Hard Workers" },
                { end: 4650, label: "Hours Spent" },
              ].map((item, index) => (
                <Grid item xl={3} lg={3} md={6} sm={6} xs={12} key={index}>
                  <Typography
                    sx={{
                      fontSize: "40px",
                      textAlign: "center",
                      color: theme.palette.white,
                      fontWeight: 500,
                    }}
                  >
                    {counterOn && (
                      <CountUp
                        sx={{
                          textAlign: "center",
                          color: theme.palette.white,
                          fontWeight: 900,
                        }}
                        start={0}
                        end={item.end}
                        duration={2}
                        delay={0}
                      />
                    )}
                    +
                  </Typography>
                  <Typography
                    sx={{
                      textAlign: "center",
                      color: theme.palette.white,
                      fontWeight: 600,
                    }}
                  >
                    {item.label}
                  </Typography>
                </Grid>
              ))}
            </Grid>
          </ScrollTrigger>
        </Box>
      </Container>
    </Box>
  );
};

export default Counter;
