import React from "react";
import { Search } from "@mui/icons-material";
import { IconButton, TextField, InputAdornment } from "@mui/material";
import {
  GridToolbarContainer,
  GridToolbarColumnsButton,
  GridToolbarExport,
  GridToolbarDensitySelector,
} from "@mui/x-data-grid";
import FlexBetween from "components/FlexBetween";

export const CustomToolbar = ({
  onInputSearch,
  setOnInputSearch,
  setSearch,
}) => {
  return (
    <GridToolbarContainer>
      <FlexBetween>
        <GridToolbarColumnsButton />
        <GridToolbarDensitySelector />
        <GridToolbarExport />
      </FlexBetween>
      <TextField
        label="Search"
        sx={{ ml: "auto", mb: "0.5rem", width: "20rem" }}
        value={onInputSearch}
        onChange={(e) => setOnInputSearch(e.target.value)}
        variant="standard"
        InputProps={{
          endAdornment: (
            <InputAdornment>
              <IconButton
                onClick={() => {
                  setSearch(onInputSearch);
                  setOnInputSearch("");
                }}
              >
                <Search />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </GridToolbarContainer>
  );
};
