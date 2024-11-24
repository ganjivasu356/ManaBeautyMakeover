import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import HairClean from "../../Assets/HairClean.jpeg";
import ChairsImage from "../../Assets/Chairs.jpeg";
import massageImg from "../../Assets/FaceMassage.jpeg";

const AboutSection = () => {
  return (
    <Box sx={{ mt: 4, px: 2 }} id="about">
      {/* About Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
          alignItems: "center",
        }}
      >
        <Box sx={{ flex: 1 }}>
          <Card
            sx={{
              p: 2,
              boxShadow: 3,
              position: "relative",
              left: { xs: "0", md: "8%" }, // Center on mobile
            }}
          >
            <CardContent>
              <Typography variant="h5" fontWeight="bold" gutterBottom>
                About MANA Beauty & Makeover Studio
              </Typography>
              <Typography variant="body1" gutterBottom>
                {`At MANA, we take pride in offering an indulgent experience that
                leaves every client feeling radiant and revitalized. From
                precision haircuts and stunning hairstyles to luxurious
                manicures and more, our expert services are tailored to
                celebrate your unique beauty. Step into a relaxing atmosphere
                where your satisfaction is our top priority, and let us help you
                shine with confidence and elegance.`}
              </Typography>
              <Button
                variant="outlined"
                sx={{
                  background: "white",
                  color: "black",
                  fontWeight: "bold",
                  borderColor: "black",
                  mt: 2,
                }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img
            src={HairClean}
            alt="Hair Styling"
            style={{
              width: "100%",
              maxWidth: "600px",
              height: "auto",
              borderRadius: "8px",
            }}
          />
        </Box>
      </Box>

      {/* Experience Section */}
      <Box
        display="flex"
        flexDirection={{ xs: "column", md: "row" }}
        width="100%"
        height={{ xs: "auto", md: "500px" }}
        position="relative"
        sx={{ mt: 4 }}
      >
        {/* First Image */}
        <Box
          component="img"
          src={ChairsImage}
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
          src={massageImg}
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
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.9)",
            boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
          }}
        >
          <Typography variant="h4" component="h2" gutterBottom>
            Experience Our Space
          </Typography>
          <Typography variant="body1" gutterBottom>
            Step into a haven of elegance and rejuvenation, where beauty meets
            artistry and every moment is designed to inspire and pamper.
          </Typography>
          <Box mt={2}>
            <Button
              variant="contained"
              color="primary"
              sx={{ mx: 1, backgroundColor: "#638e8a" }}
            >
              MANA Beauty & Makeover Salon
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                mx: 1,
                color: "#638e8a",
                borderColor: "#638e8a",
              }}
            >
              MANA Beauty & Makeover Spa
            </Button>
          </Box>
        </Card>
      </Box>

      {/* Additional Images */}
      <Box
        sx={{
          mt: 4,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 4,
        }}
      />
    </Box>
  );
};

export default AboutSection;
