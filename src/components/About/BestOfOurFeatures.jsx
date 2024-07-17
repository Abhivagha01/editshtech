import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import feature1 from "../../assets/about/feature1.jpg";
import ficon1 from "../../assets/about/ficon1.svg";
import ficon2 from "../../assets/about/ficon2.svg";
import ficon3 from "../../assets/about/ficon3.svg";
import ficon4 from "../../assets/about/ficon4.svg";
import { Link } from "react-router-dom";

function BestOfOurFeatures() {
  const theme = useTheme();

  const features = [
    {
      id: 1,
      title: "Improved quality",
      imagge: ficon1,
      description:
        "Increase the quality of your software by conducting thorough testing, code reviews, and continuous integration. Use automated testing tools, follow code standards, and use industry best practices. Develop a culture of quality assurance among the development team to produce software that is dependable and effective.",
    },
    {
      id: 2,
      title: "Reduced risk",
      imagge: ficon2,
      description:
        "Use a clear contract to implement riskinc reduction strategies in the software development process. Clearly define the roles, responsibilities, project parameters, standards for quality, and mitigating tactics. Make sure there are legal and financial safeguards in place to reduce ambiguities and conflicts and to promote a smooth project development process.",
    },
    {
      id: 3,
      title: "Increased Efficiency",
      imagge: ficon3,

      description:
        "Improve operational effectiveness with optimized software solutions. Consolidate processes, automate routine work, and improve resource usage. Our experience ensures prompt implementation while reducing hiccups. Get measurable productivity gains and a smooth changeover. Make contact with us to transform your productivity.",
    },
    {
      id: 4,
      title: "Improved Communication",
      imagge: ficon4,
      description:
        "Optimize software communication effectiveness by streamlining contact features. For seamless user contact, employ clear messages, timely alerts, and user-friendly interfaces. Place an emphasis on responsive layouts and user-centered design to promote speedier and more effective communication while maintaining a user-friendly experience.",
    },
  ];

  features.sort((a, b) => a.title.localeCompare(b.title));

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.primary.main,
        my: {
          sm: 4,
          lg: 6,
        },
      }}
    >
      <Grid container row>
        <Grid xs={12} md={6} lg={4}>
          <Box
            sx={{ position: "relative", height: "100%", overflow: "hidden" }}
          >
            <img
              src={feature1}
              alt="Feature_Image"
              style={{
                opacity: 0.4,
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                color: "white",
                width: "100%",
                height: "100%",
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "rgba(0, 0, 0, 0.5)",
                  zIndex: 3,
                },
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: {
                    xs: "75%",
                    sm: "75%",
                    lg: "95%",
                  },
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  textAlign: "center",
                  color: theme.palette.white,
                  width: "100%",
                  height: "100%",
                  zIndex: 4,
                }}
              >
                <Typography
                  variant="h3"
                  sx={{
                    fontWeight: "bold",
                    color: theme.palette.black,
                    position: "relative",
                    zIndex: 4,
                    mb: 2,
                  }}
                >
                  Let's View
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: theme.palette.white,
                    position: "relative",
                    zIndex: 10,
                    mb: 4,
                  }}
                >
                  Best Of Our Features
                </Typography>
                <Link
                  to="/"
                  style={{
                    background: "transparent",
                    border: "2px solid #000",
                    color: theme.palette.black,
                    padding: 10,
                    borderRadius: "4px",
                    zIndex: 4,
                  }}
                >
                  Talk to our Experts
                </Link>
              </Box>
            </Box>
          </Box>
        </Grid>
        <Grid xs={12} md={6} lg={8}>
          <Box sx={{ p: 4 }}>
            <Grid container spacing={3}>
              {features.map((feature) => (
                <Grid
                  key={feature.id}
                  item
                  xs={12}
                  sm={12}
                  md={12}
                  lg={6}
                  xl={6}
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
                  <Box
                    sx={{
                      borderRadius: 2,
                      p: 2,
                      backgroundColor: theme.palette.white,
                      border: "1px solid #f1f1f1",
                    }}
                  >
                    <Box
                      sx={{
                        width: "100px",
                        height: "100px",
                        textAlign: "center",
                        m: "auto",
                      }}
                    >
                      <img src={feature.imagge} alt="icon" />
                    </Box>
                    <Typography
                      sx={{
                        fontSize: "24px",
                        fontWeight: "bold",
                        textAlign: "center",
                        mb: 2,
                      }}
                    >
                      {feature.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        textAlign: "center",
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

export default BestOfOurFeatures;
