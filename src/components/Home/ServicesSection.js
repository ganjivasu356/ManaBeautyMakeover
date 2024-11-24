import React from "react";
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Tabs,
  Tab,
} from "@mui/material";
import HairServiceTwo from "../../Assets/HairServiceTwo.jpeg";
import SkinServiceTwo from "../../Assets/SkinServiceTwo.jpeg";
import NailService from "../../Assets/NailService.jpeg";
import MakeUpSerivce from "../../Assets/MakeUpSerivce.jpeg";

const services = {
  Women: [
    {
      title: "Hair Service",
      description:
        "Transform your look and indulge in luxury with bespoke beauty treatments crafted to celebrate your unique charm.",
      image: HairServiceTwo, // Replace with actual image URL
    },
    {
      title: "Skin Service",
      description:
        "Experience premium skincare solutions, expertly curated for women, to nurture and enhance your natural radiance.",
      image: SkinServiceTwo, // Replace with actual image URL
    },
    {
      title: "Nail Service",
      description:
        "Treat yourself to a personalized manicure, designed specifically for women, and enjoy a luxurious nail care experience.",
      image: NailService, // Replace with actual image URL
    },
    {
      title: "Makeup",
      description:
        "Unleash your inner beauty with our professional makeup services, carefully crafted to accentuate your unique features.",
      image: MakeUpSerivce, // Replace with actual image URL
    },
  ],
};

const ServicesSection = () => {
  const [selectedTab, setSelectedTab] = React.useState("Women");

  const handleTabChange = (event, newValue) => {
    setSelectedTab(newValue);
  };

  return (
    <Box sx={{ padding: 4 }} id="services">
      <Typography variant="h4" align="center" gutterBottom>
        Our Services
      </Typography>
      <Tabs
        value={selectedTab}
        onChange={handleTabChange}
        centered
        sx={{
          marginBottom: 4,
          "& .MuiTabs-indicator": {
            backgroundColor: "white", // Sets the underline color to white
          },
        }}
      >
        <Tab
          label="Women"
          value="Women"
          sx={{
            color: "rgba(255, 255, 255, 0.7)", // Default text color for unselected tabs
            "&.Mui-selected": {
              color: "white", // Text color for the selected tab
            },
          }}
        />
        {/* <Tab
    label="Men"
    value="Men"
    sx={{
      color: "rgba(255, 255, 255, 0.7)",
      "&.Mui-selected": {
        color: "white",
      },
    }}
  /> */}
      </Tabs>

      <Box display="flex" flexWrap="wrap" justifyContent="center" gap={4}>
        {services[selectedTab].map((service, index) => (
          <Card
            key={index}
            sx={{
              maxWidth: 280,
              textAlign: "center",
              boxShadow: 3,
              borderRadius: 2,
            }}
          >
            <CardMedia
              component="img"
              height="140"
              image={service.image}
              alt={service.title}
            />
            <CardContent>
              <Typography
                variant="h6"
                component="div"
                sx={{ fontWeight: "bold" }}
              >
                {service.title}
              </Typography>
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{ marginBottom: 1 }}
              >
                {service.description}
              </Typography>
            </CardContent>
            <Button
              size="small"
              variant="contained"
              sx={{
                mb: 2,
                backgroundColor: "#638e8a",
                color: "#fff",
                textTransform: "none",
                "&:hover": { backgroundColor: "#444" },
              }}
            >
              Read More
            </Button>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default ServicesSection;
