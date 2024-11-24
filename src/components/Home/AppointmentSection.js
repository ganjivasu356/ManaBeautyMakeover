import React from "react";
import { Box, Typography, Button, Card, Divider } from "@mui/material";
import AppointeMentOneImg from "../../Assets/AppointmentOne.jpeg";
import AppointementTwoImg from "../../Assets/AppointMentTwo.jpeg";

const AppointmentSection = () => {
  return (
    <Box>
      <Box
        display="flex"
        width="100%"
        height="500px"
        position="relative"
        sx={{ mt: 4 }}
      >
        {/* First Image */}
        <Box
          component="img"
          src={AppointementTwoImg} // Replace with your second image URL
          alt="Salon Interior"
          sx={{
            width: "50%",
            height: "100%",
            objectFit: "cover",
          }}
        />

        {/* Second Image */}
        <Box
          component="img"
          src={AppointeMentOneImg} // Replace with your first image URL
          alt="Spa Treatment"
          sx={{
            width: "50%",
            height: "100%",
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
            width: { xs: "90%", sm: "60%", md: "40%" },
            textAlign: "center",
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Working Hours
          </Typography>
          <Box
            display={"flex"}
            flexDirection={"row"}
            gap={2}
            justifyContent={"center"}
            sx={{ mb: 2 }}
          >
            <Typography variant="body1" gutterBottom>
              Monday – Sunday
            </Typography>
            <Typography variant="body1" gutterBottom>
              09:30 AM – 10:00PM
            </Typography>
          </Box>
          <Divider sx={{ backgroundColor: "black" }} />

          <Box sx={{ m: 2 }}>
            <Typography variant="h4" gutterBottom>
              Appoitments
            </Typography>
            <Typography variant="body1" gutterBottom>
              MIG II 96,9th phase KPHB Colony, Kukatpally, HYDERABAD, Telangana
              - 500085.
            </Typography>
          </Box>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ margin: "0 10px", backgroundColor: "#638e8a" }}
            >
              Book An Appoitment
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  );
};

export default AppointmentSection;
