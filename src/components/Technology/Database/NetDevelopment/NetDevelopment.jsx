import React from "react";
import Pagetitle from "../../../../global/Pagetitle";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import s1 from "../../../../assets/Technoogy/Backend/net/services/s1.png";
import s2 from "../../../../assets/Technoogy/Backend/net/services/s2.png";
import s3 from "../../../../assets/Technoogy/Backend/net/services/s3.png";
import s4 from "../../../../assets/Technoogy/Backend/net/services/s4.png";
import s5 from "../../../../assets/Technoogy/Backend/net/services/s5.png";
import s6 from "../../../../assets/Technoogy/Backend/net/services/s6.png";
import s7 from "../../../../assets/Technoogy/Backend/net/services/s7.png";
import s8 from "../../../../assets/Technoogy/Backend/net/services/s8.png";
import s9 from "../../../../assets/Technoogy/Backend/net/services/s9.png";
import { Titleanimation } from "../../../../global/Titleanimation";

import p1 from "../../../../assets/Technoogy/Backend/net/project/p1.png";
import p2 from "../../../../assets/Technoogy/Backend/net/project/p2.png";
import p3 from "../../../../assets/Technoogy/Backend/net/project/p3.png";
import p4 from "../../../../assets/Technoogy/Backend/net/project/p4.png";
import p5 from "../../../../assets/Technoogy/Backend/net/project/p5.png";
import p6 from "../../../../assets/Technoogy/Backend/net/project/p6.png";
import ProjectIndustry from "../../../../global/ProjectIndustry";
import RequestQuote from "../../../../global/RequestQuote";
import NetDevelopPanel from  './NetDevelopPanel'

function NetDevelopment() {
  const theme = useTheme();

  const services = [
    {
      icon: s1,
      title: "Custom .NET Development",
      description:
        "Take your business to new heights with our fully customized ASP.NET application development services. Our developers create secure, scalable, and flexible solutions to ensure the success of your business.",
    },
    {
      icon: s2,
      title: ".NET Consulting",
      description:
        "We are a dot net Development Company that understands the current situation of the market and advises on which type of .NET solution can be perfect for you.",
    },
    {
      icon: s3,
      title: ".NET Software Development",
      description:
        "Editsh is a .NET software development company that utilizes .NET Core, ASP.NET, C#, VB.NET, Xamarin, and many more to create different types of cross-platform software.",
    },
    {
      icon: s4,
      title: ".NET Product Development",
      description:
        "Grow your enterprise-grade software products like ERP, CRM, POS, CMS, and more with the .NET framework. Our programmers provide different types of .NET application development services to make sure that you get high-quality results for your business.",
    },
    {
      icon: s5,
      title: ".NET Upgradation & Migration",
      description:
        "Upgrade your existing solutions to the latest version of .NET for better security and compatibility across different web browsers. Our experts help to migrate your application to the latest version while ensuring your applications are optimized.",
    },
    {
      icon: s6,
      title: ".NET QA and Testing",
      description:
        "We are an experienced .NET development company that provides end-to-end testing services to get high test coverage and give businesses confidence in the reliability and effectiveness of the applications.",
    },
    {
      icon: s7,
      title: ".NET Integration Services",
      description:
        "Expand the capabilities of your .NET solutions by connecting them with different types of third-party applications. We specialize in seamless integration which allows your software to work easily with other tools and services.",
    },
    {
      icon: s8,
      title: ".NET 3rd Party Customization",
      description:
        "Whether you need to improve functionality, work with APIs, or enhance the user interface, our team of programmers can customize third-party plugins into these solutions to satisfy your unique needs.",
    },
    {
      icon: s9,
      title: ".NET Maintenance & Support",
      description:
        "Trust us to maintain and support your .NET applications to ensure their safety and performance so you can focus on your business without worrying about technical challenges.",
    },
  ];

  const rightSideContent = [
    {
      title: "Cross-platform development",
      description:
        "Our experienced development team utilizes the .Net framework to create cross-platform applications that can run easily on different types of platforms.",
    },
    {
      title: "Rich resources and libraries",
      description:
        "Our .Net development team uses different types of tools and libraries to streamline development and deliver efficient and feature-rich solutions.",
    },
    {
      title: "High security and reliability",
      description:
        "We integrate built-in security features and harness the power of the .Net framework to deliver secure and reliable software solutions for your business.",
    },
    {
      title: "Access to skilled developers",
      description:
        "Get our skilled developers who have in-depth knowledge and expertise in .Net development of delivering high-quality solutions as per your business requirements.",
    },
  ];

  const project = [
    {
      icon: p1,
      title: "Analytical, Accurate, and Result-Oriented Approach",
      description:
        "We are a dot net application development company that adopts an analytical, accurate, and result-oriented approach to focus on delivering high-quality solutions and ensuring that our clients achieve their desired outcomes with efficiency and effectiveness.",
    },
    {
      icon: p2,
      title: "Maximum Security and Scalability",
      description:
        "Tagline Infotech is an ASP .NET development company that prioritizes maximum security and scalability. Our programmers ensure that your applications are safe against all threats and can seamlessly handle the growth of your business.",
    },
    {
      icon: p3,
      title: "24×7 Client Assistance",
      description:
        "Our support team is available 24x7 to provide assistance for various .NET development services and address any queries or issues. We provide continuous support and timely resolution for a smooth and successful collaboration.",
    },
    {
      icon: p4,
      title: "Agile Development",
      description:
        "We are an ASP .Net development company that follows an agile development approach. Our developers use iterative processes to deliver adaptable solutions that respond quickly and are easily deployed.",
    },
    {
      icon: p5,
      title: "Scalable ASP NET Solution",
      description:
        "At Tagline Infotech, we ensure to build ASP NET solutions that can handle increasing demands and growth, providing a robust and reliable platform for your business to thrive and succeed.",
    },
    {
      icon: p6,
      title: "Flexible Engagement Models",
      description:
        "We offer flexible engagement models for our .NET development services. Whether you need a team of developers on an hourly or monthly basis, we understand your preferences and requirements before starting the project.",
    },
  ];

  return (
    <>
      <Pagetitle title=".Net  Development" />
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
                  fontSize: {
                    xs: 16,
                    lg: 40,
                  },
                  fontWeight: 600,
                  my: 2,
                }}
              >
                .Net Development Company
              </Typography>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.secondary.main,
                  my: 4,
                  lineHeight: "24px",
                }}
              >
                Editsh is the most reliable ASP .Net development company that
                will utilize the full potential of Microsoft’s .NET framework to
                offer high-quality solutions. Get in touch with our team of
                skilled dot net programmers to get different types of web
                applications, mobile applications, enterprise solutions, and
                customized software for the growth of your business.
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
                      Portfolio
                    </Link>
                  </Button>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <img
                src="https://i.postimg.cc/fbffg145/microsoft-integration-services.jpg"
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
          backgroundColor: theme.palette.primary.main,
        }}
      >
        <Grid container row alignItems="center">
          <Grid item xs={12} lg={6}>
            <img
              src="https://i.postimg.cc/hjRrtxxy/asp-net-web-application-software-development-platform-programming-language-210218966.webp"
              alt="ios_image"
              style={{
                width: "100%",
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
                p: 2,
              }}
            >
              <Box>
                <Typography
                  component="span"
                  sx={{
                    color: theme.palette.secondary.main,
                    fontWeight: 600,
                    fontSize: "24px",
                    pr: 2,
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
                  Make Business Goals a Reality with
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
                  .NET Software Development
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
                We are an established .NET Development Company that creates
                customized solutions to turn your business goals into reality.
                Our team of experienced developers ensures the delivery of
                highly secure and high-performing applications so that you can
                stay ahead of your competition. Request For Free Consultancy
              </Typography>
            </Box>
          </Grid>
        </Grid>
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
          <Titleanimation title="Our .NET Development Services The Highest Standards" />
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              py: 2,
              textAlign: "center",
              margin: "auto",
            }}
          >
            Editsh is a well-known Microsoft .net development company that
            follows the highest standards in the industry according to your
            business needs. Our skilled team of experts follows various security
            protocols to offer different types of .NET development services.
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
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
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
                      Benefits of
                    </Typography>
                    Flutter for
                  </Typography>
                  <Typography
                    sx={{
                      fontWeight: "600",
                      fontSize: "20px",
                    }}
                  >
                    choosing .Net Development
                  </Typography>
                </Box>
                <Box>
                  <Typography
                    sx={{
                      fontSize: "14px",
                      my: 2,
                    }}
                  >
                    You should choose .Net development because it is a robust
                    framework that offers seamless integration with Microsoft
                    technologies for rapid application development, scalability,
                    and enhanced security. Trust us to get high-quality .Net
                    development services along with feature-rich solutions for
                    the growth of your business.
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
            lg: 8,
          },
        }}
      >
        <Container>
          <Titleanimation title={`Our Technologies`} />
          <NetDevelopPanel />
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
          title={`Why Choose Tagline Infotech For Your .NET Development Project?`}
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
            You should choose Tagline Infotech as your offshore .Net development
            company which has a proven track record of providing custom .NET
            development services for different types of businesses. Connect with
            us to get customized services, seamless project delivery, and the
            best possible solution for your business to achieve new heights.
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
            {project.map((service, index) => (
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
                    borderBottom: `1px solid ${theme.palette.secondary.main}`,
                  }}
                >
                  <Box ml={2}>
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
                        borderRadius: 3,
                        mb: 2,
                        borderBottom: `5px solid ${theme.palette.secondary.main}`,
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
      <ProjectIndustry/>
      <RequestQuote />
    </>
  );
}

export default NetDevelopment;
