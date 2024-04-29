import * as React from "react";
import Box from "@mui/material/Box";
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";
import dataTest from "./dataFour"

export default function DataSubGrid2_3() {
  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 5,
    editable: true,
    visibleFields: [
      "commodity",
      "quantity",
      "filledQuantity",
      "status",
      "isFilled",
      "unitPrice",
      "unitPriceCurrency",
      "subTotal",
      "feeRate",
      "feeAmount",
      "incoTerm",
    ],
  });
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...dataTest.initialState,
      rowGrouping: {
        ...data.initialState?.rowGrouping,
        model: ["accounts"],
      },
      sorting: {
        sortModel: [{ field: "__row_group_by_columns_group__", sort: "asc" }],
      },
      aggregation: {
        model: {
            unrealizedPNL: "sum",
        },
      },
    },
  });

  return (
    <Box sx={{ height: 520, width: "100%" }}>
      <DataGridPremium
        {...dataTest}
        apiRef={apiRef}
        loading={loading}
        disableRowSelectionOnClick
        initialState={initialState}
        /* slots={{ toolbar: GridToolbar }} */
      />
    </Box>
  );
}
