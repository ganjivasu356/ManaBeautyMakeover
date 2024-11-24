import React from "react";
import { Box, Typography, Button, Card, Divider } from "@mui/material";
import AppointeMentOneImg from "../../Assets/AppointmentOne.jpeg";
import AppointementTwoImg from "../../Assets/AppointMentTwo.jpeg";

const AppointmentSection = () => {
  return (
    <Box sx={{ mt: 4 }}>
      {/* Image Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        width="100%"
        height={{ xs: "auto", md: "500px" }}
        position="relative"
      >
        {/* First Image */}
        <Box
          component="img"
          src={AppointementTwoImg}
          alt="Salon Interior"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "300px", md: "100%" },
            objectFit: "cover",
          }}
        />

        {/* Second Image */}
        <Box
          component="img"
          src={AppointeMentOneImg}
          alt="Spa Treatment"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: { xs: "300px", md: "100%" },
            objectFit: "cover",
          }}
        />

        {/* Overlay Content */}
        <Card
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            zIndex: 2,
            width: { xs: "90%", sm: "70%", md: "40%" },
            textAlign: "center",
            p: 3,
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Working Hours
          </Typography>
          <Box
            display="flex"
            flexDirection={{ xs: "column", sm: "row" }}
            gap={2}
            justifyContent="center"
            sx={{ mb: 2 }}
          >
            <Typography variant="body1" gutterBottom>
              Monday – Sunday
            </Typography>
            <Typography variant="body1" gutterBottom>
              09:30 AM – 10:00 PM
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "black" }} />

          <Box sx={{ m: 2 }}>
            <Typography variant="h4" gutterBottom>
              Appointments
            </Typography>
            <Typography variant="body1" gutterBottom>
              MIG II 96, 9th Phase KPHB Colony, Kukatpally, Hyderabad, Telangana
              - 500085.
            </Typography>
          </Box>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mx: 1, backgroundColor: "#638e8a" }}
            >
              Book An Appointment
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AppointmentSection;
