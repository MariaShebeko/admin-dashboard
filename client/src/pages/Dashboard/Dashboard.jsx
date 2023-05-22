import React from "react";
import FlexBetween from "components/FlexBetween";
import { Header } from "components/Header";
import { DownloadOutlined, Email, PointOfSale } from "@mui/icons-material";
import { Box, Button, useTheme, useMediaQuery } from "@mui/material";
import { OverviewChart } from "components/OverviewChart";
import { StatBox } from "components/StatBox";
import { useGetDashboardQuery } from "services/api";

export const Dashboard = () => {
  const theme = useTheme();
  const isNonMediumScreen = useMediaQuery("(min-width: 1200px");
  const { data, isLoading } = useGetDashboardQuery();

  return (
    <Box m="1.5rem 2.5rem">
      <FlexBetween>
        <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />

        <Box>
          <Button
            sx={{
              backgroundColor: theme.palette.secondary.light,
              fontSize: "14px",
              fontWeight: "bold",
              padding: "10px 20px",
            }}
          >
            <DownloadOutlined sx={{ mr: "10px" }} />
            Download the reports
          </Button>
        </Box>
      </FlexBetween>

      <Box
        mt="20px"
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="160px"
        gap="20px"
        sx={{
          "&>div": { gridColumn: isNonMediumScreen ? undefined : "span 12" },
        }}
      >
        {/* row 1 */}
        <StatBox
          title="Total Customers"
          value={data?.totalCustomers}
          icon={<Email sx={{ color: theme.palette.secondary[300] }} />}
        />

        <StatBox
          title="Today Sales"
          value={data?.currentDayData.totalSales}
          icon={<PointOfSale sx={{ color: theme.palette.secondary[300] }} />}
        />

        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={theme.palette.background.alt}
          borderRadius="0.5rem"
        >
          <OverviewChart view="sales" isDashboard={true} />
        </Box>

        <StatBox
          title="Monthly Sales"
          value={data?.currentMonthData.totalSales}
          icon={<PointOfSale sx={{ color: theme.palette.secondary[300] }} />}
        />

        <StatBox
          title="Yearly Sales"
          value={data?.yearlySalesTotal}
          icon={<PointOfSale sx={{ color: theme.palette.secondary[300] }} />}
        />

        {/* row 2 */}
      </Box>
    </Box>
  );
};
