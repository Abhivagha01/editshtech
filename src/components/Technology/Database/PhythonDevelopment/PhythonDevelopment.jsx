import React from "react";
import Pagetitle from "../../../../global/Pagetitle";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import s1 from "../../../../assets/Technoogy/Backend/phython/services/s1.png";
import s2 from "../../../../assets/Technoogy/Backend/phython/services/s2.png";
import s3 from "../../../../assets/Technoogy/Backend/phython/services/s3.png";
import s4 from "../../../../assets/Technoogy/Backend/phython/services/s4.png";
import s5 from "../../../../assets/Technoogy/Backend/phython/services/s5.png";
import s6 from "../../../../assets/Technoogy/Backend/phython/services/s6.png";
import s7 from "../../../../assets/Technoogy/Backend/phython/services/s7.png";
import s8 from "../../../../assets/Technoogy/Backend/phython/services/s8.png";
import s9 from "../../../../assets/Technoogy/Backend/phython/services/s9.png";
import { Titleanimation } from "../../../../global/Titleanimation";
import ProjectPricing from "../../../../global/ProjectPricing";
import TrutedProject from "../../../../global/TrutedProject";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RequestQuote from "../../../../global/RequestQuote";
import PhythonPanel from "./PhythonPanel";

function PhythonDevelopment() {
  const theme = useTheme();

  const services = [
    {
      title: "Python Web Development",
      description:
        "Create robust and scalable web applications tailored to your business needs using versatile frameworks and libraries of Python for optimal performance and user experience.",
      icon: s1,
    },
    {
      title: "Python Mobile App Development",
      description:
        "Build native, cross-platform mobile apps with top-notch user interfaces and flawless functioning by taking use of Python's versatility.",
      icon: s2,
    },
    {
      title: "Enterprise Software Solutions",
      description:
        "With Python build the customised enterprise software solutions that boost efficiency, simplify processes, and achieve company goals.",
      icon: s3,
    },
    {
      title: "Python CMS Development",
      description:
        "Using Python, you can develop dynamic and feature-rich content management systems (CMS) that enable them to efficiently handle and publish content.",
      icon: s4,
    },
    {
      title: "Python Data Analysis and Visualization",
      description:
        "Make knowledgeable choices with Python's robust library, which includes Pandas and Matplotlib, which allow for persuasive visualisation and smart data analysis.",
      icon: s5,
    },
    {
      title: "AI/ML Solutions",
      description:
        "Create AI/ML-powered apps and algorithms using Python, employing powerful libraries such as scikit-learn and TensorFlow for predictive analytics and machine learning models.",
      icon: s6,
    },
    {
      title: "Application Development",
      description:
        "With Python's rich ecosystem of frameworks and tools, create scalable and effective applications that function across many domains while maintaining optimal performance and scalability.",
      icon: s7,
    },
    {
      title: "Python Consulting Services",
      description:
        "Unlock the potential of your business potential with Editsh’s Python consulting services. With Python, our professionals help you improve operations and reach your goals.",
      icon: s8,
    },
    {
      title: "Python Desktop GUI Development",
      description:
        "Use our Python desktop GUI development to improve user experience. We create simple, powerful desktop apps that boost productivity and user experience.",
      icon: s9,
    },
  ];
  const softwareDevelopmentDetails = [
    {
      title: "6+ Years in Software Development",
      description:
        "Expert software development solutions with 6+ years of industry experience.",
    },
    {
      title: "150+ Developers on Board",
      description:
        "Over 150 skilled Python developers ready to handle complex projects.",
    },
    {
      title: "Over 2000 Projects in Portfolio",
      description: "Extensive portfolio with over 2000 successful projects.",
    },
    {
      title: "Iterative Software Development Cycles",
      description:
        "Efficient software solutions using iterative cycles and scrum frameworks and automated testing framework.",
    },
    {
      title: "3 Years of Developing Complex Cloud Applications",
      description: "Specialisation in scalable, secure cloud applications.",
    },
    {
      title: "Certified Scrum Masters In-House",
      description:
        "Certified Scrum Masters for effective and timely project management.",
    },
  ];
  const contentArray = [
    {
      title: "Experience Python programmers",
      description:
        "Our Python developers are experts in Python language and have in-depth understanding to deliver customised solutions to meet your requirements, ensuring the success of your project.",
    },
    {
      title: "Client Satisfaction",
      description:
        "Get Python apps that are secure, reliable, and robust by partnering with Editsh. We follow quality standards throughout development stages ensuring smooth operation and user satisfaction.",
    },
    {
      title: "Agile Methodology",
      description:
        "For managing the project and adapting to project requirements, we use agile methodologies that also ensure timely delivery and flexibility throughout the development process.",
    },
    {
      title: "Cost efficient support",
      description:
        "With flexible engagement options and affordable pricing models, we guarantee that your Python development expenditure will give you an excellent return along with quality.",
    },
    {
      title: "Long term partnership",
      description:
        "To ensure long-term success and mutual progress, we emphasise on developing enduring relationships with our clients by providing continuous support and assistance.",
    },
  ];
  return (
    <>
      <Pagetitle title="Phython development" />

      <Box
        sx={{
          py: {
            xs: 2,
            sm: 2,
            md: 4,
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
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Typography
                sx={{
                  fontSize: "20px",
                  color: theme.palette.secondary.main,
                  fontWeight: "600",
                }}
              >
                Python Development Service
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: 25,
                    lg: 40,
                  },
                  fontWeight: 600,
                  my: 2,
                }}
              >
                Python Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 2,
                  lineHeight: "24px",
                }}
              >
                Editsh, is the most-trusted Python development agency. We have a
                team of highly professional Python developers who specialise in
                various Python development services and have significant
                expertise with frameworks such as Flask, Django and FastAPI. Our
                developers provide cutting-edge AI/ML solutions powered by
                insightful data and strong backend solutions for web-based
                applications. Find the perfect Python developer in just a few
                steps!
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
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img
                src="https://i.postimg.cc/8zqJNhJj/What-is-Python-Why-Does-it-Matter-in-Software-Development-removebg-preview.png"
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

      <Box
        sx={{
          py: {
            sm: 4,
            lg: 8,
          },
        }}
      >
        <Container>
          <Grid container spacing={3}>
            <Grid
              item
              xs={12}
              lg={7}
              order={{ xs: 2, lg: 1 }}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <img
                src="https://i.postimg.cc/w38pvcJj/9656459687-removebg-preview.png"
                alt="ios_image"
                style={{
                  height: "100%",
                }}
              />
            </Grid>
            <Grid
              item
              xs={12}
              lg={5}
              order={{ xs: 1, lg: 2 }}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <Box sx={{ display: "flex", justifyContent: "flex-start" }}>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.black,
                    fontSize: "22px",
                    fontWeight: "600",
                  }}
                >
                  Python Application Development Company
                  <Typography
                    component="span"
                    sx={{
                      color: theme.palette.secondary.main,
                      fontSize: "22px",
                      fontWeight: "600",
                      ml: 1,
                    }}
                  >
                    for Innovative App Solution
                  </Typography>
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Editsh is a top-notch Python development company that serves
                clients worldwide. With 6+ years of experience in the
                development of applications with exceptional performance and
                minimal latency, we have a team of expert Python developers. We
                offer Python developers who work for you as per your project
                needs: full-time, part-time, or hourly. Our Editsh team works
                dedicatedly to deliver the most exceptional Python development
                services in the industry.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Proficient in the latest Python version (3.11.2) and frameworks
                like Flask, Django, and Web2py, we are the leading Python
                development agency. Known for our 100% client satisfaction rate
                and a 95% project success rate, our highly professional staff is
                committed to providing high-quality solutions tailored to your
                needs. We've successfully served 500+ companies across various
                sectors and work with advanced tech concepts like ML, AI, AR/VR,
                IoT and Blockchain. Experience the finest in Python software
                development with Editsh, where excellence meets innovation.
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
          <Titleanimation title="Python Application Development Services" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh, a premier Python development company, excels in delivering
            bespoke Python development services with precision and expertise.
            Our team of dedicated Python developers crafts user-friendly
            applications with modern interfaces, specialising in AI & ML
            development and Python-based IoT app solutions tailored to meet your
            business goals and objectives.
          </Typography>
          <Box sx={{
            px:2
          }}>
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
            lg: 8,
          },
        }}
      >
        <Container>
          <Titleanimation title="Hire Python Developer base on your need" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Get Flexible options ensuring tailored, high-quality solutions for
            your unique needs.
          </Typography>
          <ProjectPricing />
        </Container>
      </Box>

      <Box
        sx={{
          height: "70vh",
          overflow: "hidden",
          display: "flex",
          flexDirection: "column",
          py: {
            xs: 2,
            sm: 2,
            md: 4,
          },
        }}
      >
        <Container>
          <Box
            sx={{
              height: "70vh",
              overflow: "hidden",
              display: "flex",
            }}
          >
            <Grid container spacing={3} sx={{ flex: 1 }}>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                data-aos="fade-right"
                data-aos-duration="3000"
              >
                <Box>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    <Typography
                      component="span"
                      sx={{
                        color: theme.palette.secondary.main,
                        mr: 2,
                        fontWeight: "600",
                        fontSize: "20px",
                      }}
                    >
                      Why choose
                    </Typography>
                    Flutter for
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    Tagline for Python?
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      my: 2,
                    }}
                  >
                    Editsh is your top Python development agency for web
                    services, chosen for our unwavering commitment to excellence
                    and client satisfaction. We deliver exceptional solutions
                    that exceed expectations. Here's what makes us different:
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={6}
                xl={6}
                sx={{
                  height: "100vh",
                  overflowY: "auto",
                  scrollbarWidth: "none",
                  pr: 2,
                }}
                data-aos="fade-left"
                data-aos-duration="3000"
              >
                {softwareDevelopmentDetails.map((content, index) => (
                  <Box
                    key={index}
                    sx={{
                      boxShadow: 1,
                      p: 2,
                      borderRadius: 2,
                      mb: 2,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "18px",
                        mb: 2,
                        fontWeight: "600",
                        color: theme.palette.black,
                      }}
                    >
                      {content.title}
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "14px",
                        color: theme.palette.secondary.main,
                      }}
                    >
                      {content.description}
                    </Typography>
                  </Box>
                ))}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          py: {
            xs: 4,
            sm: 4,
            md: 8,
          },
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
            {contentArray.map((service, index) => (
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
            lg: 6,
          },
        }}
      >
        <Container>
          <Titleanimation
            title={`What Makes Editsh Trusted Leader in Python Development Services Provider?`}
          />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh delivering innovative, scalable Python applications tailored
            to your business needs. Our top-notch solutions and unmatched Python
            expertise make us the trusted choice for cutting-edge Python
            development. Here are some of the reasons why choosing to build
            Python applications is the best option:
          </Typography>
          <PhythonPanel />
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
          <Titleanimation title="What Makes Editsh Trusted Leader in Python Development Services Provider?" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh delivering innovative, scalable Python applications tailored
            to your business needs. Our top-notch solutions and unmatched Python
            expertise make us the trusted choice for cutting-edge Python
            development. Here are some of the reasons why choosing to build
            Python applications is the best option:
          </Typography>
          <TrutedProject />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default PhythonDevelopment;
