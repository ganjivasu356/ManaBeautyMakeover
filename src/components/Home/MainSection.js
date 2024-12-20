import React, { useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import homeImage from "../../Assets/home.jpeg";
import GenericBookAppointment from "../Generic/GenericBookAppointment";

const MainSection = () => {
  const [openAppointment, setOpenAppointment] = useState(false);
  const handleOpen = () => setOpenAppointment(true);
  const handleClose = () => setOpenAppointment(false);

  return (
    <>
      <Box
        sx={{
          position: "relative",
          height: { xs: "80vh", sm: "60vh" }, // Taller for smaller screens
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
        <Box
          sx={{
            position: "absolute",
            left: { xs: "10%", sm: "22%" }, // Adjust position for smaller screens
            top: { xs: "30%", sm: "36%" },
            width: { xs: "80%", sm: "auto" }, // Adjust width for mobile
          }}
        >
          <Box display="flex" flexDirection="column">
            <Typography
              variant="h2"
              sx={{
                fontWeight: "bold",
                mb: 2,
                px: 2,
                color: "#638e8a",
                textShadow: "white 1px 1px",
                // background: "linear-gradient(to right, black, #638e8a)",
                WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                display: "inline-block",
                fontSize: { xs: "2rem", sm: "3rem", md: "4rem" }, // Responsive font size
              }}
            >
              MANA
            </Typography>
            <Typography
              variant="h5"
              sx={{
                mb: 4,
                px: 2,
                color: "#638e8a",
                textShadow: "white 1px 1px",
                // backgroundColor: "#f0f0f0",
                // background: "linear-gradient(to right, black, #638e8a)",
                WebkitBackgroundClip: "text",
                // WebkitTextFillColor: "transparent",
                display: "inline-block",
                fontSize: { xs: "1rem", sm: "1.5rem", md: "1.75rem" }, // Responsive font size
              }}
            >
              Beauty & Makeover Studio
            </Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" }, // Stack buttons on mobile
              gap: 2,
              justifyContent: "center", // Center-align buttons on mobile
            }}
          >
            <Button
              component="a"
              href="tel:+919963462243"
              sx={{
                background: "white",
                color: "black",
                border: "none",
                fontWeight: "bold",
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
                textDecoration: "none", // Ensures no underline
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
                px: { xs: 2, sm: 3 },
                py: { xs: 1, sm: 1.5 },
                fontSize: { xs: "0.8rem", sm: "1rem" }, // Responsive font size
              }}
              onClick={handleOpen}
            >
              Book An Appointment
            </Button>
          </Box>
        </Box>
      </Box>
      <GenericBookAppointment
        open={openAppointment}
        setOpen={setOpenAppointment}
        handleClose={handleClose}
      />
    </>
  );
};

export default MainSection;
