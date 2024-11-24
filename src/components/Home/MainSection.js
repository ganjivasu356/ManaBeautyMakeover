import React from "react";
import { Box, Button, Typography } from "@mui/material";
import homeImage from "../../Assets/home.jpeg";

const MainSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: "60vh",
        backgroundImage: `url(${homeImage})`, // Ensure the path is correct
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        textAlign: "center",
        color: "white",
        p: 2,
      }}
      id="home"
    >
      <Box sx={{ position: "absolute", left: "22%", top: "36%" }}>
        <Box display={"flex"} flexDirection={"column"}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: "bold",
              mb: 2,
              px: 2, // Padding for better spacing within the background
              backgroundColor: "#f0f0f0", // Background color for clarity
              background: "linear-gradient(to right, black, #638e8a)", // Gradient text
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block", // Ensures the background color wraps the text only
            }}
          >
            MANA
          </Typography>
          <Typography
            variant="h5"
            sx={{
              mb: 4,
              px: 2,
              backgroundColor: "#f0f0f0",
              background: "linear-gradient(to right, black, #638e8a)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              display: "inline-block",
            }}
          >
            Beauty & Makeover Studio
          </Typography>
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Button
            variant="outlined"
            sx={{
              background: "white",
              color: "black",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Call Now: +91 99634 62243
          </Button>
          <Button
            variant="outlined"
            sx={{
              background: "white",
              color: "black",
              border: "none",
              fontWeight: "bold",
            }}
          >
            Book Online
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default MainSection;
