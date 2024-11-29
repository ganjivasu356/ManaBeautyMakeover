import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/system";

const GenericBookAppointment = ({ open, setOpen, handleClose }) => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const today = new Date().toISOString().split("T")[0];

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    date: today, // Default to today's date
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear error for the field being updated
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required.";
    if (!formData.mobile.trim()) {
      newErrors.mobile = "Mobile number is required.";
    } else if (!/^\d{10}$/.test(formData.mobile.trim())) {
      newErrors.mobile = "Enter a valid 10-digit mobile number.";
    }
    return newErrors;
  };

  const handleSubmit = () => {
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Appointment Details:", formData);
    alert("Appointment request sent!");
    setOpen(false);
    resetFormState();
  };

  const resetFormState = () => {
    setFormData({ name: "", mobile: "", date: today });
    setErrors({});
  };

  const handleDialogClose = () => {
    resetFormState();
    handleClose();
  };

  return (
    <Dialog
      open={open}
      onClose={handleDialogClose}
      fullWidth
      maxWidth="sm" // Adjust width for responsiveness
      PaperProps={{
        sx: {
          p: 2, // Add padding
          borderRadius: isMobile ? 2 : 3, // Rounded corners, adjust for mobile
        },
      }}
    >
      <DialogTitle
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.25rem", sm: "1.5rem" },
          fontWeight: "bold",
        }}
      >
        Book an Appointment
      </DialogTitle>
      <DialogContent>
        <TextField
          margin="normal"
          label="Name"
          name="name"
          fullWidth
          value={formData.name}
          onChange={handleChange}
          error={!!errors.name}
          helperText={errors.name}
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        />
        <TextField
          margin="normal"
          label="Mobile Number"
          name="mobile"
          fullWidth
          value={formData.mobile}
          onChange={handleChange}
          error={!!errors.mobile}
          helperText={errors.mobile}
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        />
        <TextField
          margin="normal"
          type="date"
          name="date"
          fullWidth
          value={formData.date}
          onChange={handleChange}
          slotProps={{
            input: {
              min: today, // Prevent selecting past dates
            },
          }}
          sx={{ fontSize: { xs: "0.9rem", sm: "1rem" } }}
        />
      </DialogContent>
      <DialogActions
        sx={{
          flexDirection: isMobile ? "column" : "row",
          justifyContent: "center",
          gap: 2,
          p: 2,
        }}
      >
        <Button
          onClick={handleDialogClose}
          variant="outlined"
          sx={{
            width: isMobile ? "100%" : "auto",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            padding: { xs: "0.5rem 1rem", sm: "0.75rem 2rem" },
          }}
        >
          Cancel
        </Button>
        <Button
          onClick={handleSubmit}
          variant="contained"
          sx={{
            width: isMobile ? "100%" : "auto",
            fontSize: { xs: "0.9rem", sm: "1rem" },
            padding: { xs: "0.5rem 1rem", sm: "0.75rem 2rem" },
          }}
        >
          Submit
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default GenericBookAppointment;
