import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import { useForm, Controller } from "react-hook-form";
import { DataGridPro, useGridApiContext } from "@mui/x-data-grid-pro";
import { randomEmail } from "@mui/x-data-grid-generator";
import DataGridSubGrid2_1 from "./DataGridSubGrid2_1";
import DataGridSubGrid2_2 from "./DataSubGrid2_2";

const columns = [
  { field: "id", headerName: "Account" },
  { field: "unrealizedPnl", headerName: "Unrealized PNL", width: 200 },
  { field: "realizedPnl", headerName: "Realized PNL", width: 200 },
  { field: "totalPnl", headerName: "Total PNL", width: 200 },
  { field: "totalCost", headerName: "Total Cost", width: 200 },
  { field: "qtyBought", headerName: "Qty Bought", width: 200 },
  { field: "qtySold", headerName: "Qty Sold", width: 200 },
  { field: "qtyShorted", headerName: "Qty Shorted", width: 200 },
];

const rows = [
  {
    id: 1.1,
    unrealizedPnl: "-$123456",
    realizedPnl: "-$3,457.57",
    totalPnl: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: 500,
    qtyShorted: 200,
  },
  {
    id: 1.2,
    unrealizedPnl: "-$3,457.57",
    realizedPnl: "-$3,457.57",
    totalPnl: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: 500,
    qtyShorted: 200,
  },
  {
    id: 1.3,
    unrealizedPnl: "-$3,457.57",
    realizedPnl: "-$3,457.57",
    totalPnl: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: 500,
    qtyShorted: 200,
  },
  {
    id: 1.4,
    unrealizedPnl: "-$3,457.57",
    realizedPnl: "-$3,457.57",
    totalPnl: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: 500,
    qtyShorted: 200,
  },
  {
    id: 1.5,
    unrealizedPnl: "-$3,457.57",
    realizedPnl: "-$3,457.57",
    totalPnl: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: 500,
    qtyShorted: 200,
    /* email: randomEmail(), */
  },
];

export default function GridDemo3() {
  const getDetailPanelContent = React.useCallback(
    ({ row }) => <DataGridSubGrid2_2 row={row} />,
    []
  );

  const getDetailPanelHeight = React.useCallback(() => 240, []);
  return (
    <Box sx={{ width: "100%", height: 1000 }}>
      <DataGridPro
        columns={columns}
        rows={rows}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
      />
    </Box>
  );
}
