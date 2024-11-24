import React from "react";
import "./Header.css";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import ManaLogo from "../Assets/ManaLogo.jpeg";
import { menuItems } from "../utility/constants";

const Header: React.FC = () => {
  const handleScroll = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" }); // Smooth scrolling
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
        <img
          src={ManaLogo}
          alt="logo"
          style={{
            height: "62px",
            width: "148px",
            borderRadius: "8px",
          }}
        />
        <Box display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Typography variant="h4" sx={{ fontWeight: "bold", color: "white" }}>
            MANA
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              color: "white",
              marginTop: "4px",
              marginLeft: "8px",
            }}
          >
            Beauty & Makeover Studio
          </Typography>
        </Box>

        {/* Navigation Links */}
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
      </Toolbar>
    </AppBar>
  );
};

export default Header;
