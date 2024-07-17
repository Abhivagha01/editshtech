import React, { useState } from "react";
import {
  Box,
  Button,
  Container,
  createTheme,
  TextField,
  ThemeProvider,
  Typography,
} from "@mui/material";
import counter_back_image from "../assets/common_background.png";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import "../../src/assets/Css/contact.css";

function Getintouch() {
  const theme = useTheme();

  const [formValues, setFormValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formValues);
  };

  const customTheme = createTheme({
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          root: {
            "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.main,
            },
          },
          notchedOutline: {
            borderColor: theme.palette.primary.main,
          },
        },
      },
    },
  });

  const contactInfo = [
    {
      icon: (
        <AddLocationAltIcon
          sx={{
            color: theme.palette.white,
            width: "40px",
          }}
        />
      ),
      text: "414, Pavitraa Point, Opp BBC, Near Savaliya Circle, Yogichowk, Surat",
    },
    {
      icon: <EmailIcon />,
      text: "edithtech01@gmail.com",
      link: "mailto:edithtech01@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      text: "+91 96011 75985",
      link: "tel:+91 96011 75985",
    },
  ];

  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: "#" },
    { icon: <InstagramIcon />, link: "#" },
    { icon: <TwitterIcon />, link: "#" },
    { icon: <LinkedInIcon />, link: "#" },
  ];

  return (
    <Box
      sx={{
        my: 2,
        py: 2,
        backgroundImage: `url(${counter_back_image})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        "@media (maxWidth:600px)": {
          backgroundImage: `url(${counter_back_image})`,
        },
      }}
    >
      <Container sx={{ py: 10 }}>
        <Box className="form">
          <Box className="contact-info">
            <Typography
              sx={{
                fontSize: "30px",
                mb: 2,
                fontWeight: "bold",
                fontFamily: theme.typography.fontFamily,
              }}
            >
              Let's get in touch
            </Typography>
            <Typography
              variant="body1"
              sx={{
                mb: 2,
              }}
            >
              Ready to start a project?
            </Typography>
            <Box className="info">
              {contactInfo.map((info, index) => (
                <Box
                  key={index}
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    mb: 2,
                  }}
                >
                  <Box
                    sx={{
                      width: "40px",
                      height: "40px",
                      lineHeight: "40px",
                      textAlign: "center",
                      backgroundColor: theme.palette.lightwhite,
                      color: theme.palette.white,
                      borderRadius: "10%",
                      mr: 2,
                      pt: 1,
                    }}
                  >
                    {info.icon}
                  </Box>
                  <Box>
                    {info.link ? (
                      <Link to={info.link} sx={{ fontSize: "14px" }}>
                        {info.text}
                      </Link>
                    ) : (
                      <Typography sx={{ fontSize: "14px" }}>
                        {info.text}
                      </Typography>
                    )}
                  </Box>
                </Box>
              ))}
            </Box>
            <Box className="social-media">
              <Typography
                sx={{
                  fontSize: "16px",
                  fontWeight: "bold",
                }}
              >
                Connect with Us
              </Typography>
              <Box className="social-icons">
                {socialMediaLinks.map((media, index) => (
                  <Link key={index} href={media.link} color="inherit">
                    {media.icon}
                  </Link>
                ))}
              </Box>
            </Box>
          </Box>
          <Box className="contact-form">
            <Box className="circle one" />
            <Box className="circle two" />
            <ThemeProvider theme={customTheme}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                noValidate
                autoComplete="off"
                sx={{
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                    {
                      borderColor: theme.palette.white,
                    },
                  "& .MuiInputLabel-root:hover": {
                    color: theme.palette.lightwhite,
                  },
                }}
              >
                <TextField
                  label="Name"
                  name="name"
                  value={formValues.name}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.primary.main },
                  }}
                />
                <TextField
                  label="Email"
                  name="email"
                  value={formValues.email}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.primary.main },
                  }}
                />
                <TextField
                  label="Phone"
                  name="phone"
                  value={formValues.phone}
                  onChange={handleInputChange}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.primary.main },
                  }}
                />
                <TextField
                  label="Message"
                  name="message"
                  value={formValues.message}
                  onChange={handleInputChange}
                  multiline
                  rows={4}
                  fullWidth
                  margin="normal"
                  variant="outlined"
                  InputLabelProps={{
                    style: { color: theme.palette.primary.main },
                  }}
                />
                <Button
                  type="submit"
                  variant="contained"
                  sx={{
                    backgroundColor: theme.palette.secondary.main,
                    mt: 2,
                    "&:hover": {
                      backgroundColor: theme.palette.lightwhite,
                    },
                  }}
                >
                  Send
                </Button>
              </Box>
            </ThemeProvider>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Getintouch;
