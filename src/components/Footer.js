import React from "react";
import { Box, Typography, Link } from "@mui/material";
import {
  Email,
  Facebook,
  Phone,
  Room,
  YouTube,
  Instagram,
} from "@mui/icons-material";
import { menuItems } from "../utility/constants";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        color: "#000",
        py: 4,
        px: { xs: 2, sm: 6 },
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        justifyContent: "space-between",
        alignItems: { xs: "center", md: "flex-start" },
        gap: { xs: 4, md: 6 },
        textAlign: { xs: "center", md: "left" },
      }}
      id="contactUs"
    >
      {/* Logo and Description */}
      <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "25%" } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          MANA Beauty & Makeover Studio
        </Typography>
        <Typography variant="body2" sx={{ mt: 1 }}>
          Our mission is to create a luxurious and transformative experience,
          leaving our clients feeling not just pampered, but truly radiant and
          inspired.
        </Typography>
        <Box
          sx={{
            mt: 2,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
            gap: 2,
          }}
        >
          <Link
            href="https://www.facebook.com/share/p/15G9fkzBDm/"
            target="_blank"
            sx={{ textDecoration: "none", color: "#000" }}
          >
            <Facebook sx={{ fontSize: 28 }} />
          </Link>
          <Link
            href="https://www.youtube.com/@manabeautyandmakeoverstudio"
            target="_blank"
            sx={{ textDecoration: "none", color: "#000" }}
          >
            <YouTube sx={{ fontSize: 28 }} />
          </Link>
          <Link
            href="https://www.instagram.com/manabeautyandmakeoverstudio/profilecard/?igsh=OGV2eDd3c2w0cGVz"
            target="_blank"
            sx={{ textDecoration: "none", color: "#000" }}
          >
            <Instagram sx={{ fontSize: 28 }} />
          </Link>
        </Box>
      </Box>

      {/* Quick Links */}
      <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "20%" } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Quick Links
        </Typography>
        {menuItems.map((item) => (
          <Link
            // href="#"
            key={item}
            sx={{
              display: "block",
              mt: 1,
              textDecoration: "none",
              color: "#000",
            }}
          >
            {item.title}
          </Link>
        ))}
      </Box>

      {/* Services */}
      <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "20%" } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Services
        </Typography>
        {["Hair Services", "Skin Services", "Nail Services"].map((service) => (
          <Typography key={service} sx={{ mt: 1 }}>
            {service}
          </Typography>
        ))}
      </Box>

      {/* Contact Us */}
      <Box sx={{ flex: 1, maxWidth: { xs: "100%", md: "25%" } }}>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Contact Us
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Room sx={{ mr: 1 }} />
          <Typography variant="body2">
            MIG II 96, 9th phase KPHB Colony, Kukatpally, HYDERABAD, Telangana -
            500085.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Phone sx={{ mr: 1 }} />
          <Typography variant="body2">
            +91 99634 62243 | +91 76718 07502
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            mt: 1,
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Email sx={{ mr: 1 }} />
          <Typography variant="body2">
            manabeautyandmakeoverstudio@gmail.com
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
