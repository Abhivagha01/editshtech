import { useTheme } from "@emotion/react";
import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function Heroslider({ getInTouchRef }) {
  const theme = useTheme();

  return (
    <>
      <Box className="banner">
        <div className="background-image">
          <img
            src="https://i.postimg.cc/xd5WPpfb/modern-education-Skillstork.jpg"
            alt="images"
          />
        </div>

        <Box
          sx={{
            position: "absolute",
            top: {
              xs: "30%",
              sm: "50%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            left: {
              xs: "30%",
              sm: "50%",
              md: "50%",
              lg: "50%",
              xl: "50%",
            },
            transform: {
              xs: "translate(-20%, -20%)",
              sm: "translate(-50%, -50%)",
              md: "translate(-50%, -50%)",
              lg: "translate(-50%, -50%)",
              xl: "translate(-50%, -50%)",
            },
            zIndex: 3,
          }}
        >
          <Typography
            sx={{
              color: theme.palette.primary.main,
              textAlign: "center",
              fontWeight: "700",
              mb: 2,
              fontSize: {
                xs: "30px",
                sm: "30px",
                md: "60px",
                lg: "70px",
              },
            }}
            data-aos-duration="3000"
            data-aos="fade-down"
            data-aos-easing="linear"
          >
            <Typography
              variant="span"
              sx={{
                color: theme.palette.secondary.main,
                fontSize: {
                  xs: "30px",
                  sm: "30px",
                  md: "60px",
                  lg: "70px",
                },
              }}
            >
              Editsh
            </Typography>
            Technology
          </Typography>
          <Typography
            sx={{
              color: theme.palette.primary.main,
              textAlign: "center",
              fontSize: "14px",
            }}
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-easing="linear"
          >
            Delivering IT services including feature-rich web design and
            development, mobile app development, custom software development,
            and more to accelerate and empower business.
          </Typography>
          <Link
            to="/qoute"
            style={{
              display: "flex",
              justifyContent: "center",
              mt: 3,
            }}
            data-aos="zoom-in"
            data-aos-duration="3000"
            data-aos-easing="linear"
          >
            <Button
              sx={{
                backgroundColor: theme.palette.lightwhite,
                color: theme.palette.primary.main,
                zIndex: 3,
                width: "auto",
              }}
            >
              GET A QUOTE
            </Button>
          </Link>
        </Box>
      </Box>
    </>
  );
}

export default Heroslider;
