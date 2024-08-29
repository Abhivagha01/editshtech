import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  Box,
  Container,
  FormControl,
  Grid,
  Button,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
  FormHelperText,
  CircularProgress,
  IconButton,
} from "@mui/material";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";
import { useTheme } from "@emotion/react";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "react-toastify/dist/ReactToastify.css";
import "../../src/assets/Css/contact.css";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import axios from "axios";

const Getintouch = () => {
  const theme = useTheme();
  // eslint-disable-next-line
  const [image, setImage] = useState(null);

  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile number is required"),
    projectDescription: Yup.string().required(
      "Project Description is required"
    ),
    budget: Yup.string().required("Budget is required"),
    resumeImage: Yup.string().url("Invalid URL"),
  });

  const contactInfo = [
    {
      icon: (
        <AddLocationAltIcon
          sx={{ color: theme.palette.white, width: "40px" }}
        />
      ),
      text: "414, Pavitra Point, Opp BBC, Near Savaliya Circle, Yogichowk, Surat",
    },
    {
      icon: <EmailIcon />,
      text: "editshtech@gmail.com",
      link: "mailto:editshtech@gmail.com",
    },
    {
      icon: <PhoneIcon />,
      text: "+91 96011 75985",
      link: "tel:+91 96011 75985",
    },
  ];

  const socialMediaLinks = [
    { icon: <FacebookIcon />, link: "#" },
    {
      icon: <InstagramIcon />,
      link: "https://www.instagram.com/editsh_technology/",
    },
    { icon: <TwitterIcon />, link: "#" },
    {
      icon: <LinkedInIcon />,
      link: "https://www.linkedin.com/company/editsh/about/",
    },
  ];

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      axios
        .post("https://editsh-back.onrender.com/api/upload-image", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
          setImage({
            url: response.data.url,
            public_id: response.data.public_id,
          });
          setFieldValue("resumeImage", response.data.url);
        })
        .catch((error) => {
          console.error("Error uploading image:", error);
          toast.error("Error uploading image");
        });
    }
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/gettouch/add",
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
  };

  return (
    <>
      <ToastContainer />
      <Box
        sx={{
          my: 2,
          py: { xs: 1, md: 2, lg: 4 },
          backgroundImage: `url("https://i.postimg.cc/x16rRyCz/129199.jpg")`,
          backgroundAttachment: "fixed",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          "@media (max-width:600px)": {
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
              <Typography variant="body1" sx={{ mb: 2 }}>
                Ready to start a project?
              </Typography>
              <Box className="info">
                {contactInfo.map((info, index) => (
                  <Box
                    key={index}
                    sx={{
                      display: "flex",
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
                        <Link to={info.link} style={{ fontSize: "14px" }}>
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
                <Typography sx={{ fontSize: "16px", fontWeight: "bold" }}>
                  Connect with Us
                </Typography>
                <Box className="social-icons">
                  {socialMediaLinks.map((media, index) => (
                    <Link
                      key={index}
                      to={media.link}
                      color="inherit"
                      target="_blank"
                    >
                      {media.icon}
                    </Link>
                  ))}
                </Box>
              </Box>
            </Box>
            <Box className="contact-form" sx={{ p: 2 }}>
              <Formik
                initialValues={{
                  fullName: "",
                  email: "",
                  mobile: "",
                  projectDescription: "",
                  budget: "",
                  resumeImage: "",
                }}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ isSubmitting, setFieldValue, errors, touched }) => (
                  <Form>
                    <Field
                      as={TextField}
                      name="fullName"
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="fullName" />}
                      error={touched.fullName && Boolean(errors.fullName)}
                    />
                    <Field
                      as={TextField}
                      name="email"
                      label="Email"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="email" />}
                      error={touched.email && Boolean(errors.email)}
                    />
                    <Field
                      as={TextField}
                      name="mobile"
                      label="Mobile"
                      variant="outlined"
                      fullWidth
                      size="small"
                      margin="normal"
                      helperText={<ErrorMessage name="mobile" />}
                      error={touched.mobile && Boolean(errors.mobile)}
                    />
                    <Field
                      as={TextField}
                      name="projectDescription"
                      label="Project Description"
                      variant="outlined"
                      fullWidth
                      margin="normal"
                      size="small"
                      multiline
                      rows={4}
                      helperText={<ErrorMessage name="projectDescription" />}
                      error={
                        touched.projectDescription &&
                        Boolean(errors.projectDescription)
                      }
                    />
                    <FormControl
                      fullWidth
                      margin="normal"
                      error={touched.budget && Boolean(errors.budget)}
                    >
                      <InputLabel>Budget</InputLabel>
                      <Field
                        as={Select}
                        name="budget"
                        size="small"
                        label="Budget"
                        variant="outlined"
                        fullWidth
                      >
                        <MenuItem value="" disabled>
                          Select Budget
                        </MenuItem>
                        <MenuItem value="Less than $5000">
                          Less than $5000
                        </MenuItem>
                        <MenuItem value="$5000 - $10,000">
                          $5000 - $10,000
                        </MenuItem>
                        <MenuItem value="$10,000 - $50,000">
                          $10,000 - $50,000
                        </MenuItem>
                        <MenuItem value="$50,000 - $100,000">
                          $50,000 - $100,000
                        </MenuItem>
                        <MenuItem value="$100,000+">$100,000+</MenuItem>
                      </Field>
                      <FormHelperText>
                        <ErrorMessage name="budget" />
                      </FormHelperText>
                    </FormControl>
                    <Box>
                      <Grid container justifyContent="center">
                        <input
                          id="file-input"
                          type="file"
                          accept=".pdf,.jpg,.jpeg,.png"
                          style={{ display: "none" }}
                          onChange={(event) =>
                            handleFileChange(event, setFieldValue)
                          }
                        />
                        <IconButton
                          onClick={() =>
                            document.getElementById("file-input").click()
                          }
                          style={{ display: "flex", justifyContent: "center" }}
                        >
                          <CloudUploadIcon
                            sx={{
                              color: theme.palette.secondary.main,
                              fontSize: "80px",
                            }}
                          />
                        </IconButton>
                      </Grid>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                      
                      <Button
                        type="submit"
                        variant="contained"
                        color="primary"
                        fullWidth
                        disabled={isSubmitting}
                        sx={{ position: "relative" }}
                      >
                        {isSubmitting && (
                          <CircularProgress
                            size={24}
                            sx={{
                              position: "absolute",
                              top: "50%",
                              left: "50%",
                              marginTop: "-12px",
                              marginLeft: "-12px",
                            }}
                          />
                        )}
                        {isSubmitting ? "Submitting..." : "Submit"}
                      </Button>
                    </Box>
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
