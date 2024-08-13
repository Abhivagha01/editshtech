import React from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import Pagetitle from "../../../../global/Pagetitle";
import AddIcon from "@mui/icons-material/Add";
import { Titleanimation } from "../../../../global/Titleanimation";
import si1 from "../../../../assets/Technoogy/front/reactjs/service/ri1.png";
import si2 from "../../../../assets/Technoogy/front/reactjs/service/ri2.png";
import si3 from "../../../../assets/Technoogy/front/reactjs/service/ri3.png";
import si4 from "../../../../assets/Technoogy/front/reactjs/service/ri4.png";
import si5 from "../../../../assets/Technoogy/front/reactjs/service/ri5.png";
import si6 from "../../../../assets/Technoogy/front/reactjs/service/ri6.png";
import si7 from "../../../../assets/Technoogy/front/reactjs/service/ri7.png";
import si8 from "../../../../assets/Technoogy/front/reactjs/service/ri8.png";
import si9 from "../../../../assets/Technoogy/front/reactjs/service/ri9.png";
import react from "../../../../assets/Technoogy/front//reactjs/tools/react-js.png";
import mern from "../../../../assets/Technoogy/front//reactjs/tools/mern-stack.png";
import graphql from "../../../../assets/Technoogy/front//reactjs/tools/graph-ql-icon.png";
import firebase from "../../../../assets/Technoogy/front//reactjs/tools/firebase-icon.png";
import django from "../../../../assets/Technoogy/front//reactjs/tools/django-logo.png";
import fastapi from "../../../../assets/Technoogy/front//reactjs/tools/fastapi-svg.svg";
import ReactjsPanel from "./ReactjsPanel";
import RequestQuote from "../../../../global/RequestQuote";

import ProjectIndustry from "../../../../global/ProjectIndustry";
import TrutedProject from "../../../../global/TrutedProject";
function ReactjsDevelopment() {
  const theme = useTheme();
  const services = [
    {
      icon: si1,
      category: "ReactJS Customisation Services",
      description:
        "Get custom ReactJS solutions designed for you. Our developers build custom components, unique designs, and specialized functionalities to deliver a personalized user experience to meet your specific business requirements.",
    },
    {
      icon: si2,
      category: "ReactJS Front-End Development",
      description:
        "Create the most interactive, and visually appealing applications with Editsh's ReactJS development service. Using reusable components and the virtual DOM, get access to solutions that have faster load times and smooth user experiences for superior performance.",
    },
    {
      icon: si3,
      category: "ReactJS Integration",
      description:
        "Upgrade your existing app with advanced tools and technology with Tagine Infotech. Our reactjs web development services, help you to optimize your system's functionality and scalability, leading to a seamless connection to your current infrastructure for improved performance.",
    },
    {
      icon: si4,

      category: "Custom ReactJS Development",
      description:
        "From extensive consultations to exceptional ReactJS development, we offer tailored solutions to meet the specific needs of your company. Improve your site's responsiveness, speed, and performance with our tailored virtual DOM and server-side rendering solutions.",
    },
    {
      icon: si5,

      category: "ReactJS Migration",
      description:
        "You can now seamlessly migrate your web solution to ReactJS with Editsh. With our migration service, improve security, and code reusability of your app along with multi-platform support, ensuring seamless integration with existing applications.",
    },
    {
      icon: si6,

      category: "ReactJS Consulting",
      description:
        "Get effective strategies and insights to enhance your applications. Hire ReactJS developers to offer effective guidance for optimising project planning, boosts performance, and ensures scalability for more reliable React-based solutions.",
    },
    {
      icon: si7,
      category: "ReactJS UI/UX Development",
      description:
        "Create a more engaging and intuitive web solution with Editsh's ReactJS UI/UX development services. Our designers create the most user-friendly interfaces for navigation and boost the overall performance of your application.",
    },
    {
      icon: si8,

      category: "ReactJS Support And Maintenance",
      description:
        "Get reliable support and maintenance with Editsh. Our experienced JS developers work proactively 24X7 to ensure your ReactJS app stays up-to-date, addressing issues swiftly to maintain optimal performance.",
    },
    {
      icon: si9,
      category: "ReactJS Plugin & Widget Development",
      description:
        "Boost functionality and streamline user interactions with custom ReactJS plugins and widgets from Editsh. Our solutions offer versatility and enhance the performance of your React-based applications.",
    },
  ];
  const TechnologyIcon = [
    {
      title: "Full stack + MERN",
      description:
        "To create a highly scalable app our developers use combinations of the MERN stack (MongoDB+Express+React+NodeJS). Along with our reactjs web development services, get a maintainable and adaptive app.",
      icons: [react, mern],
    },
    {
      title: "React + Firebase",
      description:
        "Experience the power of serverless architecture with React and Firebase. Our developer crafts high-quality applications that offer seamless scalability, secure authentication, and real-time data capabilities.",
      icons: [react, firebase],
    },
    {
      title: "ReactJS + GraphQL",
      description:
        "React developers of Editsh use ReactJS with GraphQL to empower the web solution to have lightning-fast data fetching, highly-responsive, real-time updates, and enhanced performance.",
      icons: [react, graphql],
    },
    {
      title: "ReactJS + Django",
      description:
        "To create modular web solutions with RESTful APIs, developers use ReactJS with Django. This fusion leads to feature-rich, well-performing apps along with improved UI/UX with animations and scalability from both technologies.",
      icons: [react, django],
    },
    {
      title: "ReactJS + FastAPI",
      description:
        "At Editsh, Our developer specialises in harnessing the potential of ReactJS with FastAPI to create cutting-edge web applications with efficiency and scalability and seamless integration for modern digital solutions.",
      icons: [react, fastapi],
    },
  ];
  const reactBenefits = [
    {
      title: "Agile Approach",
      description:
        "React.js provides app developers with a flexible framework to meet changing needs. Developers using Create React App and React Router benefit from agile development and quick project migrations, resulting in faster project delivery.",
    },
    {
      title: "Speed + Performance",
      description:
        "Simple syntax and reusable components speed up React development, reducing cost and time to market. Customer engagement increases as the virtual DOM improves performance and load times and improves visualisation.",
    },
    {
      title: "Improved User Experience",
      description:
        "React.js' component-based architecture improves reuse and consistency. Development tools like Storybook help developers create a smooth and dynamic user experience of the app, increasing user satisfaction.",
    },
    {
      title: "Integrity and Transparency",
      description:
        "ReactJS is open-source, so developers can analyse and verify the codebase, improving stability and consistency. Comprehensive test coverage is possible with tools like Jest, which makes sure that apps are secure and robust.",
    },
    {
      title: "Supreme Security",
      description:
        "React.js is preferred because of its high safety features. OWASP-ZAP and Snyk are tools that help developers to detect flaws and resolve them. This proactive strategy guards the system ensuring consistent performance of the app.",
    },
  ];

  return (
    <>
      <Pagetitle title="React js  Development" />
      <Box
        sx={{
          py: {
            xs: 2,
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
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <Typography
                sx={{
                  fontSize: {
                    xs: 16,
                    lg: 40,
                  },
                  fontWeight: 600,
                  my: 4,
                }}
              >
                ReactJS Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                Editsh is leading ReactJS development company, With more than 6+
                years of experience, Our experts ReactJS professionals
                implements modern AI techniques along with ReactJS technologies
                guarantee flawless coding, rapid project development, and the
                creation of user-friendly apps to meet your project objectives.
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
              </Box>
            </Grid>
            <Grid
              item
              xs={12}
              md={6}
              lg={6}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img
                src="https://i.postimg.cc/j2Y1h2vR/react-service.webp"
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
          </Grid>
        </Container>
      </Box>
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
            <Grid
              item
              xs={12}
              lg={6}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img
                src="https://i.postimg.cc/FzxF073L/javascript-frameworks-concept-illustration-114360-743.avif"
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
            <Grid
              item
              xs={12}
              lg={6}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-start",
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.black,
                    fontSize: "22px",
                    fontWeight: "600",
                    pr: 1,
                  }}
                >
                  Result-Driven
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  ReactJS Development Company
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                At Editsh, we deliver scalable and innovative solutions that
                will help your business to grow. Our experienced ReactJS
                developers create high-quality, scalable ReactJS websites
                tailored to your needs. With a customer-centric collaborative
                approach, the team works closely with our customers to
                understand the business goals. We offer you state-of-the-art
                services because of our dedication towards continuous learning,
                which keeps our professionals ahead of emerging tools and
                technologies.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                If you are looking to build the most innovative software
                solutions for your company, we are your trusted ReactJS
                Development Company. By harnessing the powers of React Js our
                developer builds the most unique, robust, and feature-rich
                mobile and web applications featuring exceptional user
                interfaces for our clients across the globe.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
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
          <Titleanimation title="Flutter App Development Service" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            As the best ReactJS development company, we offer several React
            development services. Years of ReactJS experience allow us to build
            both enterprise-level and dynamic single-page apps. We are your
            reliable ReactJS web development partner. Editsh creates unique,
            scalable and reliable apps with virtual DOM programs, reusable
            components, JSX, and server-side rendering to optimize app
            performance.
          </Typography>
          <Box
            sx={{
              px: 2,
            }}
          >
            <Grid
              container
              spacing={1}
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
                <Grid
                  xs={12}
                  sm={12}
                  md={6}
                  lg={4}
                  xl={4}
                  key={index}
                  data-aos="zoom-in"
                  data-aos-duration="3000"
                >
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
          </Box>
        </Container>
      </Box>
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 6,
          },
        }}
      >
        <Titleanimation title={`The React js Development Toolkit`} />
        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            As a leading ReactJS development company, Editsh with strategic
            thinking builds unique, feature-rich, and scalable apps using a mix
            and match of different tools and technologies. In addition to
            ReactJS, our developers are experts in the following technologies.
          </Typography>
          <Grid
            container
            spacing={2}
            justifyContent="center"
            sx={{
              py: {
                xs: 4,
                lg: 8,
              },
            }}
          >
            {TechnologyIcon.map((item, index) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={index}
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
                <Box
                  sx={{
                    p: 2,
                    boxShadow:
                      "rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;",
                    borderRadius: 4,
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <img src={item.icons[0]} alt="icon-0" />
                    </Box>
                    <Box sx={{ mx: 2 }}>
                      <AddIcon />
                    </Box>
                    <Box
                      sx={{
                        width: "40px",
                        height: "40px",
                      }}
                    >
                      <img src={item.icons[1]} alt="icon-1" />
                    </Box>
                  </Box>
                  <Box ml={2}>
                    <Typography
                      sx={{
                        fontSize: "16px",
                        color: theme.palette.black,
                        fontWeight: "bold",
                        textAlign: "center",
                        my: 2,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: theme.palette.secondary.main,
                        textAlign: "center",
                      }}
                    >
                      {item.description}
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          xs: 4,
          sm: 4,
          md: 8,
        }}
      >
        <Titleanimation title={`Benefits of React.js Development Services`} />
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
            One of the most popular choices among developers and organizations
            is the use of React since it gives numerous benefits for web
            development. Here are a few of the primary benefits of using React
            Development
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
                md: 8,
              },
            }}
          >
            {reactBenefits.map((service, index) => (
              <Grid
                item
                xs={12}
                md={6}
                lg={4}
                key={index}
                data-aos="zoom-in"
                data-aos-duration="3000"
              >
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
      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            lg: 4,
          },
          background: theme.palette.primary.main,
        }}
      >
        <Container>
          <Titleanimation title="Why Should You Choose Editsh for your ReactJS Development Project?" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            We are the leading ReactJs development service provider with
            specialization in building mobile apps, enterprise apps, and
            eCommerce platforms using React's power for unmatched performance.
          </Typography>
          <TrutedProject />
        </Container>
      </Box>

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
          <Titleanimation title={`Technologies That We Work With`} />
          <ReactjsPanel />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default ReactjsDevelopment;
