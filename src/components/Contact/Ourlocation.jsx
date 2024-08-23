import { useTheme } from "@emotion/react";
import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import CallIcon from "@mui/icons-material/Call";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import AddLocationAltIcon from "@mui/icons-material/AddLocationAlt";
import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

const ContactBox = ({ icon: Icon, title, link, linkText }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        backgroundColor: theme.palette.lightwhite,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 4,
        p: 4,
        height: "100%",
        transition: "transform 0.3s",
        "&:hover": {
          transform: "translateY(-10px)",
        },
      }}
    >
      <Box>
        <div className="service-icon">
          <Icon sx={{ color: theme.palette.lightwhite, fontSize: "30px" }} />
        </div>
      </Box>
      <Typography
        sx={{
          fontWeight: "600",
          fontSize: "22px",
          color: theme.palette.primary.main,
          textAlign: "center",
          py: 2,
        }}
      >
        {title}
      </Typography>
      <Link
        to={link}
        style={{
          textDecoration: "none",
          fontSize: "14px",
          color: theme.palette.primary.main,
          textAlign: "center",
        }}
      >
        {linkText}
      </Link>
    </Box>
  );
};

function Ourlocation() {
  const theme = useTheme();

  return (
    <Box
      sx={{
        backgroundColor: theme.palette.black,
        py: { xs: 4, sm: 4, lg: 8 },
      }}
    >
      <Container>
        <Grid container spacing={2}>
          {[
            {
              icon: CallIcon,
              title: "Phone",
              link: "tel:+91 98790 27562",
              linkText: "+91 98790 27562",
            },
            {
              icon: MarkEmailUnreadIcon,
              title: "Email",
              link: "mailto:editshtech@gmail.com",
              linkText: "editshtech@gmail.com",
            },
            {
              icon: AddLocationAltIcon,
              title: "Our Location",
              link: "#",
              linkText:
                "414, 4th Floor, Pavitra Point, Opp. BBC, Near Savaliya Circle, Surat, Gujarat 395010",
            },
            {
              icon: QueryBuilderIcon,
              title: "Office Hour",
              linkText: "Mon - Fri 09:30 AM - 06:30 PM",
            },
          ].map((item, index) => (
            <Grid item xs={12} sm={6} md={6} lg={3} key={index}>
              <ContactBox {...item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

export default Ourlocation;
