import React, { useState } from "react";
import {
  Card,
  CardActions,
  CardContent,
  Collapse,
  Button,
  Typography,
  Rating,
  useTheme,
} from "@mui/material";

export const ProductCard = ({ product, isNotMobile }) => {
  const { _id, name, description, price, rating, category, supply, stat } =
    product;
  const theme = useTheme();
  const [seeMore, setSeeMore] = useState(false);

  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.alt,
        borderRadius: "0.55rem",
        mb: isNotMobile ? "0" : "1.5rem",
      }}
    >
      <CardContent>
        <Typography
          sx={{ fontSize: "14px" }}
          color={theme.palette.secondary[700]}
        >
          {category}
        </Typography>

        <Typography variant="h5">{name}</Typography>

        <Typography color={theme.palette.secondary[500]} sx={{ mb: "1.5rem" }}>
          ${price}
        </Typography>

        <Rating value={rating} readOnly></Rating>

        <Typography variant="body2">{description}</Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="primary"
          size="small"
          onClick={() => setSeeMore(!seeMore)}
        >
          See more...
        </Button>
      </CardActions>
      <Collapse in={seeMore} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography>id: {_id}</Typography>
          <Typography>Supply left: {supply}</Typography>
          <Typography>Yearly Sales: {stat[0].yearlySalesTotal}</Typography>
          <Typography>
            Yearly Units sold: {stat[0].yearlyTotalSoldUnits}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};
