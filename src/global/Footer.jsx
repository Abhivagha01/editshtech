import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import footerlogo from "../assets//footer/footer-logo.png";
import SquareIcon from "@mui/icons-material/Square";
import { Link } from "react-router-dom";
import ScrollTotopbtn from "./ScrollTotopbtn";

const Footer = () => {
  const socialLinks = [
    {
      href: "https://www.instagram.com/editsh_technology/",
      Icon: InstagramIcon,
    },
    {
      href: "https://www.linkedin.com/company/editsh/posts/?feedView=all",
      Icon: LinkedInIcon,
    },
    {
      href: "https://wa.me/9601175985",
      Icon: WhatsAppIcon,
    },
  ];
  const data = [
    {
      title: "Useful Links",
      links: [
        {
          text: "Home",
          to: "/",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
        {
          text: "About",
          to: "/about",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
        {
          text: "Blogs",
          to: "/blogs",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
        {
          text: "Technology",
          to: "/technology",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
        {
          text: "Contact Us",
          to: "/contact-us",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
        {
          text: "Terms",
          to: "/term",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
      ],
    },
    {
      title: "Our Services",
      links: [
        {
          text: "iOS App Development",
          to: "/mobile/iosAppDevelopment",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
        {
          text: "Node.js Development",
          to: "/backend/nodejsDevelopment",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
        {
          text: "React.js Development",
          to: "/frontend/reactJsDevelopment",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
        {
          text: "Policy",
          to: "/policy",
          icon: <SquareIcon sx={{ fontSize: "8px" }} />,
        },
      ],
    },
  ];

  const theme = useTheme();

  return (
    <>
      <Box
        sx={{
          backgroundImage: `url(${"https://i.postimg.cc/0Q7PJQT6/cz-Nmcy1wcml2-YXRl-L3-Jhd3-Bpe-GVs-X2lt-YWdlcy93-ZWJza-XRl-X2-Nvbn-Rlbn-Qvb-HIvcm0y-NTUtc2-Fza-S0y-OS5qc-Gc.webp"})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          zIndex: 1,
          position: "relative",
        }}
        pt={{ xs: 2, sm: 3, md: 4, xl:4}}
      >
        <Container>
          <Grid container color={theme.palette.common.white} sx={{ mt: 2 }}>
            <Grid item xs={12} sm={6} md={6} lg={3} xl={4}>
              <Box>
                <Link to={"/"}>
                  <img
                    src={footerlogo}
                    alt="footer-logo"
                    style={{
                      width: "100%",
                      maxWidth: "60%",
                      height: "45px",
                    }}
                  />
                </Link>
                <Typography
                  sx={{
                    fontSize: "14px",
                    color: theme.palette.black,
                    fontFamily: theme.typography,
                    pr: 4,
                  }}
                >
                  Resources are the biggest strength of any organization, and it
                  requires lots of patience and effort to manage them properly.
                </Typography>
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
                      <Link to={social.href} target="_blank">
                        <Box
                          sx={{
                            backgroundColor: theme.palette.secondary.main,
                            width: "40px",
                            height: "40px",
                            margin: "auto",
                            lineHeight: "50px",
                            mr: 2,
                            textAlign: "center",
                            borderRadius: "10px",
                            "&:hover": {
                              transform: "translateY(-10px)",
                              color: theme.palette.secondary.main,
                              transition: "transform 0.3s ease-in-out",
                            },
                          }}
                        >
                          <social.Icon
                            sx={{
                              fontSize: "20px",
                              color: theme.palette.black,
                              textAlign: "center",
                            }}
                          />
                        </Box>
                      </Link>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Grid>
            {data.map((section) => (
              <Grid
                item
                xs={12}
                sm={6}
                md={6}
                lg={3}
                xl={2}
                key={section.title}
              >
                <Box>
                  <Typography
                    sx={{
                      letterSpacing: "0.7px",
                      mb: 2,
                      fontWeight: "700",
                      fontSize: "18px",
                      color: theme.palette.black,
                    }}
                  >
                    {section.title}
                  </Typography>
                  <Box sx={{ my: 1.3 }}>
                    {section.links.map((item) => (
                      <Link
                        to={item.to || "#"}
                        title={item.text}
                        key={item.text}
                        tar
                      >
                        <Box
                          sx={{
                            textDecoration: "none",
                            color: theme.palette.black,
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
                          <Box
                            sx={{
                              justifyContent: "space-evenly",
                              fontSize: "14px",
                            }}
                          >
                            {item.icon}
                          </Box>
                          <Box
                            sx={{
                              fontSize: "14px",
                              fontFamily: theme.typography.fontFamily,
                            }}
                          >
                            {item.text}
                          </Box>
                        </Box>
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Grid>
            ))}
            <Grid item xs={12} sm={6} md={6} lg={3} xl={4}>
              <Typography
                sx={{
                  letterSpacing: "0.7px",
                  mb: 2,
                  fontWeight: "700",
                  fontSize: "20px",
                  color: theme.palette.black,
                }}
              >
                Contact Us
              </Typography>
              <Box sx={{ my: 1.3 }}>
                <Box
                  sx={{
                    textDecoration: "none",
                    ba: theme.palette.black,
                    fontSize: "16px",
                    letterSpacing: "0.8px",
                    my: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      color: theme.palette.black,
                      width: "30px",
                      height: "30px",
                      lineHeight: "40px",
                      textAlign: "center",
                      borderRadius: "10px",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateX(-10px)",
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <EmailOutlinedIcon sx={{ fontSize: "20px" }} />
                  </Box>

                  <Link
                    to="mailto:editshtech01@gmail.com"
                    style={{
                      color: theme.palette.black,
                      fontFamily: theme.typography,
                      fontSize: "14px",
                      marginLeft: "18px",
                    }}
                  >
                    editshtech@gmail.com
                  </Link>
                </Box>
                <Box
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.black,
                    fontFamily: theme.typography,
                    fontSize: "16px",
                    letterSpacing: "0.8px",
                    my: "9px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      width: "30px",
                      height: "30px",
                      lineHeight: "40px",
                      textAlign: "center",
                      borderRadius: "10px",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateX(-10px)",
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <CallOutlinedIcon sx={{ fontSize: "20px" }} />
                  </Box>

                  <Box sx={{ fontSize: "13px" }}>
                    <Link
                      to="tel:+91 96011 75985"
                      style={{
                        color: theme.palette.black,
                        fontFamily: theme.typography.fontFamily,
                        fontSize: "14px",
                        marginLeft: "18px",
                      }}
                    >
                      +91 96011 75985
                    </Link>
                  </Box>
                </Box>
                <Box
                  sx={{
                    textDecoration: "none",
                    color: theme.palette.black,
                    fontSize: "16px",
                    letterSpacing: "0.8px",
                    my: "9px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <Box
                    sx={{
                      backgroundColor: theme.palette.secondary.main,
                      width: "30px",
                      height: "30px",
                      lineHeight: "40px",
                      textAlign: "center",
                      borderRadius: "10px",
                      transition: "transform 0.3s ease-in-out",
                      "&:hover": {
                        transform: "translateX(-10px)",
                        color: theme.palette.primary.main,
                      },
                    }}
                  >
                    <FmdGoodIcon sx={{ fontSize: "20px" }} />
                  </Box>

                  <Box>
                    <Link to="https://maps.app.goo.gl/qV6mdXRGmPpmxGP26">
                      <address
                        style={{
                          color: theme.palette.black,
                          fontSize: "14px",
                          fontFamily: theme.typography.fontFamily,
                          marginLeft: "18px",
                          wordWrap: "break-word",
                          wordBreak: "break-word",
                          maxWidth: "250px",
                        }}
                      >
                        414, 4th Floor, Pavitraa Point, Opp. BBC, Near Savaliya
                        Circle, Surat, Gujarat 395010
                      </address>
                    </Link>
                  </Box>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <Box
          sx={{
            borderTop: `1px solid ${theme.palette.secondary.main}`,
          }}
        >
          <Box
            sx={{
              color: theme.palette.black,
              textAlign: "center",
              fontSize: "14px",
              fontWeight:'600',
              py: 2,
            }}
          >
            Copyright © 2024 EDITSH All Rights Reserved
            <ScrollTotopbtn />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
