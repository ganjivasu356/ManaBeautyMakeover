import React from "react";
import { Box, Typography, Button, Card, CardContent } from "@mui/material";
import HairClean from "../../Assets/HairClean.jpeg";
import ChairsImage from "../../Assets/Chairs.jpeg";
import massageImg from "../../Assets/FaceMassage.jpeg";

const AboutSection = () => {
  return (
    <Box sx={{ mt: 4 }} id="about">
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
          <Card sx={{ p: 2, boxShadow: 3, position: "relative", left: "8%" }}>
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
              {/* <Typography variant="body1" gutterBottom>
                It is our goal to ensure every customer leaves feeling like
                their best self thanks to our team of skilled professionals. Our
                goal at Adorn & Admire isn’t just to make people look good; we
                are also dedicated to creating happiness.
              </Typography> */}
              <Button
                variant="outlined"
                sx={{
                  background: "white",
                  color: "black",
                  fontWeight: "bold",
                  borderColor: "black",
                  marginTop: "8px",
                }}
              >
                Read More
              </Button>
            </CardContent>
          </Card>
        </Box>
        <Box sx={{ flex: 1 }}>
          <img
            src={HairClean} // Replace with your image URL
            alt="Hair Styling"
            style={{ width: "630px", height: "480px", borderRadius: "8px" }}
          />
        </Box>
      </Box>

      {/* Experience Section */}
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
          src={ChairsImage} // Replace with your first image URL
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
          src={massageImg} // Replace with your second image URL
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
              sx={{ margin: "0 10px", backgroundColor: "#638e8a" }}
            >
              MANA Beauty & Makeover Salon
            </Button>
            <Button
              variant="outlined"
              color="primary"
              sx={{
                margin: "0 10px",
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
      ></Box>
    </Box>
  );
};

export default AboutSection;
