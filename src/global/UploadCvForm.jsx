import React, { useState } from "react";
import { useTheme } from "@emotion/react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";

function UploadCvForm() {
  const theme = useTheme();

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    mobileNumber: "",
    position: "",
    file: null,
  });

  const handleChange = (event) => {
    const { name, value, files } = event.target;
    setFormData({
      ...formData,
      [name]: name === "file" ? files[0] : value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Submitted Data:", formData);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        backgroundColor: theme.palette.background.paper,
        p: 3,
        borderRadius: 2,
      }}
    >
      <Box>
        <Typography
          sx={{
            fontSize: 30,
            color: theme.palette.text.primary,
            fontWeight: 600,
            mb: 2,
          }}
        >
          Leave A Message
        </Typography>
      </Box>
      <Stack spacing={2}>
        <Box
          columnGap={2}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
          }}
        >
          <TextField
            label="Full Name"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
            variant="standard"
            required
            InputLabelProps={{
              style: { color: theme.palette.secondary.main },
              shrink: true,
            }}
          />
        </Box>
        <Box
          columnGap={1}
          rowGap={1}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            md: "repeat(2, 1fr)",
          }}
        >
          <Box>
            <TextField
              label="Email"
              name="email"
              type="email"
              placeholder="Email id"
              value={formData.email}
              onChange={handleChange}
              variant="standard"
              required
              InputLabelProps={{
                style: { color: theme.palette.secondary.main },
                shrink: true,
              }}
            />
          </Box>
          <Box>
            <TextField
              label="Mobile Number"
              name="mobileNumber"
              type="tel"
              placeholder="+91 00000 00000"
              value={formData.mobileNumber}
              onChange={handleChange}
              variant="standard"
              required
              InputLabelProps={{
                style: { color: theme.palette.secondary.main },
                shrink: true,
              }}
            />
          </Box>
        </Box>
        <Box
          columnGap={2}
          rowGap={3}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
          }}
        >
          <TextField
            label="Position"
            name="position"
            value={formData.position}
            onChange={handleChange}
            variant="standard"
            placeholder="Position"
            required
            InputLabelProps={{
              style: { color: theme.palette.secondary.main },
              shrink: true,
            }}
          />
        </Box>
        <Box
          columnGap={1}
          rowGap={1}
          display="grid"
          gridTemplateColumns={{
            xs: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
          }}
        >
          <Box
            sx={{
              mb: 2,
              border: "1px solid #f1f1f1",
              p: 1,
              borderRadius: 1,
            }}
          >
            <Typography
              component="span"
              sx={{ color: theme.palette.text.primary, fontSize: 16 }}
            >
              Upload CV
            </Typography>
            <input
              type="file"
              name="file"
              onChange={handleChange}
              style={{ marginLeft: 8 }}
            />
          </Box>
        </Box>
      </Stack>

      <Box>
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
      </Box>
    </Box>
  );
}

export default UploadCvForm;
