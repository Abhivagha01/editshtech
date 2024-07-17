import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import theme from "../../theme/theme";
import moreabout from "../../assets/Home/IT-help.webp";

function Moreabout() {
  return (
    <>
      <Container>
        <Grid container row alignItems="center">
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{ my: 10 }}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: "700",
                }}
              >
                How Can
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "24px",
                    mx: 1,
                    fontWeight: "700",
                  }}
                >
                  IT Consulting Services
                </Typography>
                Help Your Business?
              </Typography>
              <Typography
                sx={{ py: 2, fontFamily: theme.typography.fontFamily }}
              >
                In this competitive world, technical innovations like cloud,
                cognitive, and digital have an impact on the businesses of
                different sectors like Automotive, industrial, consumer goods,
                life sciences, retail, and travel. Our team of IT experts is
                ready for the challenges to quickly develop and implement
                innovative solutions as per the requirements of your business.
              </Typography>
              <Typography
                sx={{
                  fontFamily: theme.typography.fontFamily,
                }}
              >
                Tagline Infotech’s Information technology consultants provide
                the services which are essential for customers to effectively
                control their IT problems. We have the knowledge, resources, and
                technical expertise to assist your business to become more
                dynamic by integrating and managing new disruptive technologies.
                Our skilled IT consultants provide revolutionary results by
                working on all dimensions of IT from planning to design to
                digital. Talk To Our Experts
              </Typography>
              <Box>
                <Button
                  sx={{
                    fontSize: "16px",
                    my: 4,
                    backgroundColor: theme.palette.secondary.main,
                    "&:hover": {
                      transition: "transform 0.3s ease-in-out",
                      backgroundColor: theme.palette.lightwhite,
                    },
                  }}
                >
                  Talk to our Experts
                </Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <Box sx={{p:5}} className="moreabout-inner">
              <img src={moreabout} alt="moreabout" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default Moreabout;
