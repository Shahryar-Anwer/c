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
import dataTest2 from "./dataTwo"

import DataSubGrid2_3 from "./DataSubGrid2_3";

export default function DataSubGrid2_2() {

  const { data, loading } = useDemoData({
    dataSet: "Commodity",
    rowLength: 100,
    editable: true,
    visibleFields: [
      "accounts",
      "unrealizedPNL",
      "realizedPNL",
      "totalPNL",
      "totalCost",
      "qtyBought",
      "qtySold",
      "qtyShorted",
    ],
  });


  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...dataTest2.initialState,
      rowGrouping: {
        ...dataTest2.initialState?.rowGrouping,
        model: ["accounts"],
      },
      sorting: {
        sortModel: [{ field: "__row_group_by_columns_group__", sort: "asc" }],
      },
      aggregation: {
        model: {
          filledQuantity: "size",
          quantity: "sum"
        },
      },
    },
  });

  const getDetailPanelContent = React.useCallback(
    ({ row }) => <DataSubGrid2_3 row={row} />,
    []
  );

  return (
   <Box sx={{ height: 1000, width: '100%' }}>
      <DataGridPremium
        {...dataTest2}
        apiRef={apiRef}
        /* loading={loading} */
        disableRowSelectionOnClick
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
        getDetailPanelContent={getDetailPanelContent}
      />
    </Box>
  );
}
