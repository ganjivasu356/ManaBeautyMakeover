import { Box } from "@mui/material";
import React from "react";
// Import the image if using Webpack or similar bundler
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import MainSection from "./MainSection";
import AppointmentSection from "./AppointmentSection";

const HomePage = () => {
  return (
    <Box>
      <MainSection />
      <AboutSection />
      <ServicesSection />
      <AppointmentSection />
    </Box>
  );
};

export default HomePage;
