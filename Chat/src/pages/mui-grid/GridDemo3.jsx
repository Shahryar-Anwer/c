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
import GridDemo3SubGrid from "./GridDemo3SubGrid";
import GridDemo3SubGrid2 from "./Demo3SubGrid2"
import DataGridSubGrid2_2 from "./DataSubGrid2_2";

/*  */

const columnsTwo = [
  { field: "id", headerName: "Account" },
  { field: "unrealizedPnl", headerName: "Unrealized PNL", width: 200 },
  { field: "realizedPnl", headerName: "Realized PNL", width: 200 },
  { field: "totalPnl", headerName: "Total PNL", width: 200 },
  { field: "totalCost", headerName: "Total Cost", width: 200 },
  { field: "qtyBought", headerName: "Qty Bought", width: 200 },
  { field: "qtySold", headerName: "Qty Sold", width: 200 },
  { field: "qtyShorted", headerName: "Qty Shorted", width: 200 },
];

const rowsTwo = [
  {
    id: 1.1,
    unrealizedPnl: "-$3,457.57",
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

function DetailPanelContent({ row }) {
  const apiRef = useGridApiContext();
  const {
    control,
    handleSubmit,
    formState: { isValid },
  } = useForm({
    defaultValues: row,
    mode: "onChange",
  });

  const onSubmit = (data) => {
    apiRef.current.updateRows([data]);
    apiRef.current.toggleDetailPanel(row.id);
  };

  const getDetailPanelContent = React.useCallback(
    ({ row }) => <DetailPanelContent row={row} />,
    []
  );

  const getDetailPanelHeight = React.useCallback(() => 240, []);

  return (
    <Stack
      sx={{ py: 2, height: "100%", boxSizing: "border-box" }}
      direction="column"
    >
      <Paper sx={{ flex: 1, mx: "auto", width: "90%", p: 1 }}>
        <Stack
          component="form"
          justifyContent="space-between"
          onSubmit={handleSubmit(onSubmit)}
          sx={{ height: 1 }}
        >
          <Typography variant="h6">{`Edit Order #${row.id}`}</Typography>
          <Controller
            control={control}
            name="customer"
            rules={{ required: true }}
            render={({ field, fieldState: { invalid } }) => (
              <TextField
                label="Customer"
                size="small"
                error={invalid}
                required
                fullWidth
                {...field}
              />
            )}
          />
          <Controller
            control={control}
            name="email"
            rules={{ required: true }}
            render={({ field, fieldState: { invalid } }) => (
              <TextField
                label="Email"
                size="small"
                error={invalid}
                required
                fullWidth
                {...field}
              />
            )}
          />
          <div>
            <Button
              type="submit"
              variant="outlined"
              size="small"
              disabled={!isValid}
            >
              Save
            </Button>
          </div>
        </Stack>
      </Paper>
    </Stack>
  );
}

/*  */
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
    id: 1,
    unrealizedPnl: "-$3,457.57",
    realizedPnl: "-$3,457.57",
    totalPnl: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: 500,
    qtyShorted: 200,
  },
  {
    id: 2,
    unrealizedPnl: "-$3,457.57",
    realizedPnl: "-$3,457.57",
    totalPnl: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: 500,
    qtyShorted: 200,
  },
  {
    id: 3,
    unrealizedPnl: "-$3,457.57",
    realizedPnl: "-$3,457.57",
    totalPnl: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: 500,
    qtyShorted: 200,
  },
  {
    id: 4,
    unrealizedPnl: "-$3,457.57",
    realizedPnl: "-$3,457.57",
    totalPnl: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: 500,
    qtyShorted: 200,
  },
  {
    id: 5,
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
    <Box sx={{ width: "100%", height: 1400 }}>
      <DataGridPro
        columns={columns}
        rows={rows}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
      />
    </Box>
  );
}
