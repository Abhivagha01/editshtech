import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";
import footerlogo from "../assets/footer/logo.png";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import { Link } from "react-router-dom";
import ScrollTotopbtn from "./ScrollTotopbtn";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.facebook.com/profile.php?id=61555676966897",
      Icon: FacebookOutlinedIcon,
    },
    {
      href: "https://twitter.com/JBSTechnology26",
      Icon: TwitterIcon,
    },
    {
      href: "https://www.instagram.com/jbs_technology/?hl=en",
      Icon: InstagramIcon,
    },
    {
      href: "https://www.linkedin.com/company/jbs-coder-infotech/",
      Icon: LinkedInIcon,
    },
    {
      href: "https://wa.me/1234567890",
      Icon: WhatsAppIcon,
    },
  ];

  const data = {
    Services: [
      {
        text: "Home",
        to: "/",
        icon: <NavigateNextIcon />,
      },
      { text: "Career", to: "/career", icon: <NavigateNextIcon /> },
      { text: "Blogs", to: "/blogs", icon: <NavigateNextIcon /> },
      { text: "Terms", to: "/term", icon: <NavigateNextIcon /> },
      { text: "Policy", to: "/policy", icon: <NavigateNextIcon /> },
    ],
  };

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.black,
          py: 2,
        }}
        px={{ xs: "1rem", sm: "1rem", md: "2rem", xl: "12rem" }}
      >
        <Grid
          container
          color={theme.palette.common.white}
          sx={{ padding: "10px" }}
        >
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Box>
              <Link to={"/"}>
                <img
                  src={footerlogo}
                  alt="footer-logo"
                  style={{ width: "75%", height: "80px" }}
                />
              </Link>
              <Typography
                sx={{
                  fontSize: "14px",
                  color: theme.palette.primary.main,
                  fontFamily: theme.typography,
                  pr: 4,
                }}
              >
                Thank you for visiting our Website. If you have not visited our
                blogs, then it's a humble request to visit it once, maybe it
                will be useful for you. You can also check the latest post and
                our blog section.
              </Typography>
            </Box>
          </Grid>
          {Object.keys(data).map((sectionTitle) => (
            <Grid item xs={12} sm={6} md={6} lg={4} xl={4} key={sectionTitle}>
              <Box>
                <Typography
                  sx={{
                    letterSpacing: "0.7px",
                    mb: 2,
                    fontWeight: "600",
                    fontSize: "20px",
                    color: theme.palette.primary.main,
                  }}
                >
                  {sectionTitle}
                </Typography>
                <Box sx={{ my: 1.3 }}>
                  {data[sectionTitle].map((item) => (
                    <Link to={item.to || "#"} title={item.text} key={item.text}>
                      <Box
                        sx={{
                          textDecoration: "none",
                          color: theme.palette.primary.main,
                          fontSize: "13px",
                          letterSpacing: "0.8px",
                          display: "flex",
                          flexDirection: "row",
                          flexWrap: "wrap",
                          gap: "10px",
                          my: 2,
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "translateX(-10px)",
                            color: theme.palette.secondary.main,
                          },
                        }}
                      >
                        <Box sx={{ justifyContent: "space-evenly" }}>
                          {item.icon}
                        </Box>
                        <Box sx={{ fontSize: "14px" }}>{item.text}</Box>
                      </Box>
                    </Link>
                  ))}
                </Box>
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={6} lg={4} xl={4}>
            <Typography
              sx={{
                letterSpacing: "0.7px",
                mb: 2,
                fontWeight: "600",
                fontSize: "20px",
                color: theme.palette.primary.main,
              }}
            >
              Contact Us
            </Typography>
            <Box sx={{ my: 1.3 }}>
              <Box
                sx={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                  fontSize: "16px",
                  letterSpacing: "0.8px",
                  my: "10px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EmailOutlinedIcon
                  sx={{ fontSize: "30px", marginRight: "18px" }}
                />
                <Link
                  to="mailto:edithtech01@gmail.com"
                  style={{
                    color: theme.palette.primary.main,
                    fontFamily: theme.typography,
                    fontSize: "14px",
                  }}
                >
                  edithtech01@gmail.com
                </Link>
              </Box>
              <Box
                sx={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                  fontFamily: theme.typography,
                  fontSize: "16px",
                  letterSpacing: "0.8px",
                  my: "9px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <CallOutlinedIcon
                  sx={{ fontSize: "30px", marginRight: "18px" }}
                />
                <Box sx={{ fontSize: "13px" }}>
                  <Link
                    to="tel:+919601175985"
                    style={{
                      color: "#FFF",
                      fontFamily: theme.typography.fontFamily,
                      fontSize: "14px",
                    }}
                  >
                    Phone: +91 98790 27562
                  </Link>
                </Box>
              </Box>
              <Box
                sx={{
                  textDecoration: "none",
                  color: theme.palette.primary.main,
                  fontSize: "16px",
                  letterSpacing: "0.8px",
                  my: "9px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <ShareLocationIcon
                  sx={{ fontSize: "30px", marginRight: "18px" }}
                />
                <Box>
                  <Link to="https://maps.app.goo.gl/qV6mdXRGmPpmxGP26">
                    <address
                      style={{
                        color: "#fff",
                        fontSize: "14px",
                        fontFamily: theme.typography,
                      }}
                    >
                      414, 4th Floor, Pavitraa Point, Opp. BBC, Near Savaliya
                      Circle, Surat, Gujarat 395010
                    </address>
                  </Link>
                </Box>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  my: 3,
                  width: "100%",
                }}
              >
                {socialLinks.map((social, index) => (
                  <Box key={index}>
                    <Link href={social.href} target="_blank">
                      <social.Icon
                        sx={{
                          fontSize: "30px",
                          color: theme.palette.primary.main,
                          mx: "2px",
                          mr: 3,
                          transition: "transform 0.3s ease-in-out",
                          "&:hover": {
                            transform: "translateY(-10px)",
                            color: theme.palette.secondary.main,
                          },
                        }}
                      />
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>

      <Box
        sx={{
          borderTop: "1px solid #404040",
          backgroundColor: theme.palette.black,
        }}
      >
        <Box
          sx={{
            color: theme.palette.primary.main,
            textAlign: "center",
            py: 2,
            fontSize: "12px",
          }}
        >
          Copyright © 2024 EDITSH Technology All Rights Reserved
        </Box>
      </Box>
      <ScrollTotopbtn />
    </>
  );
};

export default Footer;
