import React from "react";
import { Box, useTheme, useMediaQuery } from "@mui/material";
import { Header } from "components/Header";
import { ProductCard } from "./ProductCard";
import { useGetProductsQuery } from "services/api";

export const Products = () => {
  const { data, isLoading } = useGetProductsQuery();

  const theme = useTheme();

  const isNotMobile = useMediaQuery("(min-width: 1000px)");

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="PRODUCTS" subtitle="See your list of products" />
      {data || !isLoading ? (
        <Box
          mt="20px"
          display={isNotMobile ? "grid" : "block"}
          gridTemplateColumns="repeat(4, minmax(0, 1fr))"
          gap="0.5rem"
        >
          {data.map((item) => (
            <ProductCard
              product={item}
              key={item._id}
              isNotMobile={isNotMobile}
            />
          ))}
        </Box>
      ) : (
        <>Loading...</>
      )}
    </Box>
  );
};
