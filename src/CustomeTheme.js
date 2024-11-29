import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#638e8a", // Primary button background color
      contrastText: "#fff", // Text color for primary buttons
    },
    secondary: {
      main: "#638e8a", // Secondary button background color
      contrastText: "#fff", // Text color for secondary buttons
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Remove uppercase transformation
          borderRadius: "8px", // Add a custom border radius
          fontWeight: "bold", // Make buttons bold
        },
        containedPrimary: {
          backgroundColor: "#638e8a",
          "&:hover": {
            backgroundColor: "#557d75", // Darker shade on hover
          },
        },
        outlinedPrimary: {
          color: "#638e8a",
          borderColor: "#638e8a",
          "&:hover": {
            borderColor: "#557d75",
            backgroundColor: "rgba(99, 142, 138, 0.1)", // Light background on hover
          },
        },
        containedSecondary: {
          backgroundColor: "#638e8a",
          "&:hover": {
            backgroundColor: "#557d75", // Darker shade on hover
          },
        },
        outlinedSecondary: {
          color: "#638e8a",
          borderColor: "#638e8a",
          "&:hover": {
            borderColor: "#557d75",
            backgroundColor: "rgba(99, 142, 138, 0.1)", // Light background on hover
          },
        },
      },
    },
  },
});
