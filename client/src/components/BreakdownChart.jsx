import React from "react";
import { ResponsivePie } from "@nivo/pie";
import { Box, Typography, useTheme } from "@mui/material";
import { useGetSalesQuery } from "services/api";

export const BreakdownChart = ({ isDashboard = false }) => {
  const theme = useTheme();
  const { data, isLoading } = useGetSalesQuery();

  if (!data || isLoading) return "Loading...";

  const colors = [
    theme.palette.secondary[700],
    theme.palette.secondary[600],
    theme.palette.secondary[400],
    theme.palette.secondary[200],
  ];
  const formattedData = Object.entries(data.salesByCategory).map(
    ([category, value], i) => {
      return {
        id: category,
        label: category,
        value: value,
        color: colors[i],
      };
    }
  );
  const total = data.yearlySalesTotal;
  const CenteredMetric = ({ centerX, centerY }) => {
    return (
      <text
        x={centerX}
        y={centerY}
        textAnchor="middle"
        dominantBaseline="central"
        style={{
          fontSize: "32px",
          fontWeight: 600,
          fill: theme.palette.secondary[200],
        }}
      >
        {total}
      </text>
    );
  };

  return (
    <Box height={isDashboard ? "400px" : "100%"}>
      <ResponsivePie
        data={formattedData}
        theme={{
          axis: {
            domain: {
              line: {
                stroke: theme.palette.secondary[200],
              },
            },
            legend: {
              text: {
                fill: theme.palette.secondary[200],
              },
            },
            ticks: {
              line: {
                stroke: theme.palette.secondary[200],
                strokeWidth: 1,
              },
              text: {
                fill: theme.palette.secondary[200],
              },
            },
          },
          legends: {
            text: {
              fill: theme.palette.secondary[200],
            },
          },
          tooltip: {
            container: {
              color: theme.palette.primary.main,
            },
          },
        }}
        colors={{ datum: "data.color" }}
        margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
        sortByValue={true}
        innerRadius={0.5}
        activeOuterRadiusOffset={8}
        borderWidth={1}
        borderColor={{
          from: "color",
          modifiers: [["darker", 0.2]],
        }}
        enableArcLinkLabels={!isDashboard}
        arcLinkLabelsSkipAngle={10}
        arcLinkLabelsTextColor={theme.palette.secondary[200]}
        arcLinkLabelsThickness={2}
        arcLinkLabelsColor={{ from: "color" }}
        arcLabelsSkipAngle={10}
        arcLabelsTextColor={{
          from: "color",
          modifiers: [["darker", 2]],
        }}
        layers={[
          "arcs",
          "arcLabels",
          "arcLinkLabels",
          "legends",
          CenteredMetric,
        ]}
        legends={[
          {
            anchor: "bottom",
            direction: "row",
            justify: false,
            translateX: 0,
            translateY: 56,
            itemsSpacing: 0,
            itemWidth: 100,
            itemHeight: 18,
            itemTextColor: "#999",
            itemDirection: "left-to-right",
            itemOpacity: 1,
            symbolSize: 18,
            symbolShape: "circle",
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: theme.palette.primary[500],
                },
              },
            ],
          },
        ]}
      />
    </Box>
  );
};
