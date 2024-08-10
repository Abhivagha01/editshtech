import React from "react";
import { Box, Button, Container, Grid, Typography } from "@mui/material";
import Pagetitle from "../../../../global/Pagetitle";
import { useTheme } from "@emotion/react";
import { Link } from "react-router-dom";
import TimelineIcon from "@mui/icons-material/Timeline";
import whychooseus from "../../../../assets/Technoogy/Mobile/iosDevelopment/iosservice/wcu.webp";
import { Titleanimation } from "../../../../global/Titleanimation";
import icon1 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon1.png";
import icon2 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon2.png";
import icon3 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon3.png";
import icon4 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon4.png";
import icon5 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon5.webp";
import icon6 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon6.png";
import icon7 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon7.png";
import icon8 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon8.png";
import icon9 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon9.png";
import icon10 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidServices/icon10.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import tech1 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech1.png";
import tech2 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech2.png";
import tech3 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech3.png";
import tech4 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech4.png";
import tech5 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech5.png";
import tech6 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech6.png";
import tech7 from "../../../../assets/Technoogy/Mobile/androidDevelopment/androidTechnology/tech7.png";
import RequestQuote from "../../../../global/RequestQuote";
import ProjectIndustry from "../../../../global/ProjectIndustry";

function AndroidAppDevelopment() {
  const theme = useTheme();

  const iosItem = [
    { id: 1, label: "BLE App Development" },
    { id: 2, label: "App Migration" },
    { id: 3, label: "UI/UX Design" },
    { id: 4, label: "Maintenance" },
    { id: 5, label: "Consulting" },
  ];
  const appServices = [
    {
      icon: icon1,
      title: "BLE App Development",
      description: `We have unique knowledge and skill in designing, implementing, testing, and deploying Bluetooth Low Energy applications. That's why we are a leading BLE application development company with clients all over the world.`,
    },
    {
      icon: icon2,
      title: "Messaging app",
      description: `Our specialized team of expert developers can create a secure, robust and adaptable mobile messaging app for Android or any other mobile platform. Our messaging apps are end-to-end encrypted for the privacy of your customers.`,
    },
    {
      icon: icon3,
      title: "Social Networking App",
      description: `We create and build high-quality social networking apps that may be fully customized. Using our network of services, you may create and share content with anybody across the globe.`,
    },
    {
      icon: icon4,
      title: "Enterprise App",
      description: `We create and build high-quality social networking apps that may be fully customized. Using our network of services, you may create and share content with anybody across the globe.`,
    },
    {
      icon: icon5,
      title: "On Demand App",
      description: `Our on-demand app development service has produced several great commercial apps and technologies. And our team of mobile developer professionals guarantee that the most acceptable solutions are provided to your company requirements in the shortest amount of time possible.`,
    },
    {
      icon: icon6,
      title: "eCommerce App",
      description: `Editsh has assisted clients in developing, marketing, and promoting their eCommerce applications. Our applications are safe and protected, and the quality of our products meets all the eCommerce industry's requirements.`,
    },
    {
      icon: icon7,
      title: "Healthcare App",
      description: `We create unique medical applications for doctors, hospitals, and other healthcare-related businesses. Our area of expertise is developing high-quality medical apps that help patients as well as medical professionals.`,
    },
    {
      icon: icon8,
      title: "Wearable App Development",
      description: `We specialize in creating wearable apps for smartwatches, wristbands, and other devices. Our developers have expertise in developing wearable apps for Android, iOS, and other operating systems.`,
    },
    {
      icon: icon9,
      title: "NFC Integration",
      description: `Our staff members are up to date on the newest technology and can assist you in developing your following NFC-enabled product or upgrading your present one.`,
    },
    {
      icon: icon10,
      title: "Support, Maintenance & Optimize",
      description: `Editsh is a mobile app development firm that specializes in developing high-quality, cost-effective, and efficient mobile apps for businesses. We provide targeted support, maintenance, and optimized mobile applications that help companies achieve their objectives.`,
    },
  ];
  const IosTechnology = [
    { id: 1, img: tech1, title: "Ionic" },
    { id: 2, img: tech2, title: "Android SDK" },
    { id: 3, img: tech3, title: "Webkit" },
    { id: 4, img: tech4, title: "Java" },
    { id: 5, img: tech5, title: "Kotlin" },
    { id: 6, img: tech6, title: "Javascript" },
    { id: 7, img: tech7, title: "Android Studio" },
  ];
  const Androidsettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          arrows: false,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          arrows: false,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          arrows: false,
          dots: false,
        },
      },
    ],
  };

  return (
    <>
      <Pagetitle title="IOS App Development" />
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
                    lg: 30,
                  },
                  fontWeight: 600,
                  my: 4,
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
                We are a leading iPhone application Development Company that
                develops iOS applications for the next generation. Our
                developers and designers will create appealing designs and build
                creative iOS applications.
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
              <Box>
                <Grid container spacing={2}>
                  {iosItem.map((item) => (
                    <Grid
                      key={item.id}
                      item
                      xs={6}
                      sm={6}
                      md={6}
                      lg={6}
                      sx={{ alignItems: "center", display: "flex" }}
                    >
                      <Typography component="span">
                        <TimelineIcon
                          sx={{
                            color: theme.palette.secondary.main,
                            mr: 2,
                          }}
                        />
                      </Typography>

                      <Typography
                        component="span"
                        sx={{
                          color: theme.palette.black,
                          fontSize: "14px",
                          fontWeight: "500",
                        }}
                      >
                        {item.label}
                      </Typography>
                    </Grid>
                  ))}
                </Grid>
              </Box>
            </Grid>
            <Grid item xs={12} md={6} lg={6}>
              <img
                src="https://i.postimg.cc/cCXP7c2H/ios1.png"
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
            <Grid item xs={12} lg={6}>
              <img
                src={whychooseus}
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
              <Typography
                sx={{
                  color: theme.palette.black,
                  fontSize: "20px",
                  fontWeight: "600",
                  pb: 2,
                }}
              >
                Why Choose Editsh for Android App Development?
              </Typography>
              <Typography
                sx={{
                  width: "35%",
                  height: "2px",
                  backgroundColor: theme.palette.secondary.main,
                }}
              ></Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                You must have a mobile app in the digital age to present your
                company image to worldwide competitors. Communication, Health
                care and fitness, Finance, Traveling map, e-commerce, Fashion
                and entertainment, Hospitality and food services, education, and
                many more business areas are all covered by the Android
                platform.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Editsh is a well-known Android app development company in India
                and the United States. Our Android mobile app developer has
                extensive knowledge and years of experience building completely
                optimized Android apps for your business, including eCommerce
                apps, massaging apps, social media apps, on-demand apps, and
                more.
              </Typography>
              <Typography
                sx={{
                  color: theme.palette.secondary.main,
                  fontSize: "14px",
                  mt: 2,
                }}
              >
                Our Company is located in California and you should hire android
                app developer to get high-quality business applications at
                affordable prices. Editsh is a top-quality android app
                development company in New York and you need to hire android app
                developer in New York to get client-centric solutions for
                startups and enterprises.
              </Typography>
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
        <Titleanimation title={`Our Android Mobile App Development Services`} />

        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              mt: 2,
              textAlign: "center",
            }}
          >
            Editsh is an Android mobile app development firm that provides
            android app development solutions. We provide the best Mobile App
            development services across various industries, including
            E-Commerce/Shopping/Fashion, Entertainment, Education, Finance,
            Healthcare, Food & Beverage, Travel & Tourism, and more.
          </Typography>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              my: 2,
              textAlign: "center",
            }}
          >
            Our services include UI/UX design, development of native Android
            applications, eCommerce app creation, Android wearable app
            development, NFC integration, Support, Maintenance, Optimization,
            and many more.
          </Typography>
          <Grid
            container
            spacing={3}
            row
            sx={{
              mt: 2,
            }}
          >
            {appServices.map((service, index) => (
              <Grid item xs={12} md={6} lg={6} key={index}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    p: 4,
                    boxShadow: 3,
                    borderRadius: 4,
                    height: "100%",
                    "&:hover": {
                      boxShadow:
                        "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                      backgroundColor: "grey.100",
                    },
                  }}
                >
                  <Box>
                    <Box
                      sx={{
                        width: "80px",
                        height: "80px",
                        display: "block",
                      }}
                    >
                      <img
                        src={service.icon}
                        alt={service.title}
                        style={{
                          width: "50%",
                          height: "50%",
                        }}
                      />
                    </Box>
                  </Box>
                  <Box ml={2}>
                    <Typography
                      sx={{
                        fontSize: "18px",
                        fontWeight: "bold",
                        color: theme.palette.secondary.main,
                        mb: 2,
                      }}
                    >
                      {service.title}
                    </Typography>
                    <Typography>{service.description}</Typography>
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
            xs: 6,
            sm: 6,
            lg: 8,
          },
        }}
      >
        <Titleanimation title={`Technologies Our iPhone App Developers Use`} />
        <Container>
          <Typography
            sx={{
              fontSize: "14px",
              color: theme.palette.secondary.main,
              mt: 2,
              textAlign: "center",
            }}
          >
            Our experienced iOS app developers' use modern technologies and
            tools to create user-friendly, durable, and secure apps that can
            provide high-quality results. The technologies are:
          </Typography>
          <Grid
            sx={{
              py: {
                sm: 4,
                lg: 6,
              },
            }}
          >
            <Slider {...Androidsettings}>
              {IosTechnology.map((item) => (
                <div key={item.id}>
                  <Box
                    sx={{
                      boxShadow: 1,
                      padding: 2,
                      textAlign: "center",
                      mx: 2,
                      my: 2,
                    }}
                  >
                    <img
                      src={item.img}
                      alt="Slider_image"
                      style={{
                        width: "60px",
                        height: "60px",
                        margin: "auto",
                      }}
                    />
                    <Typography sx={{ fontSize: "14px", textAlign: "center" }}>
                      {item.title}
                    </Typography>
                  </Box>
                </div>
              ))}
            </Slider>
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
        }}
      >
      </Box>
        <ProjectIndustry />
      <RequestQuote />
    </>
  );
}

export default AndroidAppDevelopment;
