import React from "react";
import Pagetitle from "../../../../global/Pagetitle";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import { Titleanimation } from "../../../../global/Titleanimation";
import Ser1 from "../../../../assets/Technoogy/front/vue js/services/Consultation.png";
import Ser2 from "../../../../assets/Technoogy/front/vue js/services/Storefrontdevelopment.png";
import Ser3 from "../../../../assets/Technoogy/front/vue js/services/componentdevelopment.png";
import Ser4 from "../../../../assets/Technoogy/front/vue js/services/Migration.png";
import Ser5 from "../../../../assets/Technoogy/front/vue js/services/Data-Analysis.png";
import Ser6 from "../../../../assets/Technoogy/front/vue js/services/Daashbords.png";
import Ser7 from "../../../../assets/Technoogy/front/vue js/services/Interactive.png";
import Ser8 from "../../../../assets/Technoogy/front/vue js/services/customwebdevelopment.png";
import Ser9 from "../../../../assets/Technoogy/front/vue js/services/Migration.png";
import ProjectPricing from "../../../../global/ProjectPricing";
import VuuejsPanel from "./VuuejsPanel";
import TrutedProject from "../../../../global/TrutedProject";
import RequestQuote from "../../../../global/RequestQuote";
import ProjectIndustry from "../../../../global/ProjectIndustry";

function VueJsdevelopment() {
  const theme = useTheme();
  const services = [
    {
      icon: Ser1,
      title: "Vue.js Consultation",
      description:
        "Our expert team provides personalized Vue.js consultation, analyzing your project requirements and business objectives. Get the tailored strategy for seamless integration and optimal performance of the application.",
    },
    {
      icon: Ser2,
      title: "Vue.js Storefront Development",
      description:
        "Improve user engagement and increase sales. We, at Editsh, specialize in crafting visually captivating e-commerce storefronts using the latest Vue.js tools and technologies.",
    },
    {
      icon: Ser3,
      title: "Vue.js Component Development",
      description:
        "Editsh focuses on efficiency and scalability. Our Vue.js component development services ensure the creation of reusable and modular components, resulting in faster development cycles and easier maintenance of the applications.",
    },
    {
      icon: Ser4,
      title: "Vue.js Migration",
      description:
        "With our Vue.js migration services transitioning from outdated frameworks to Vue.js is effortless. By leveraging best practices and advanced techniques to modernize your application infrastructure with minimal disruptions and downtime.",
    },
    {
      icon: Ser5,
      title: "Data-Analysis Tools",
      description:
        "Empower your decisions making with Vue.js-powered analysis tools. With the unparalleled power of Vue.js, we develop robust data analysis tools that enable you to unlock valuable insights from your datasets, empowering data-driven decision-making and driving business growth.",
    },
    {
      icon: Ser6,
      title: "Interactive Dashboards",
      description:
        "Editsh specializes in creating the most dynamic Vue.js dashboards that provide real-time data visualization and user interaction, empowering your team to monitor key metrics, track performance, and make informed decisions with ease.",
    },
    {
      icon: Ser7,
      title: "Social and Interactive Apps",
      description:
        "Engage and collaborate with interactive applications. From community forums to interactive gaming platforms, our Vue.js development expertise enables us to create engaging social and interactive applications that foster user engagement, collaboration, and user-generated content.",
    },
    {
      icon: Ser8,
      title: "Custom Web App Development",
      description:
        "Our custom web app development solutions leverage Vue.js to address your unique business requirements, delivering tailor-made applications that are highly scalable, secure, and user-friendly, ensuring maximum ROI and customer satisfaction.",
    },
    {
      icon: Ser9,
      title: "Vue.js App Support & Maintenance",
      description:
        "With Tagline's dedicated Vue.js support and maintenance services, we ensure the ongoing health and performance of your applications, proactively addressing issues, implementing updates, and optimizing performance to keep your Vue.js apps running smoothly.",
    },
  ];
  const features = [
    {
      title: "Low Development and Operational Cost",
      description:
        "We have a team of experienced developers that uses different types of functionalities of the Vue.js framework to reduce the operational and development cost to deliver the best solutions for various types of businesses.",
    },
    {
      title: "Flexible to Work According to Your Time-zone",
      description:
        "Connect with our Vue developers who are flexible to work according to your time zone so that you can have a smarter web application to scale your business.",
    },
    {
      title: "Access to Experienced Developers",
      description:
        "Get in touch with our Vue.js development company to access our most experienced developers as they have all the necessary skills to work on your desired project.",
    },
    {
      title: "Reduced Development Times",
      description:
        "We follow different types of models to reduce the development time so that clients can have the best Vue.js web applications before the deadline.",
    },
    {
      title: "Assured Quality Services",
      description:
        "Leverage our professional Vue development services to get post-deployment facilities for your web application. Our programmers provide high-quality services to deliver a fully-tested and bug-free web app.",
    },
  ];

  return (
    <>
      <Pagetitle title="Vue Js Development" />
      {/* About Vue js Development */}
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
                  fontSize: "16px",
                  color: theme.palette.secondary.main,
                  fontWeight: "600",
                }}
              >
                Vuejs Development Service
              </Typography>
              <Typography
                sx={{
                  fontSize: {
                    xs: 25,
                    lg: 35,
                  },
                  fontWeight: 600,
                  my: 1,
                }}
              >
                Vuejs Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 2,
                  lineHeight: "24px",
                }}
              >
                At Editsh, we pride ourselves on being a top-tier Vue.js
                development company, dedicated to crafting exceptional web
                applications with unparalleled performance. Our experienced team
                harnesses the power of Vue.js, a cutting-edge front-end
                framework, to deliver cost-effective, lightweight, and highly
                efficient solutions tailored to meet your business needs. Vue.js
                is renowned for its versatility and ease of integration, making
                it the perfect choice for dynamic and scalable applications. Our
                skilled developers leverage Vue.js to build applications that
                not only meet but exceed industry standards. Whether you need a
                sophisticated single-page application, a seamless user
                interface, or a robust web application, our team is equipped to
                handle it all.
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
                src="https://i.postimg.cc/wMzNyFKp/vue-banner.png"
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
              <Box>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.black,
                    fontSize: "28px",
                    fontWeight: "600",
                  }}
                >
                  Why Choose Vue.js
                </Typography>
              </Box>

              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                We are one of the finest Vue.js Web Development Company that has
                been building next-generation solutions. At Editsh, we have a
                team of experts that uses the Vuejs framework to create various
                powerful tools while building different types of interactive web
                applications for businesses.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Our Vue.js developers use their experience in Two-way data
                binding and virtual DOM to deliver interactive user interfaces
                and single-page applications. Get in touch with our Vue js
                experts to create E-commerce stores and web applications for the
                industries like education, health, finance, and many more. We
                implement this progressive Vue.js framework to deliver
                easy-to-scale web products.
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
          <Titleanimation title="Our Vuejs development services" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Revolutionize your online presence with Editsh Vue.js development
            services. Create top-tier feature-filled applications customized to
            your business needs by implementing the power of Vue.js functions
            and robust frameworks. Hire Vue.js Developers to unlock the full
            potential of your digital journey with us.
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
          <Titleanimation
            title="Hire VueJs Developers As Per Your Needs
"
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
            Simple & Transparent Pricing | Fully Signed NDA | Code Security |
            Easy Exit Policy
          </Typography>
          <ProjectPricing />
        </Container>
      </Box>
      <Box
        sx={{
          xs: 4,
          sm: 4,
          md: 8,
        }}
      >
        <Titleanimation title={`Benefits of Vue.js Development Services`} />
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
            We are a leading Vue.js development that you should choose as we use
            the latest technologies to deliver highly scalable and interactive
            web applications. Get in touch with us to leverage the benefits of
            our budget-friendly vuejs development services.
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
            {features.map((service, index) => (
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
          <Titleanimation title={`Technologies That We Work Wit`} />
          <VuuejsPanel />
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
          <Titleanimation title="What Makes Editsh Most-Trusted VueJS Development Service Provider?" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            As a reputable VueJs development company, Editsh is famous to
            satisfy the latest business requirements and providing the best
            VueJs applications. Here are some of the reasons why choosing to
            build VueJs applications is the best option:
          </Typography>
          <TrutedProject />
        </Container>
      </Box>
      <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default VueJsdevelopment;
