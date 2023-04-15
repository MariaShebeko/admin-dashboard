import React, { useState } from "react";
import { Box, useMediaQuery } from "@mui/material";
import { Outlet } from "react-router-dom";
import { Navbar } from "components/Navbar";
import { Sidebar } from "components/Sidebar";
import { useGetUserQuery } from "services/api";
import { useSelector } from "react-redux";

export const Layout = () => {
  const isNotMobile = useMediaQuery("(min-width:600px)");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const userId = useSelector((state) => state.theme.userId);
  const { data } = useGetUserQuery(userId);

  return (
    <Box width="100%" height="100%" display={isNotMobile ? "flex" : "block"}>
      <Sidebar
        user={data || {}}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        isNotMobile={isNotMobile}
      />
      <Box flexGrow={1}>
        <Navbar
          user={data || {}}
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <Outlet />
      </Box>
    </Box>
  );
};
