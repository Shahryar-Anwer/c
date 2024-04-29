import * as React from "react";
import Box from "@mui/material/Box";
import GridFive_Three from "./GridFive_Three";

import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
  useGridApiContext,
} from "@mui/x-data-grid-premium";

export default function GridFive_Two({ row }) {
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...row.initialState,
      rowGrouping: {
        ...row.initialState?.rowGrouping,
        model: ["desk"],
      },
      sorting: {
        sortModel: [{ field: "__row_group_by_columns_group__", sort: "asc" }],
      },
      aggregation: {
        model: {
          quantity: "sum",
        },
      },
    },
  });

  const getDetailPanelContent = React.useCallback(
    ({ row }) => <GridFive_Three row={row} />,
    []
  );

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <DataGridPremium
        {...row}
        apiRef={apiRef}
        disableRowSelectionOnClick
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
        getDetailPanelContent={getDetailPanelContent}
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
        
      />
    </Box>
  );
}
