import React from "react";
import Pagetitle from "../../../../global/Pagetitle";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import s1 from "../../../../assets/Technoogy/Backend/Nodejs/services/s1.png";
import s2 from "../../../../assets/Technoogy/Backend/Nodejs/services/s2.png";
import s3 from "../../../../assets/Technoogy/Backend/Nodejs/services/s3.png";
import s4 from "../../../../assets/Technoogy/Backend/Nodejs/services/s4.png";
import s5 from "../../../../assets/Technoogy/Backend/Nodejs/services/s5.png";
import s6 from "../../../../assets/Technoogy/Backend/Nodejs/services/s6.png";
import s7 from "../../../../assets/Technoogy/Backend/Nodejs/services/s7.png";
import s8 from "../../../../assets/Technoogy/Backend/Nodejs/services/s8.png";
import s9 from "../../../../assets/Technoogy/Backend/Nodejs/services/s9.png";
import ProjectPricing from "../../../../global/ProjectPricing";
import { Titleanimation } from "../../../../global/Titleanimation";
import NodejsPanel from "./NodejsPanel";
import TrutedProject from "../../../../global/TrutedProject";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RequestQuote from "../../../../global/RequestQuote";

function NodejsDevelopment() {
  const theme = useTheme();

  const services = [
    {
      icon: s1,
      title: "Node.js Web App Development",
      description:
        "At Editsh, we use Express.js, MongoDB, and tools like npm and Yarn to develop scalable web solutions using the Node.js runtime environment, ensuring optimal performance and flexibility.",
    },
    {
      icon: s2,

      title: "Node.js Product Development",
      description:
        "Using Agile methodologies, RESTful APIs, and tools like Mocha and Chai, our experts create high-quality, customisable applications that match client's business goals.",
    },
    {
      icon: s3,
      title: "Node.js CMS Development",
      description:
        "Our team at Editsh uses different technologies, such as Apollo Server, GraphQL and Keystone.js, to guarantee that your app's content management system and customisation are done seamlessly.",
    },
    {
      icon: s4,

      title: "Google V8 Engine Integration",
      description:
        "We specialize in developing Node.js apps with the powerful Google V8 engine, together with profiling tools such as Chrome DevTools, leading to a high performance, efficiency, and scalable solution.",
    },
    {
      icon: s5,

      title: "Node.js IoT App Development",
      description:
        "Build secure and scalable Internet of Things applications with Editsh. Our skilled experts using Socket.io, MQTT, Node-RED, and tools like Johnny-Five, boost connectivity and real-time data processing of your app.",
    },
    {
      icon: s6,

      title: "Node.js Microservices Architecture",
      description:
        "We use Docker, Kubernetes, RabbitMQ, and monitoring tools like Prometheus to create resilient microservices architectures that ensure flexibility and scalability for your Node.JavaScript apps.",
    },
    {
      icon: s7,

      title: "Node.js Maintenance & Support",
      description:
        "Editsh guarantees continuous optimal performance and reliability by offering proactive maintenance and 24/7 support using tools such as Jenkins, Winston, PM2 and New Relic.",
    },
    {
      icon: s8,

      title: "Node.js Consulting Services",
      description:
        "Our team provides professional Node.js consulting services to maximize performance tuning, optimize the architecture, and adoption of best practices by utilizing frameworks and tools customized to your project's needs.",
    },
    {
      icon: s9,
      title: "Node.js UI/UX Development",
      description:
        "We specialise in the design and development of user-friendly user interfaces using advanced JavaScript frameworks such as React.js and Vue.js, as well as tools like Redux and Storybook, to improve user engagement and experiences.",
    },
  ];
  const rightSideContent = [
    {
      title: "Optimised Data Management",
      description:
        "Node.js is ideal for easily handling large amounts of data because of its non-blocking I/O technique, which allows efficient data management. Our Node.js developers utilise MongoDB and Redis to develop reliable, scalable applications with outstanding speed.",
    },
    {
      title: "Flexible and Expandable Solutions",
      description:
        "The Node.js framework allows developers to build scalable, modular apps with the ability to include new features swiftly, giving customers greater flexibility and helping their businesses expand.",
    },
    {
      title: "Comprehensive Front-end and Back-end Development",
      description:
        "With Node.js, you can build your front-and-back-end applications quickly, easily, and with a single codebase that uses JavaScript. With its robust community support, real-time capabilities, and extensive ecosystem, our professionals improve productivity and offer the best Node Js solution.",
    },
    {
      title: "Cost-Effective Development Solutions",
      description:
        "Using Node.js improves development processes, reduces time-to-market, and lowers operating expenses, Editsh’s developers can now build high-quality web solutions using Node.js without compromising product performance or scalability.",
    },
    {
      title: "Enhanced Performance",
      description:
        "Node.js's non-blocking, event-driven architecture guarantees efficient handling of simultaneous requests and quick response times. This supports developers to create strong applications, leading to excellently performing applications of your requirement.",
    },
    {
      title: "Scalable Infrastructure",
      description:
        "With the help of Docker and Kubernetes, Node.js enables applications, guaranteeing smooth scaling to effectively handle increasing workloads and traffic for long-term performance and growth.",
    },
  ];
  const NodeBenefits = [
    {
      title: "Low Development and Operational Cost",
      description:
        "Our experienced developers teams employ a full set of Node.js functionalities, such as Express.js, npm, and MongoDB, to minimize development and operational expenses, thereby offering the most effective Node.js solutions for different kinds of businesses.",
      icon: "orange-round",
    },
    {
      title: "Flexible to Work According to Your Time Zone",
      description:
        "Hire Node.js developers from Editsh; we offer services that are adaptive to your required time zone, promising that you have a scalable, smart web application that will help your company's growth.",
      icon: "orange-round",
    },
    {
      title: "Access to Experienced Developers",
      description:
        "Editsh has a team of highly qualified Node.js developers who are skilled with the latest technologies and tools, including Docker, Redis, and RabbitMQ. This guarantees that your project will be developed to a high standard.",
      icon: "orange-round",
    },
    {
      title: "Reduced Development Times",
      description:
        "Using latest Node.JS models and tools like Jenkins and PM2, our developers expertly shorten the development timelines and provide clients with top-notch Node.js web applications before schedule.",
      icon: "orange-round",
    },
    {
      title: "Assured Quality Services",
      description:
        "Editsh offers expert Node.js development services if you need help with your web project after it's been deployed. Our developers create web apps that meet all the necessary industry standards using different testing frameworks such as Chai and Mocha.",
      icon: "orange-round",
    },
  ];

  return (
    <>
      <Pagetitle title="Node Js development" />

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
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <Typography
                sx={{
                  fontSize: "16px",
                  color: theme.palette.secondary.main,
                  fontWeight: "600",
                }}
              >
                Nodejs Development Service
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: 30,
                    lg: 40,
                  },
                  fontWeight: 600,
                  my: 2,
                }}
              >
                Node JS Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 2,
                  lineHeight: "24px",
                }}
              >
                Editsh connects you to top Node.js developers for professional
                web application development. As the best Node.js development
                company, we have dedicated developers for your business
                full-time or by the hour. Our flexible, feature-rich Node.js
                development services help you make web apps that are light,
                fast, and scalable. Learn how to manage large input/output tasks
                with ease and be a part of a community that uses Node.js for
                creating robust websites. Editsh can help you with great Node.js
                project creation, which will help your online presence.
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
                src="https://i.postimg.cc/50RK4X9j/NodeJS.png"
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
            xs: 4,
            sm: 4,
            lg: 8,
          },
        }}
      >
        <Container>
          <Grid
            container
            spacing={3}
            alignItems="center"
            sx={{
              flexDirection: {
                xs: "row-reverse",
                sm: "row-reverse",
                md: "row",
              },
            }}
          >
            <Grid
              item
              xs={12}
              lg={6}
              order={{
                xs: 2,
                sm: 2,
                md: 1,
              }}
              data-aos="fade-left"
              data-aos-duration="3000"
            >
              <img
                src="https://i.postimg.cc/mDPKKt0Z/parts-of-nodejs.avif"
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
              order={{
                xs: 1,
                sm: 1,
                md: 2,
              }}
              data-aos="fade-right"
              data-aos-duration="3000"
            >
              <Box
                sx={{
                  pb: 2,
                }}
              >
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 600,
                    fontSize: "24px",
                    pr: 1,
                  }}
                >
                  Leading
                </Typography>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.text.primary,
                    fontWeight: 600,
                    fontSize: "24px",
                    pr: 1,
                  }}
                >
                  Node.js Development Company
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
                  With Agile Technology
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
                Editsh, your go-to partner for scalable, feature-rich
                development, can help you develop your app or website. We
                specialize in Node.js project development that is intuitive,
                with user-friendly frontends and quick backends.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                  wordSpacing: "2px",
                }}
              >
                For over 6 years, we have helped businesses and startups better
                their web app backends with Express.js, Docker, MongoDB,
                Kubernetes, AWS, and RESTful APIs. We provide web application
                development services using Node.js to develop applications.
                Editsh offers many exceptional Node.js development services that
                will help transform your digital solutions.
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
          },
        }}
      >
        <Container>
          <Titleanimation title="Discover Our Cutting-Edge Node.js Development Service" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Get high quality node.js development services by hiring best Node.js
            developers from Editsh, a renowned node.js development service
            provider. We are a node.js web development company that specializes
            in creating content management systems, CRMs, fast API generation
            tools, and other similar projects.
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
            Simple & Transparent Pricing | Fully Signed NDA | Code Security |
            Easy Exit Policy
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
              },
            }}
          >
            <ProjectPricing />
          </Grid>
        </Container>
      </Box>

      <Box
        sx={{
          height: "100vh",
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
              height: "100vh",
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
                data-aos="zoom-in"
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
                    Node.js for Web Development?
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      my: 2,
                    }}
                  >
                    An open-source server-side technology, Node.js is developed
                    based on Google's V8 engine. Node.js is the preferred choice
                    of developers for the development of web-based applications
                    due to its real-time capabilities and rapid development
                    speed. Its event-driven, asynchronous I/O method eliminates
                    the need for multiple threading, connects both front-end and
                    back-end and offers scalable, cross-platform ways to speed
                    up development.
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
              >
                {rightSideContent.map((content, index) => (
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
                        color: theme.palette.text.primary,
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
            md: 6,
          },
        }}
      >
        <Titleanimation
          title={`Benefits of Node.js Development Service That Fosters Cost Savings`}
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
            Editsh offers full-stack Node.js development services. We develop an
            affordable, scalable, and high-quality web application using
            innovative technology and tools. Our professional developers ensure
            quick project delivery and excellent assistance customized for your
            business needs.
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
            {NodeBenefits.map((service, index) => (
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
            lg: 8,
          },
        }}
      >
        <Container>
          <Titleanimation title={`Technologies That We Work With`} />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            At Editsh, our professional developers use flexible architecture and
            programming techniques to offer Node.js solutions that are unique.
            Some of the most important technologies include:
          </Typography>
          <NodejsPanel />
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
          <Titleanimation title="Why Editsh is Your Trusted Node.js Development Service Provider?" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh offers full-stack Node.js development services to all
            customers, using the latest Node.Js tools and technologies we aim to
            create the safest and reliable web applications that meets all the
            standards.Here are some reasons why clients choose us:
          </Typography>
          <TrutedProject />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default NodejsDevelopment;
