import React, { useEffect, useState } from "react";
import Pagetitle from "../../global/Pagetitle";
import { Box, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import ci1 from "../../assets/Career/ci1.svg";
import ci2 from "../../assets/Career/ci2.svg";
import ci3 from "../../assets/Career/ci3.svg";
import ci4 from "../../assets/Career/ci4.svg";
import ci5 from "../../assets/Career/ci5.svg";
import ci6 from "../../assets/Career/ci6.svg";
import careerImage from "../../assets/Career/careerImage.jpg";
import jobApply from "../../assets/Career/jobapply.webp";
import { Link } from "react-router-dom";
import { Titleanimation } from "../../global/Titleanimation";
import UploadCvForm from "../../global/UploadCvForm";
import axios from "axios";

const hiringSteps = [
  {
    id: 1,
    title: "Identify the hiring need",
    description: `We're searching for qualified people to join our group. Should be
                  gifted in cooperation, critical thinking, and programming
                  advancement. Requires broad comprehension of programming
                  dialects and structures. The best candidates are adaptable,
                  imaginative, and focused on creating prevalent arrangements.
                  Go along with us for a dynamic and invigorating air that you
                  might add to state-of-the-art projects.`,
    icon: ci1,
  },
  {
    id: 2,
    title: "Write a job description",
    description: `To join our group, we are searching for a serious programming engineer. You will work with cross-utilitarian groups to deliver top-notch arrangements while being accountable for creating, making, and changing programming applications. Solid programming abilities, critical thinking abilities, and a longing to stay aware of industry changes are characteristics that characterize ideal candidates.`,
    icon: ci2,
  },
  {
    id: 3,
    title: "Source candidates",
    description: `Track down the top possibilities by decisively joining organizing, web channels, and industry suggestions. Make sets of responsibilities, collaborate with candidates, and complete thorough assessments to match abilities and culture. Use proactive enlistment methods to captivate the best people, guaranteeing major areas of strength for a business extension.`,
    icon: ci3,
  },
  {
    id: 4,
    title: "Screen candidates",
    description: `Specialized tests, coding difficulties, and social meetings ought to be generally used to assess candidates for programming work. Assessment of coding information, collaboration and critical thinking skills. To guarantee a durable and proficient group, pick individuals who show major areas of strength for programming improvement, effective correspondence, and excitement for development.`,
    icon: ci4,
  },
  {
    id: 5,
    title: " Interview candidates",
    description: `Split down the gathering of new kids in town completely. Investigate your particular power, your definitive ability to think, and your social fit. Get some data about related commitments to study adaptability and collaboration. Find contenders who are sensible with our affiliation's convictions and can focus on our improvement endeavours from beginning to end.`,
    icon: ci5,
  },
  {
    id: 6,
    title: "Make an offer",
    description: `Get accomplished with our exceptional arrangements! Experience particular arrangements that are expertly created to propel your organization. Our group's skill guarantees imaginative results, and the bother-free mix gives a smooth change. Acknowledge its significance now to encounter the change for yourself. With us, your example of overcoming adversity starts.`,
    icon: ci6,
  },
];

function Career() {
  const [technology, setTechnology] = useState([]);
  const theme = useTheme();

  const fetchTechnology = async () => {
    try {
      const response = await axios.get(
        "https://editsh-back.onrender.com/api/technology/view"
      );
      setTechnology(response?.data?.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchTechnology();
  }, []);

  return (
    <>
      <Pagetitle
        title={`Career`}
        description={`
        We are Surat-based IT Solution Providers committed to providing the best services for the growth of our valuable clients and their varied businesses.`}
      />

      <Box
        sx={{
          m: {
            xs: 4,
            sm: 4,
            lg: 10,
          },
        }}
      >
        <Titleanimation title="Our Hiring Process" />

        <Grid
          container
          rowSpacing={1}
          sx={{
            mt: {
              xs: 4,
              sm: 4,
              lg: 10,
            },
          }}
        >
          {hiringSteps.map((step) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              lg={4}
              key={step.id}
              sx={{ border: "1px solid #f4f4f4" }}
            >
              <Box sx={{ p: 3 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                  }}
                >
                  <Box>
                    <img
                      src={step.icon}
                      alt={`career_icon_${step.id}`}
                      style={{
                        width: "80px",
                        height: "80px",
                      }}
                    />
                  </Box>
                  <Box
                    sx={{
                      fontSize: "50px",
                      fontWeight: "bold",
                      color: theme.palette.lightwhite,
                      fontFamily: '"Rubik Vinyl", system-ui',
                    }}
                  >
                    {`0${step.id}`}
                  </Box>
                </Box>
                <Typography
                  sx={{
                    color: theme.palette.lightwhite,
                    fontSize: "20px",
                    fontWeight: "600",
                    py: 1,
                  }}
                >
                  {step.title}
                </Typography>
                <Typography
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "14px",
                  }}
                >
                  {step.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Box>

      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 10,
            backgroundColor: theme.palette.black,
          },
        }}
      >
        <Container>
          <Grid
            container
            row
            spacing={1}
            sx={{
              py: {
                xs: 4,
                lg: 10,
              },
            }}
          >
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <img src={careerImage} alt="CareerImage" />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <Box>
                <Box
                  sx={{
                    display: "flex",
                    py: 4,
                  }}
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <Typography
                    sx={{
                      fontSize: "45px",
                      color: theme.palette.white,
                      mr: 2,
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    Growthat
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: "45px",
                      color: theme.palette.secondary.main,
                      letterSpacing: "1px",
                      fontWeight: "600",
                      textTransform: "uppercase",
                    }}
                  >
                    Editsh
                  </Typography>
                </Box>
                <Typography
                  sx={{
                    fontSize: "16px",
                    color: theme.palette.white,
                    py: 2,
                    letterSpacing: "1px",
                    lineHeight: "34px",
                  }}
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  Are you a developer, Web Developer, or passionate about
                  providing solutions? If yes, then Scalelot is the right place
                  for your career growth. We are welcoming talented
                  professionals from across the globe to work with us.
                </Typography>

                <Box
                  sx={{
                    mt: 4,
                  }}
                  data-aos="fade-left"
                  data-aos-duration="3000"
                >
                  <Link
                    to="/about"
                    style={{
                      border: "2px solid #8c8c8c",
                      padding: "10px 20px",
                      borderRadius: "50px",
                      color: theme.palette.white,
                      dispaly: "block",
                      fontWeight: "bold",
                    }}
                  >
                    Check Current Openings
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 10,
          },
        }}
      >
        <Titleanimation title="Current Open Position" />
        <Box
          sx={{
            py: {
              sm: 4,
              xs: 3,
              lg: 8,
            },
          }}
        >
          <Container>
            <Grid
              container
              spacing={3}
              sx={{
                justifyContent: "center",
              }}
            >
              {technology.map((tech) => (
                <Grid
                  item
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={3}
                  key={tech.id}
                  sx={{
                    border: "1px solid #f1f1f1",
                    borderRadius: 2,
                    p: 4,
                    transition: "box-shadow 0.3s ease-in-out",
                    "&:hover": {
                      boxShadow: "rgba(0, 0, 0, 0.3) 0px 10px 20px",
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: "100px",
                        height: "100px",
                        margin: "auto",
                        borderRadius: "50%",
                        boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <img
                        src={tech.LanguagesLogo}
                        alt="language_logo"
                        style={{
                          width: "100%",
                          height: "60px",
                          margin: "14px",
                        }}
                      />
                    </Box>
                    <Box>
                      <Typography
                        sx={{
                          fontSize: "20px",
                          fontWeight: "600",
                          textAlign: "center",
                          py: 2,
                        }}
                      >
                        {tech.LanguagesName}
                      </Typography>
                    </Box>

                    <Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "16px",
                          color: theme.palette.lightwhite,
                        }}
                      >
                        <Box
                          sx={{
                            fontWeight: "500",
                            color: theme.palette.lightwhite,
                          }}
                        >
                          Experience:
                        </Box>
                        <Box sx={{ color: theme.palette.secondary.main }}>
                          {tech.Experience}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "16px",
                          color: theme.palette.lightwhite,
                        }}
                      >
                        <Box
                          sx={{
                            fontWeight: "500",
                            color: theme.palette.lightwhite,
                          }}
                        >
                          No. of Openings:
                        </Box>
                        <Box sx={{ color: theme.palette.secondary.main }}>
                          {tech.Openings}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                          fontSize: "16px",
                          color: theme.palette.lightwhite,
                        }}
                      >
                        <Box
                          sx={{
                            fontWeight: "500",
                            color: theme.palette.lightwhite,
                          }}
                        >
                          Qualifications:
                        </Box>
                        <Box sx={{ color: theme.palette.secondary.main }}>
                          {tech.Qualification}
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          mt: 2,
                          display: "flex",
                          justifyItems: "center",
                        }}
                      >
                        <Link
                          href={tech.applyLink}
                          style={{
                            textDecoration: "none",
                            color: theme.palette.secondary.main,
                            fontSize: "14px",
                            fontWeight: "600",
                            border: "1px solid #8c8c8c",
                            textTransform: "uppercase",
                            padding: "6px",
                            margin: "auto",
                            textAlign: "center",
                            maxWidth: "150px",
                            width: "100%",
                            display: "inline-block",
                            borderRadius: "4px",
                          }}
                          to="apply"
                        >
                          Apply Now
                        </Link>
                      </Box>
                    </Box>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>

        <Box
          sx={{
            py: {
              xs: 4,
              sm: 4,
              lg: 10,
            },
            backgroundImage: `url(${jobApply})`,
            backgroundAttachment: "fixed",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            "@media (maxWidth:600px)": {
              backgroundImage: `url(${jobApply})`,
            },
          }}
        >
          <Container>
            <Grid
              container
              row
              justifyContent="center"
              sx={{
                borderRadius: "14px",
              }}
            >
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={9}
                sx={{
                  backgroundColor: theme.palette.white,
                }}
              >
                <UploadCvForm />
              </Grid>
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default Career;
