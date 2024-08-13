import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
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
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

const Getintouch = () => {
  const theme = useTheme();

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string().required("Phone number is required"),
    message: Yup.string().required("Message is required"),
    service: Yup.string().required("Service is required"),
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
    { icon: <InstagramIcon />, link: "https://www.instagram.com/editsh_technology/" },
    { icon: <TwitterIcon />, link: "#" },
    { icon: <LinkedInIcon />, link: "https://www.linkedin.com/company/editsh/about/" },
  ];

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          my: 2,
          py: 2,
          backgroundImage: `url("https://i.postimg.cc/x16rRyCz/129199.jpg")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          "@media (maxWidth:600px)": {
            backgroundImage: `url("https://i.postimg.cc/x16rRyCz/129199.jpg")`,
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
                    <Link key={index} to={media.link} color="inherit" target="_blank">
                      {media.icon}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="contact-form">
              <Box className="circle one" />
              <Box className="circle two" />
              <Formik
                initialValues={{
                  name: "",
                  email: "",
                  mobile: "",
                  message: "",
                  service: "",
                }}
                validationSchema={validationSchema}
                onSubmit={async (values, { setSubmitting, resetForm }) => {
                  try {
                    const response = await axios.post(
                      "https://editsh-back.onrender.com/api/gettouch/add",
                      values
                    );
                    toast.success(response.data.message);
                  } catch (error) {
                    console.error("Error submitting form:", error);
                    toast.error("Error submitting form!");
                  } finally {
                    setSubmitting(false);
                    resetForm();
                  }
                }}
              >
                {({ handleChange, values }) => (
                  <Form
                    noValidate
                    autoComplete="off"
                    style={{
                      "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                        {
                          borderColor: theme.palette.secondary.main,
                        },
                      "& .MuiInputLabel-root:hover": {
                        color: theme.palette.secondary.main,
                      },
                    }}
                  >
                    <Grid container spacing={2}>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          label="Name"
                          name="name"
                          value={values.name}
                          onChange={handleChange}
                          placeholder="Name"
                          fullWidth
                          variant="filled"
                          InputLabelProps={{
                            style: { color: theme.palette.secondary.main },
                            shrink: true,
                          }}
                          InputProps={{
                            style: { color: theme.palette.secondary.main },
                            placeholder: "Name",
                          }}
                          helperText={<ErrorMessage name="name" />}
                          error={!!values.name}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          label="Email"
                          name="email"
                          value={values.email}
                          onChange={handleChange}
                          fullWidth
                          placeholder="Email"
                          variant="filled"
                          InputLabelProps={{
                            style: { color: theme.palette.secondary.main },
                            shrink: true,
                          }}
                          InputProps={{
                            style: { color: theme.palette.secondary.main },
                            placeholder: "Email",
                          }}
                          helperText={<ErrorMessage name="email" />}
                          error={!!values.email}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          label="Mobile"
                          name="mobile"
                          value={values.mobile}
                          onChange={handleChange}
                          fullWidth
                          placeholder="+91 0000 00000"
                          variant="filled"
                          InputLabelProps={{
                            style: { color: theme.palette.secondary.main },
                            shrink: true,
                          }}
                          InputProps={{
                            style: { color: theme.palette.secondary.main },
                            placeholder: "+91 0000 00000",
                          }}
                          helperText={<ErrorMessage name="mobile" />}
                          error={!!values.mobile}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <FormControl fullWidth variant="filled">
                          <InputLabel
                            style={{ color: theme.palette.secondary.main }}
                            shrink
                          >
                            Service
                          </InputLabel>
                          <Field
                            as={Select}
                            name="service"
                            value={values.service}
                            onChange={handleChange}
                            displayEmpty
                            style={{ color: theme.palette.secondary.main }}
                            inputProps={{ "aria-label": "Without label" }}
                          >
                            <MenuItem value="" disabled>
                              Select a service
                            </MenuItem>
                            <MenuItem value="Mobile App Development">
                              Mobile App Development
                            </MenuItem>
                            <MenuItem value="Web Development">
                              Web Development
                            </MenuItem>
                          </Field>
                          <ErrorMessage name="service" />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          label="Message"
                          name="message"
                          value={values.message}
                          onChange={handleChange}
                          multiline
                          rows={4}
                          fullWidth
                          variant="filled"
                          InputLabelProps={{
                            style: { color: theme.palette.secondary.main },
                            shrink: true,
                          }}
                          InputProps={{
                            style: { color: theme.palette.secondary.main },
                            placeholder: "Message",
                          }}
                          helperText={<ErrorMessage name="message" />}
                          error={!!values.message}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Button
                          type="submit"
                          variant="outlined"
                          sx={{
                            width: "130px",
                            borderRadius: 5,
                            borderColor: theme.palette.primary.main,
                            color: theme.palette.grey[500],
                            "&:hover": {
                              backgroundColor: theme.palette.secondary.main,
                              color: theme.palette.common.white,
                            },
                          }}
                        >
                          Submit
                        </Button>
                      </Grid>
                    </Grid>
                  </Form>
                )}
              </Formik>
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default Getintouch;
