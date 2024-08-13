import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  Stack,
  TextField,
  IconButton,
  Typography,
} from "@mui/material";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ToastContainer, toast } from "react-toastify";
import "../../src/assets/Css/contact.css";
import "react-toastify/dist/ReactToastify.css";

function UploadCvForm() {
  const theme = useTheme();
  // eslint-disable-next-line
  const [image, setImage] = useState(null);

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append("image", file);

      axios
        .post("https://editsh-back.onrender.com/api/upload-image", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
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
        });
    }
  };

  const handleSubmit = async (values) => {
    try {
      const response = await axios.post(
        "https://editsh-back.onrender.com/api/resume/add",
        values
      );
      console.log(response);
      if (response.status === 201) {
        console.log(response);
        toast.success(response.data.message);
      }
    } catch (error) {
      console.log(error.response.data.message);
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      <ToastContainer />
      <Formik
        initialValues={{
          fullName: "",
          email: "",
          mobile: "",
          position: "",
          resumeImage: "",
        }}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              backgroundColor: theme.palette.secondary.main,
              p: 3,
              borderRadius: 2,
            }}
          >
            <Typography
              sx={{
                fontSize: 30,
                color: theme.palette.text.primary,
                fontWeight: 600,
                mb: 2,
              }}
            >
              Kindly E-mail your CV
            </Typography>

            <Stack spacing={2}>
              <Grid container row spacing={3}>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="fullName"
                    label="Full Name"
                    placeholder="Full Name"
                    fullWidth
                    variant="filled"
                    required
                    InputLabelProps={{
                      style: { color: theme.palette.secondary.main },
                      shrink: true,
                    }}
                    InputProps={{
                      style: { color: theme.palette.secondary.main },
                      placeholder: "Full Name",
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Field
                    as={TextField}
                    name="email"
                    type="email"
                    label="Email"
                    placeholder="Email id"
                    fullWidth
                    variant="filled"
                    required
                    InputLabelProps={{
                      style: { color: theme.palette.secondary.main },
                      shrink: true,
                    }}
                    InputProps={{
                      style: { color: theme.palette.secondary.main },
                      placeholder: "Email",
                    }}
                  />
                </Grid>
                <Grid item xs={12} lg={6}>
                  <Field
                    as={TextField}
                    name="mobile"
                    type="tel"
                    label="Mobile Number"
                    placeholder="+91 00000 00000"
                    fullWidth
                    variant="filled"
                    required
                    InputLabelProps={{
                      style: { color: theme.palette.secondary.main },
                      shrink: true,
                    }}
                    InputProps={{
                      style: { color: theme.palette.secondary.main },
                      placeholder: "+91 00000 00000",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Field
                    as={TextField}
                    name="position"
                    label="Position"
                    placeholder="Position"
                    fullWidth
                    variant="filled"
                    required
                    InputLabelProps={{
                      style: { color: theme.palette.secondary.main },
                      shrink: true,
                    }}
                    InputProps={{
                      style: { color: theme.palette.secondary.main },
                      placeholder: "Position",
                    }}
                  />
                </Grid>
                <Grid item xs={12}>
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    sx={{
                      border: "1px dotted #808080",
                      borderRadius: 1,
                      textAlign: "center",
                      position: "relative",
                    }}
                  >
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
                          style={{
                            display: "flex",
                            justifyContent: "center",
                          }}
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
                    <Box>
                      <Typography
                        sx={{
                          color: theme.palette.text.secondary,
                          py: 3,
                          fontSize: "14px",
                          fontWeight: "700",
                        }}
                      >
                        Click to upload or change your CV file
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
                <Grid item sx={12}>
                  <Button
                    type="submit"
                    variant="contained"
                    sx={{
                      width: "130px",
                      border: "1px solid #8c8c8c",
                      display: "inline-block",
                      p: 1,
                      borderRadius: 5,
                    }}
                  >
                    Send Message
                  </Button>
                </Grid>
              </Grid>
            </Stack>
          </Form>
        )}
      </Formik>
    </>
  );
}

export default UploadCvForm;
