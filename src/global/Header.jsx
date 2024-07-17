import React, { useState, useEffect } from "react";
import {
  AppBar,
  Box,
  IconButton,
  Toolbar,
  Typography,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Divider,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../assets/footer/logo.png";
import { useTheme } from "@emotion/react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const theme = useTheme();

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const menuItems = [
    { label: "Home", to: "/" },
    { label: "About", to: "/about" },
    { label: "Technology", to: "/technology" },
    { label: "Client", to: "/client" },
    { label: "Career", to: "/career" },
    { label: "blog", to: "/blog" },
    { label: "Contact Us", to: "/contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AppBar
        sx={{
          position: "fixed",
          backgroundColor: scrolled ? "black" : "transparent",
          boxShadow: 0,
          transition: "background-color 0.5s",
        }}
      >
        <Toolbar>
          <Box
            sx={{ width: "100%" }}
            px={{ xs: "2rem", sm: "4rem", md: "6rem", xl: "8rem" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}
            >
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{
                  mr: 2,
                  flexGrow: 1,
                }}
              >
                <NavLink to={"/"}>
                  <Box to={"/"} className="logo-inner">
                    <img src={logo} alt="Logo" height="70px" width="40%" />
                  </Box>
                </NavLink>
              </Typography>
              {/* Mobile Menu Toggle */}
              <Box sx={{ flexGrow: 0, display: { xs: "flex", md: "none" } }}>
                <IconButton
                  size="large"
                  aria-label="menu"
                  onClick={toggleMobileMenu}
                >
                  <MenuIcon />
                </IconButton>
              </Box>
              {/* Desktop Menu */}
              <Box
                sx={{
                  display: { xs: "none", md: "flex" },
                  justifyContent: "flex-end",
                }}
              >
                {/* Desktop Menu Items */}
                {menuItems.map((item, index) => (
                  <NavLink
                    key={index}
                    to={item.to}
                    style={{ textDecoration: "none" }}
                  >
                    <Typography
                      sx={{
                        mx: 1.5,
                        color: theme.palette.white,
                        display: "block",
                        fontWeight: "500",
                        fontSize: "15px",
                        transition: "0.5s",
                        "&:hover": {
                          color: theme.palette.secondary.main,
                        },
                      }}
                    >
                      {item.label}
                    </Typography>
                  </NavLink>
                ))}
              </Box>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
      {/* Mobile Drawer */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={toggleMobileMenu}
        sx={{ "& .MuiDrawer-paper": { width: "250px" } }}
      >
        <Box
          sx={{
            width: 250,
          }}
          role="presentation"
          onClick={toggleMobileMenu}
          onKeyDown={toggleMobileMenu}
        >
          <List>
            {menuItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                style={{ textDecoration: "none" }}
              >
                <ListItem button>
                  <ListItemText primary={item.label} />
                </ListItem>
              </NavLink>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
    </>
  );
};

export default Header;
