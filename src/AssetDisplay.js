import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";

function AssetDisplay({ assets }) {
  const columns = [
    { field: "id", headerName: "ID", width: 20 },
    { field: "assetName", headerName: "Asset Name", width: 130 },
    { field: "assetTag", headerName: "Asset Tag", width: 130 },
    { field: "serialNumber", headerName: "Serial Number", width: 130 },

    { field: "category", headerName: "Category", width: 130 },
    { field: "model", headerName: "Model", width: 130 },
    { field: "status", headerName: "Status", width: 130 },
    { field: "assigned", headerName: "Assigned", width: 130 },
    { field: "location", headerName: "Location", width: 130 },

    { field: "acquisition_date", headerName: "Acquisition Date", width: 130 },
  ];
  const params = useParams();

  const rows = assets.map((item) => item);

  function editRow() {
    console.log(params);
  }

  return (
    <Box sx={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        onRowClick={() => editRow(rows)}
      />
    </Box>
  );
}

export default AssetDisplay;
