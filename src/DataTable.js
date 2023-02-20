import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { Button, IconButton } from "@mui/material";
import Edit from "./Edit";
import AddIcon from "@mui/icons-material/Add";
import AddItem from "./AddItem";

export default function DataTable({ assets, setAssets }) {
  const [update, setUpdate] = useState(-1);
  function handleUpdate(id) {
    setUpdate(id);
  }

  function handleDelete(id) {
    const url = "http://localhost:4000/assets/";
    fetch(`${url}/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then(() => {
        const newAssetList = assets.filter((item) => item.id !== id);

        setAssets(newAssetList);
      });
  }
  return (
    <TableContainer component={Paper} pageSize={5} rowsPerPageOptions={[5]}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Asset Name</TableCell>
            <TableCell align="right">Asset Tag</TableCell>
            <TableCell align="right">Serial Number</TableCell>
            <TableCell align="right">Model</TableCell>
            <TableCell align="right">Category</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Assigned To</TableCell>
            <TableCell align="right">Location</TableCell>
            <TableCell align="right">Purchase Cost</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {assets.map((row) =>
            update === row.id ? (
              <Edit row={row} setAssets={setAssets} assets={assets} />
            ) : (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.assetName}
                </TableCell>
                <TableCell align="right">{row.assetTag}</TableCell>
                <TableCell align="right">{row.serialNumber}</TableCell>
                <TableCell align="right">{row.model}</TableCell>
                <TableCell align="right">{row.category}</TableCell>
                <TableCell
                  align="right"
                  className={row.status === "lost" ? "lost" : null}
                >
                  {row.status}
                </TableCell>
                <TableCell align="right">{row.assigned}</TableCell>
                <TableCell align="right">{row.location}</TableCell>
                <TableCell align="right">{row.purchaseCost}</TableCell>
                <TableCell align="right">
                  <IconButton
                    aria-label="edit"
                    onClick={() => handleUpdate(row.id)}
                  >
                    <EditIcon />
                  </IconButton>
                  <IconButton
                    aria-label="delete"
                    onClick={() => handleDelete(row.id)}
                  >
                    <DeleteIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
