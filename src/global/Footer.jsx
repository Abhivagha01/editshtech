import { Box, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import { useTheme } from "@emotion/react";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import DotIcon from "@mui/icons-material/FiberManualRecord";
import ShareLocationIcon from "@mui/icons-material/ShareLocation";

import { Link } from "react-router-dom";

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
    "Useful Links": [
      { text: "Home", to: "/about" },
      { text: "Career", to: "/ourmanagement" },
      { text: "Rules", to: "/brandambassadors" },
      { text: "Terms", to: "/socialInitiatives" },
      { text: " Privacy policy", to: "/sustainability" },
      { text: "Blogs", to: "/completedproject" },
    ],
  };

  const theme = useTheme();

  return (
    <>
      <Box
        px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
        sx={{
          backgroundColor: theme.palette.black.main,
          py: 20,
          pb: 0,
        }}
      >
        <Grid
          container
          color={theme.palette.common.white}
          sx={{ padding: "10px" }}
        >
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Link to={"/"}></Link>
          </Grid>
          {Object.keys(data).map((sectionTitle) => (
            <Grid item xs={12} sm={6} md={4} lg={2} xl={2} key={sectionTitle}>
              <Typography
                sx={{
                  letterSpacing: "0.7px",
                  fontSize: "16px",
                  mb: "14px",
                  display: "block",
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
                        color: theme.palette.footertext,
                        fontSize: "13px",
                        letterSpacing: "0.8px",
                        my: "9px",
                      }}
                    >
                      {item.text}
                    </Box>
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
          <Grid item xs={12} sm={6} md={4} lg={3} xl={3}>
            <Typography
              sx={{
                letterSpacing: "0.7px",
                fontSize: "16px",
                mb: "14px",
                display: "block",
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
                  my: "9px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <EmailOutlinedIcon
                  sx={{ fontSize: "30px", marginRight: "10px" }}
                />
                <Link
                  to="mailto:edithtech01@gmail.com"
                  style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px" }}
                >
                  edithtech01@gmail.com
                </Link>
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
                <CallOutlinedIcon
                  sx={{ fontSize: "30px", marginRight: "10px" }}
                />
                <Box sx={{ fontSize: "13px" }}>
                  <Link
                    to="tel:+919601175985"
                    style={{ color: "rgba(255,255,255,0.8)", fontSize: "18px" }}
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
                  sx={{ fontSize: "30px", marginRight: "10px" }}
                />
                <Box>
                  <Link
                    to="https://maps.app.goo.gl/qV6mdXRGmPpmxGP26"
                    style={{ color: "#fff !important", fontSize: "16px" }}
                  >
                    <address style={{ color: "#fff" }}>
                      414, 4th Floor, Pavitraa Point, Opp. BBC, Near Savaliya
                      Circle, Surat, Gujarat 395010
                    </address>
                  </Link>
                </Box>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", mt: "5px" }}>
                {socialLinks.map((social, index) => (
                  <Box key={index}>
                    <Link href={social.href} target="_blank">
                      <social.Icon
                        sx={{
                          fontSize: "30px",
                          color: theme.palette.primary.main,
                          mx: "2px",
                        }}
                      />
                    </Link>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
        <Box
          sx={{
            display: { sx: "block", md: "flex" },
            justifyContent: { sx: "center", sm: "center", md: "space-between" },
            margin: { sx: "auto" },
            py: { xs: 2, sm: 2, md: 3 },
            width: "100%",
            borderTop: "1px solid #e1e1e1",
            borderColor: "divider",
          }}
        >
          <Stack
            sx={{
              py: { xs: 1 },
            }}
          >
            <Typography variant="p" sx={{ color: theme.palette.white }}>
              2024 Education Institute || Designed By: JENCY
            </Typography>
          </Stack>
          <Stack
            direction="row"
            sx={{
              color: "text.secondary",
              py: { xs: 1 },
            }}
          >
            <Typography variant="p" sx={{ color: theme.palette.white }}>
              <DotIcon
                sx={{
                  color: theme.palette.primary.main,
                  width: "10px",
                  height: "10px",
                  lineHeight: "10px",
                  mr: 1,
                }}
              />
              Disclaimer
            </Typography>
            <Typography variant="p" sx={{ color: theme.palette.white }}>
              <DotIcon
                sx={{
                  color: theme.palette.primary.main,
                  width: "10px",
                  height: "10px",
                  lineHeight: "10px",
                  mr: 1,
                }}
              />
              Privacy Policy
            </Typography>
            <Typography variant="p" sx={{ color: theme.palette.white }}>
              <DotIcon
                sx={{
                  color: theme.palette.primary.main,
                  width: "10px",
                  height: "10px",
                  lineHeight: "10px",
                  mr: 1,
                }}
              />
              Cookie Policy
            </Typography>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Footer;
