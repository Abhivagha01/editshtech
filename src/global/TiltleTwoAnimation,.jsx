import { useTheme } from "@emotion/react";
import { Box, Typography } from "@mui/material";
import { keyframes } from "@emotion/react";
import React from "react";

const runAnimation = keyframes`
  0% { left: 0%; }
  100% { left: 100%; }
`;

export const TiltleTwoAnimation = ({ title }) => {
  const theme = useTheme();
  return (
    <>
      <Box align="center">
        <Box
          sx={{
            fontSize: "35px",
            fontWeight: "500",
            color: theme.palette.primary.main,
          }}
        >
          {title}
        </Box>
        <Box sx={{ marginTop: "10px" }}>
          <Box
            sx={{
              height: "3px",
              width: "100px",
              backgroundColor: theme.palette.primary.main,
              position: "relative",
            }}
          >
            <Typography
              sx={{
                height: "13px",
                width: "13px",
                borderRadius: "50%",
                position: "absolute",
                top: "50%",
                left: "0%",
                transform: "translateY(-50%)",
                bgcolor: theme.palette.secondary.main,
                animation: `${runAnimation} 2s infinite linear alternate-reverse`,
              }}
            ></Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
