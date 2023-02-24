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
import { IconButton } from "@mui/material";
import Edit from "./Edit";

import { useNavigate } from "react-router-dom";

export default function DataTable({ assets, setAssets }) {
  const [update, setUpdate] = useState(-1);

  const navigate = useNavigate();

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
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell style={{ fontWeight: 700 }} align="left">
                No
              </TableCell>
              <TableCell style={{ fontWeight: 700 }}>Asset Name</TableCell>
              <TableCell style={{ fontWeight: 700 }} align="left">
                Asset Tag
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="left">
                Serial Number
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="left">
                Model
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="left">
                Category
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="left">
                Status
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="left">
                Assigned To
              </TableCell>
              <TableCell style={{ fontWeight: 700 }} align="left">
                Location
              </TableCell>

              <TableCell
                style={{ fontWeight: 700, whiteSpace: "nowrap" }}
                align="left"
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {assets.map((row) =>
              update === row.id ? (
                <Edit row={row} setAssets={setAssets} assets={assets} />
              ) : (
                <TableRow
                  className={row.status === "lost" ? "lost" : null}
                  key={row.name}
                  sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    {row.id}
                  </TableCell>
                  <TableCell component="th" scope="row">
                    {row.assetName}
                  </TableCell>
                  <TableCell align="left">{row.assetTag}</TableCell>
                  <TableCell align="left">{row.serialNumber}</TableCell>
                  <TableCell align="left">{row.model}</TableCell>
                  <TableCell align="left">{row.category}</TableCell>
                  <TableCell align="left">{row.status}</TableCell>
                  <TableCell align="left">{row.assigned}</TableCell>
                  <TableCell align="left">{row.location}</TableCell>

                  <TableCell align="left">
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
    </>
  );
}
