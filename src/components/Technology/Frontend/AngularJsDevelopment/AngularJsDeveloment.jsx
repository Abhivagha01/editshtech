import React from "react";
import Pagetitle from "../../../../global/Pagetitle";
import {
  Box,
  Button,
  Grid,
  Typography,
  Container,
} from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
// Anguljs development services
import As1 from "../../../../assets/Technoogy/front/services/applicationdevelopment.png";
import As2 from "../../../../assets/Technoogy/front/services/webapplication.png";
import As3 from "../../../../assets/Technoogy/front/services/applicationdevelopment.png";
import As4 from "../../../../assets/Technoogy/front/services/consultingservices.png";
import As5 from "../../../../assets/Technoogy/front/services/apimigration.png";
import As6 from "../../../../assets/Technoogy/front/services/upgradeservices.png";
import As7 from "../../../../assets/Technoogy/front/services/uiuxsolution.png";
import As8 from "../../../../assets/Technoogy/front/services/Supportand Maintenance.png";
import As9 from "../../../../assets/Technoogy/front/services/QAandTesting.png";
import { Titleanimation } from "../../../../global/Titleanimation";
import AngularPanel from "./AngularPanel";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RequestQuote from "../../../../global/RequestQuote";
import ProjectPricing from "../../../../global/ProjectPricing";

function AngularJsDeveloment() {
  const theme = useTheme();
  const services = [
    {
      name: "Custom AngularJS Application Development",
      icon: As1,
      description:
        "Get cost-efficient and fast development with custom Flutter app development services crafted to meet your specific needs, so your app accurately represents your brand and fulfills your business objectives.",
    },
    {
      name: "AngularJS Single Page Web Application Development (SPAs)",
      icon: As2,
      description:
        "Our team of AngularJS developers creates single-page applications that are quick, responsive, and deliver seamless user experiences in addition to improved performance.",
    },
    {
      name: "AngularJS Dynamic App Development",
      icon: As3,

      description:
        "To guarantee user engagement and usefulness, we at Editsh build dynamic applications with interactive elements and real-time features.",
    },
    {
      name: "Flutter app migration",
      icon: As4,
      description:
        "Get strategic guidance and development plan with Editsh's developers to ensure optimal implementation of your AngularJS projects.",
    },
    {
      name: "Flutter app testing",
      icon: As5,
      description:
        "With Editsh’s Flutter app testing procedures, identifying and addressing any issues becomes seamless ensuring flawless performance and seamless user experience for your app.",
    },
    {
      name: "Flutter upgrade services",
      icon: As6,
      description:
        "By upgrading your AngularJS applications to the most recent version, our team can enhance their security, introduce new features, and more.",
    },
    {
      name: "AngularJS UX/UI Solutions",
      icon: As7,
      description:
        "Our goal at Editsh is to guarantee exceptional user experiences by creating and executing user interfaces that are both engaging and intuitive.",
    },
    {
      name: "AngularJS Support and Maintenance",
      icon: As8,
      description:
        "Get ongoing support and maintenance by experts helps you to keep your applications up-to-date and performing optimally.",
    },
    {
      name: "AngularJS QA and Testing",
      icon: As9,
      description:
        "Your application will be dependable, effective, and free of errors if you take advantage of our complete quality assurance and testing services.",
    },
  ];
  const AngularBenefits = [
    {
      title: "Efficient Data Binding",
      description:
        "AngularJS automates data synchronization between the model and view, leading to seamless updates and improved user interaction.",
    },
    {
      title: "Optimum Architecture",
      description:
        "With AngularJS, you can build applications that are scalable and easy to manage. This makes sure that your apps will work in the long term and be easy to keep up to date.",
    },
    {
      title: "Reusable Components",
      description:
        "Supports the usage of modular development approaches, which lead to improved code efficiency by letting developers build and reuse components across the application.",
    },
    {
      title: "Lower Development & Maintenance Costs",
      description:
        " The development and maintenance costs of AngularJS are reduced by effective management of code and the support of the community.",
    },
    {
      title: "Less Coding",
      description:
        "With declarative templates and built-in functions, development tasks are simplified, resulting in less code required to achieve desired features.",
    },
  ];
  return (
    <>
      <Pagetitle title="Angular Js Development" />
      <Box
        sx={{
          py: {
            sm: 5,
            lg: 6,
          },
        }}
      >
        <Container>
          <Grid
            container
            row
            spacing={3}
            sx={{
              justifyContent: "center",
            }}
          >
            <Grid item xs={12} md={6} lg={6}>
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.secondary.main,
                  fontWeight: "600",
                }}
              >
                AngularJs Development Service
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: 16,
                    lg: 30,
                  },
                  fontWeight: 600,
                  my: 2,
                }}
              >
                Android Application Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                As a leading AngularJS Development Company, we develop scalable,
                robust, secure, and user-friendly applications. Our expert
                developers create dynamic web applications, SPAs, and mobile
                apps, offering cost-effective solutions. Benefit from two-way
                data binding, dependency injection, and modular development. We
                use tools like Firebase, JavaScript, HTML, CSS, Docker, Redux,
                Fuse, and CoreUI to deliver fast-loading, real-time web
                applications. Trust us for top-notch Angular development
                tailored to your business needs.
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  my: 2,
                }}
              >
                <Box>
                  <Button
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.white,
                      mr: 4,
                    }}
                  >
                    <Link
                      to="/contact"
                      style={{
                        color: theme.palette.white,
                      }}
                    >
                      Reaquest A Qoute
                    </Link>
                  </Button>
                </Box>
                <Box>
                  <Button
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.white,
                    }}
                  >
                    <Link
                      to="/contact"
                      style={{
                        color: theme.palette.white,
                      }}
                    >
                      Our Portfolio
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <img
                src="https://i.postimg.cc/Lsh5J7PY/angular-hero-top.png"
                alt="ios_image"
                style={{
                  width: "100%",
                  height: "100%",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* Result for Angular Js Web Development Compnay */}
      <Box
        sx={{
          py: {
            sm: 4,
            lg: 8,
          },
        }}
      >
        <Container>
          <Grid container spacing={3} row>
            <Grid item xs={12} lg={6}>
              <img
                src="https://i.postimg.cc/65kfLkwZ/hire-angular-developer.png"
                alt="ios_image"
                style={{
                  width: "80%",
                  height: "100%",
                  margin: "0 auto",
                  textAlign: "center",
                  justifyContent: "center",
                  display: "flex",
                }}
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                sx={{
                  pb: 2,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "24px",
                    pr: 1,
                  }}
                >
                  Result-Driven
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "24px",
                    fontWeight: 600,
                    mr: 1,
                  }}
                >
                  AngularJS Web Development Company
                </Typography>
              </Box>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                  wordSpacing: "2px",
                }}
              >
                Discover the power of Editsh, where AngularJS development meets
                innovation and expertise. Our experienced Hire Our AngularJS
                developers provide custom solutions that generate noticeable
                advantages in various industries, including agriculture, energy,
                education, finance, healthcare, government, logistics, real
                estate, manufacturing, and security. From innovative ideas to
                successful deployment, we are dedicated to providing excellent,
                client-centric solutions that redefine success. Experience the
                next generation of web development by partnering with us and
                witnessing as we take your company to unimaginable heights of
                success.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
      {/* AngularJs Development Services */}
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 6,
          },
        }}
      >
        <Container>
          <Titleanimation title="Our AngularJS development services" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Our company, Editsh, is known for providing first-rate AngularJS
            development services. Our top-notch AngularJS development team
            builds dynamic web apps, SPAs, and mobile apps with Firebase,
            JavaScript, HTML, CSS, Docker, Redux, and CoreUI. We guarantee 98%
            client satisfaction with top-notch performance and user experience.
          </Typography>
          <Grid
            container
            spacing={4}
            alignItems="center"
            row
            sx={{
              py: {
                xs: 4,
                sm: 4,
                lg: 6,
              },
            }}
          >
            {services.map((service, index) => (
              <Grid xs={12} sm={12} md={6} lg={4} xl={4} key={index}>
                <Box
                  sx={{
                    border: `1px solid ${theme.palette.primary.main}`,
                    height: 320,
                    p: 4,
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      width: "80px",
                      height: "80px",
                      justifyContent: "center",
                      background: theme.palette.primary.shadow,
                      lineHeight: "24px",
                    }}
                  >
                    <img
                      src={service.icon}
                      alt="icon"
                      style={{
                        width: "50%",
                        height: "50%",
                        margin: "0 auto",
                      }}
                    />
                  </Box>
                  <Typography
                    sx={{
                      fontSize: 16,
                      fontWeight: 600,
                      py: 2,
                      color: theme.palette.secondary.main,
                    }}
                  >
                    {service.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: 14,
                      color: theme.palette.text.primary,
                    }}
                  >
                    {service.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      {/* Angularr js development project pricing */}
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 8,
          },
        }}
      >
        <Container>
          <Titleanimation title="Hire Our Talented Angularjs Developer As Per Your Project Needs" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Let our expert AngularJS developers unlock your projects' potential.
            Tagline Infotech custom solutions give your web apps creativity and
            expertise with unmatched development skills.
          </Typography>
          <Grid
            container
            spacing={3}
            alignItems="center"
            justifyContent="center"
            sx={{
              py: {
                xs: 4,
                sm: 4,
                lg: 8,
              },
            }}
          >
          <ProjectPricing/>
          </Grid>
        </Container>
      </Box>
      {/* Benefits of Angular App Development */}
      <Box
        sx={{
          xs: 4,
          sm: 4,
          md: 6,
        }}
      >
        <Titleanimation
          title={`Benefits of Angularjs for Web Application Development`}
        />
        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              maxWidth: "600px",
              margin: "auto",
            }}
          >
            AngularJS is the top choice for online application development,
            thanks to its high performance, scalable architecture, and dynamic
            user interfaces. Innovating features like two-way data binding and
            modular structure, backed by Google, make it the go-to framework for
            front-end developers all around the globe.
          </Typography>
          <Grid
            container
            spacing={4}
            row
            justifyContent="center"
            sx={{
              py: {
                xs: 4,
                sm: 4,
                lg: 8,
              },
            }}
          >
            {AngularBenefits.map((service, index) => (
              <Grid item xs={12} md={6} lg={4} key={index}>
                <Box
                  sx={{
                    p: 2,
                    boxShadow: 3,
                    borderRadius: 4,
                    height: "100%",
                    "&:hover": {
                      boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px",
                    },
                  }}
                >
                  <Box ml={2}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        fontWeight: "600",
                        color: theme.palette.secondary.main,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                      }}
                    >
                      {service.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
      {/* Angular js Develop,ment Technology */}
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 8,
          },
        }}
      >
        <Container>
          <Titleanimation
            title={`Tools and Technologies Stack We Use for Angularjs Development`}
          />
          <AngularPanel />
        </Container>
      </Box>
      {/* PRojevt Indrustry Growth */}
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default AngularJsDeveloment;
