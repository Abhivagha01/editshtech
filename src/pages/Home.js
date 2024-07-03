import { useTheme } from "@emotion/react";
import { Typography } from "@mui/material";
import React from "react";

function Home() {
  const theme = useTheme();

  return (
    <div>
      <Typography variant="h1" 
      sx={{ color: theme.palette.primary.main }}>
        Editsh Technology
      </Typography>
    </div>
  );
}

export default Home;
