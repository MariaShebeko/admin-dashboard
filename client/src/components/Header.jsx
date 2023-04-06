import React from "react";
import { Typography, Box, useTheme } from "@mui/material";

export const Header = ({ title, subtitle }) => {
  const theme = useTheme();
  return (
    <Box>
      <Typography
        variant="h2"
        fontWeight="bold"
        color={theme.palette.secondary[100]}
        sx={{ mb: "5px" }}
      >
        {title}
      </Typography>
      <Typography variant="h5" color={theme.palette.secondary[200]}>
        {subtitle}
      </Typography>
    </Box>
  );
};
