import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { useGetTransactionsQuery } from "services/api";
import { Header } from "components/Header";
import { Box, useTheme } from "@mui/material";
import { CustomToolbar } from "./CustomToolbar";

export const Transactions = () => {
  const theme = useTheme();

  const [page, setPage] = useState(0);
  console.log("🚀 ~ file: Transactions.jsx:12 ~ Transactions ~ page:", page);
  const [pageSize, setPageSize] = useState(20);
  const [sort, setSort] = useState({});
  const [search, setSearch] = useState("");
  const [onInputSearch, setOnInputSearch] = useState("");

  const { data, isLoading } = useGetTransactionsQuery({
    page,
    pageSize,
    sort: JSON.stringify(sort),
    search,
  });
  console.log("🚀 ~ file: Transactions.jsx:28 ~ Transactions ~ data:", data);

  const columns = [
    { field: "_id", headerName: "ID", flex: 1 },
    {
      field: "userId",
      headerName: "USER ID",
      flex: 1,
    },
    {
      field: "createdAt",
      headerName: "CREATED",
      flex: 1,
    },
    {
      field: "products",
      headerName: "Number of products",
      flex: 0.5,
      sortable: false,
      renderCell: (params) => params.value.length,
    },
    {
      field: "cost",
      headerName: "COST",
      flex: 1,
      renderCell: (params) => `${Number(params.value)}`,
    },
  ];

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="TRANSACTIONS" subtitle="List of transactions" />
      <Box
        height="80vh"
        mt="1.5rem"
        sx={{
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: theme.palette.primary.light,
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: theme.palette.background.alt,
            color: theme.palette.secondary[100],
          },
        }}
      >
        <DataGrid
          loading={isLoading || !data}
          initialState={{
            ...data,
            pagination: { paginationModel: { pageSize: 20, page: 0 } },
          }}
          pageSizeOptions={[20, 50, 100]}
          // rowsPerPage={[20, 50, 100]}
          getRowId={(row) => row._id}
          rows={(data && data.transactions) || []}
          columns={columns}
          rowCount={(data && data.total) || 0}
          pagination
          page={page}
          pageSize={pageSize}
          paginationMode="server"
          sortingMode="server"
          onPageChange={(newPage) => {
            console.log("newPage", newPage);
            setPage(newPage);
          }}
          onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
          onSortModelChange={(newSortModel) => setSort(...newSortModel)}
          slots={{ toolbar: CustomToolbar }}
          slotProps={{
            toolbar: { onInputSearch, setOnInputSearch, setSearch },
          }}
        />
      </Box>
    </Box>
  );
};
