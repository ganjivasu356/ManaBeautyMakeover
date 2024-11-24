import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import { Divider } from "@mui/material";
import Footer from "./components/Footer";

const AppLayout: React.FC = () => {
  return (
    <>
      <Header />
      <Divider sx={{ backgroundColor: "white", marginTop: "12px" }} />
      <Outlet />
      <Footer />
    </>
  );
};

export default AppLayout;
