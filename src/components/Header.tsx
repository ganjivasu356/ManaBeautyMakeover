import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  useMediaQuery,
} from "@mui/material";
import { Menu as MenuIcon, Close as CloseIcon } from "@mui/icons-material";
import ManaLogo from "../Assets/ManaLogo.jpeg";
import { menuItems } from "../utility/constants";

const Header: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md")); // Check for mobile view

  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
    }
    if (isMobile) {
      setDrawerOpen(false); // Close the drawer on mobile after navigation
    }
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{ marginTop: "12px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        {/* Logo Section */}
        <Box display="flex" alignItems="center">
          <img
            src={ManaLogo}
            alt="logo"
            style={{
              height: "62px",
              width: "148px",
              borderRadius: "8px",
            }}
          />
          <Box display="flex" flexDirection="column" ml={2}>
            <Typography
              variant="h4"
              sx={{ fontWeight: "bold", color: "white" }}
            >
              MANA
            </Typography>
            <Typography
              variant="h6"
              sx={{
                fontWeight: "bold",
                color: "white",
                marginTop: "4px",
              }}
            >
              Beauty & Makeover Studio
            </Typography>
          </Box>
        </Box>

        {/* Desktop Navigation */}
        {!isMobile && (
          <Box sx={{ display: "flex", gap: 3 }}>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                sx={{
                  color: "white",
                  fontSize: "16px",
                  fontWeight: "bold",
                  textTransform: "none",
                }}
              >
                {item.title}
              </Button>
            ))}
          </Box>
        )}

        {/* Mobile Hamburger Menu */}
        {isMobile && (
          <IconButton
            edge="end"
            color="inherit"
            onClick={() => setDrawerOpen(true)}
          >
            <MenuIcon sx={{ color: "white" }} />
          </IconButton>
        )}
      </Toolbar>

      {/* Drawer for Mobile Menu */}
      <Drawer
        anchor="right"
        open={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      >
        <Box
          sx={{
            width: 250,
            backgroundColor: "#333",
            height: "100%",
            color: "white",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {/* Close Button */}
          <Box display="flex" justifyContent="flex-end" p={2}>
            <IconButton
              onClick={() => setDrawerOpen(false)}
              sx={{ color: "white" }}
            >
              <CloseIcon />
            </IconButton>
          </Box>

          {/* Navigation Links */}
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.id} disablePadding>
                <ListItemButton onClick={() => handleScroll(item.id)}>
                  <ListItemText
                    primary={item.title}
                    sx={{
                      textAlign: "center",
                      color: "white",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>

          {/* Footer Text in Drawer */}
          <Box p={2}>
            <Typography variant="body2" textAlign="center">
              © 2024 MANA Beauty & Makeover Studio
            </Typography>
          </Box>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
