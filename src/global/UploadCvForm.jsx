import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Grid,
  TextField,
  IconButton,
  MenuItem,
  Typography,
  CircularProgress
} from "@mui/material";
import axios from "axios";
import { Formik, Form, Field } from "formik";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ToastContainer, toast } from "react-toastify";
import "../../src/assets/Css/contact.css";
import "react-toastify/dist/ReactToastify.css";
import * as Yup from "yup";

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
  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axios.post(
        "http://localhost:8000/api/resume/add",
        values
      );
      if (response.status === 201) {
        toast.success(response.data.message);
      }
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      setSubmitting(false);
    }
  };

  const years = Array.from({ length: 11 }, (_, index) => index.toString());

  const months = Array.from({ length: 13 }, (_, index) => index.toString());

  const validationSchema = Yup.object({
    firstName: Yup.string().required("First name is required"),
    lastName: Yup.string().required("Last name is required"),
    email: Yup.string()
      .email("Invalid email format")
      .required("Email is required"),
    mobile: Yup.string().required("Mobile number is required"),
    address: Yup.string().required("Address is required"),
    currentCompanyName: Yup.string().required(
      "Current company name is required"
    ),
    year: Yup.string().required("Year is required"),
    month: Yup.string().required("Month is required"),
    currentSalary: Yup.string().required("Current salary is required"),
    expectedSalary: Yup.string().required("Expected salary is required"),
  });

  return (
    <>
      <ToastContainer />
      <Box sx={{ p: 2, borderRadius: "10px" }}>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            mobile: "",
            address: "",
            currentCompanyName: "",
            year: "",
            month: "",
            currentSalary: "",
            expectedSalary: "",
            resumeImage: "",
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ errors, touched, setFieldValue, isSubmitting }) => (
            <Form>
              <Box
                sx={{ display: "grid", gap: 3, maxWidth: 800, margin: "auto" }}
              >
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="firstName"
                      as={TextField}
                      label="First Name"
                      variant="filled"
                      size="small"
                      error={touched.firstName && Boolean(errors.firstName)}
                      helperText={touched.firstName && errors.firstName}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="lastName"
                      as={TextField}
                      label="Last Name"
                      variant="filled"
                      size="small"
                      error={touched.lastName && Boolean(errors.lastName)}
                      helperText={touched.lastName && errors.lastName}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="email"
                      size="small"
                      as={TextField}
                      label="Email"
                      variant="filled"
                      error={touched.email && Boolean(errors.email)}
                      helperText={touched.email && errors.email}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="mobile"
                      size="small"
                      as={TextField}
                      label="Mobile"
                      variant="filled"
                      error={touched.mobile && Boolean(errors.mobile)}
                      helperText={touched.mobile && errors.mobile}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="address"
                      as={TextField}
                      size="small"
                      label="Address"
                      variant="filled"
                      error={touched.address && Boolean(errors.address)}
                      helperText={touched.address && errors.address}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="currentCompanyName"
                      as={TextField}
                      label="Current Company Name"
                      size="small"
                      variant="filled"
                      error={
                        touched.currentCompanyName &&
                        Boolean(errors.currentCompanyName)
                      }
                      helperText={
                        touched.currentCompanyName && errors.currentCompanyName
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="year"
                      size="small"
                      as={TextField}
                      label="Year"
                      select
                      variant="filled"
                      error={touched.year && Boolean(errors.year)}
                      helperText={touched.year && errors.year}
                      fullWidth
                    >
                      {years.map((year) => (
                        <MenuItem key={year} value={year}>
                          {year}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="month"
                      as={TextField}
                      size="small"
                      label="Month"
                      select
                      variant="filled"
                      error={touched.month && Boolean(errors.month)}
                      helperText={touched.month && errors.month}
                      fullWidth
                    >
                      {months.map((month) => (
                        <MenuItem key={month} value={month}>
                          {month}
                        </MenuItem>
                      ))}
                    </Field>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="currentSalary"
                      as={TextField}
                      label="Current Salary"
                      variant="filled"
                      error={
                        touched.currentSalary && Boolean(errors.currentSalary)
                      }
                      helperText={touched.currentSalary && errors.currentSalary}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Field
                      name="expectedSalary"
                      as={TextField}
                      label="Expected Salary"
                      variant="filled"
                      error={
                        touched.expectedSalary && Boolean(errors.expectedSalary)
                      }
                      helperText={
                        touched.expectedSalary && errors.expectedSalary
                      }
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12}>
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
                    <Typography
                      sx={{
                        textAlign: "center",
                      }}
                    >
                      Upload only .png or .jpg files
                    </Typography>
                  </Grid>
                </Grid>
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
    </>
  );
}

export default UploadCvForm;
