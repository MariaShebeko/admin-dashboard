import React, { useState, useEffect } from "react";
import {
  Box,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import {
  ChevronLeft,
  ChevronRightOutlined,
  HomeOutlined,
  ShoppingCartOutlined,
  Groups2Outlined,
  ReceiptLongOutlined,
  PublicOutlined,
  PointOfSaleOutlined,
  TodayOutlined,
  CalendarMonthOutlined,
  AdminPanelSettingsOutlined,
  TrendingUpOutlined,
  PieChartOutlined,
} from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import FlexBetween from "./FlexBetween";

const navItems = [
  {
    text: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    text: "Client Facing",
    icon: null,
  },
  {
    text: "Products",
    icon: <ShoppingCartOutlined />,
  },
  {
    text: "Customers",
    icon: <Groups2Outlined />,
  },
  {
    text: "Transactions",
    icon: <ReceiptLongOutlined />,
  },
  {
    text: "Geography",
    icon: <PublicOutlined />,
  },
  {
    text: "Sales",
    icon: null,
  },
  {
    text: "Overview",
    icon: <PointOfSaleOutlined />,
  },
  {
    text: "Daily",
    icon: <TodayOutlined />,
  },
  {
    text: "Monthly",
    icon: <CalendarMonthOutlined />,
  },
  {
    text: "Breakdown",
    icon: <PieChartOutlined />,
  },
  {
    text: "Management",
    icon: null,
  },
  {
    text: "Admin",
    icon: <AdminPanelSettingsOutlined />,
  },
  {
    text: "Performance",
    icon: <TrendingUpOutlined />,
  },
];

export const Sidebar = ({ isSidebarOpen, setIsSidebarOpen, isNotMobile }) => {
  const theme = useTheme();
  const location = useLocation();
  const navigate = useNavigate();
  const [active, setActive] = useState("");

  useEffect(() => {
    setActive(location.pathname.substring(1));
  }, [location.pathname]);

  return (
    <Box component="nav">
      {isSidebarOpen && (
        <Drawer
          open={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
          variant="persistent"
          anchor="left"
          sx={{
            width: "250px",
            "& .MuiDrawer-paper": {
              color: theme.palette.secondary[200],
              backgroundColor: theme.palette.background.alt,
              boxSizing: "border-box",
              borderWidth: isNotMobile ? 0 : "2px",
              width: "250px",
            },
          }}
        >
          <Box width="100%">
            <Box>
              <FlexBetween color={theme.palette.secondary.main}>
                <Typography variant="h4" fontWeight="bold">
                  My app
                </Typography>
                {!isNotMobile && (
                  <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
                    <ChevronLeft />
                  </IconButton>
                )}
              </FlexBetween>

              <List>
                {navItems.map(({ text, icon }) => {
                  const lowerText = text.toLowerCase();
                  if (!icon) {
                    return (
                      <Typography key={text} sx={{ m: "2.25rem 0 1rem 3rem" }}>
                        {text}
                      </Typography>
                    );
                  }
                  return (
                    <ListItem key={text} disablePadding>
                      <ListItemButton
                        onClick={() => {
                          navigate(`/${lowerText}`);
                          setActive(lowerText);
                        }}
                        sx={{
                          backgroundColor:
                            active === lowerText
                              ? theme.palette.secondary[300]
                              : "transparent",
                          color:
                            active === lowerText
                              ? theme.palette.primary[600]
                              : theme.palette.secondary[200],
                        }}
                      >
                        <ListItemIcon
                          sx={{
                            ml: "2rem",
                            color:
                              active === lowerText
                                ? theme.palette.primary[600]
                                : theme.palette.secondary[200],
                          }}
                        >
                          {icon}
                        </ListItemIcon>
                        <ListItemText primary={text} />
                        {active === lowerText && <ChevronRightOutlined />}
                      </ListItemButton>
                    </ListItem>
                  );
                })}
              </List>
            </Box>
          </Box>
        </Drawer>
      )}
    </Box>
  );
};
