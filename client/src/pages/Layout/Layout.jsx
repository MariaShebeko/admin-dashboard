import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Sidebar } from "components/Sidebar";

export default function Layout() {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <Box width="100%" height="100%" display={isNotMobile ? "flex" : "block"}>
      <Sidebar
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNotMobile={isNotMobile}
      />
      <Box width="100%">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
}
