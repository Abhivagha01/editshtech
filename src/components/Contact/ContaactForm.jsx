import { useTheme } from "@emotion/react";
import {
  Box,
  Button,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

function ContactForm() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: theme.palette.black,
          py: {
            sm: 4,
            lg: 10,
          },
        }}
      >
        <Container>
          <Grid container spacing={2}>
            <Grid item xs={12} lg={6}>
              <iframe
                title="map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.530529819246!2d72.88687117352991!3d21.210800881504532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f1f68e54d09%3A0xe1d3d1a8bc631529!2sEditsh%20Technology!5e0!3m2!1sen!2sin!4v1720786780182!5m2!1sen!2sin"
                width={`100%`}
                height={`100%`}
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </Grid>
            <Grid item xs={12} lg={6}>
              <Box
                component="form"
                onSubmit={handleSubmit}
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 2,
                  backgroundColor: theme.palette.lightBlack,
                }}
              >
                <Box>
                  <Typography
                    sx={{
                      fontSize: 30,
                      color: theme.palette.white,
                      fontWeight: 600,
                    }}
                  >
                    Leave A Message
                  </Typography>
                </Box>
                <TextField
                  label="Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  variant="filled"
                  required
                  InputLabelProps={{
                    style: { color: theme.palette.white },
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  label="Email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  variant="filled"
                  required
                  InputLabelProps={{
                    style: { color: theme.palette.white},
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  label="Subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  variant="filled"
                  required
                  InputLabelProps={{
                    style: { color: "white" },
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <TextField
                  label="Message"
                  name="message"
                  multiline
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  variant="filled"
                  required
                  InputLabelProps={{
                    style: { color: theme.palette.white },
                  }}
                  InputProps={{
                    readOnly: true,
                  }}
                />
                <Box>
                  <Button
                    type="submit"
                    sx={{
                      width: "130px",
                      border: "1px solid #8c8c8c",
                      display: "inline-block",
                      p: 1,
                      borderRadius:5
                    }}
                  >
                    Submit
                  </Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
}

export default ContactForm;
