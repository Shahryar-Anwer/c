import Box from "@mui/material/Box";
import { DataGridPro } from "@mui/x-data-grid-pro";

export default function SubGrid({ row }) {
  const columns = [
    { field: "id", headerName: "Leg ID", width: 200 },
    { field: "side", headerName: "Leg Side", width: 200 },
    { field: "optionDesc", headerName: "Description", width: 200 },
    {
      field: "putOrCall",
      headerName: "Put/Call",
      width: 200,
      valueGetter: (value) => {
        if (value === 0) {
          return "Put";
        }
        return "Call";
      },
    },
    {
      field: "strikePrice",
      type: "number",
      headerName: "Strike",
      headerAlign: "left",
      width: 200,
    },
    {
      field: "expiryDate",
      headerName: "Expiry",
      width: 200,
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "ratio",
      headerName: "Ratio",
      width: 200
    },
    {
      field: "quantity",
      headerName: "Quantity",
      width: 200
    },
  ];

  return (
    <Box sx={{ width: "100%", height: 400 }}>
      <DataGridPro columns={columns} rows={row} />
    </Box>
  );
}
