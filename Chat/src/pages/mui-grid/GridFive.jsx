import * as React from "react";
import Box from "@mui/material/Box";
import GridFive_Two from "./GridFive_Two";
import dataTest5 from "./GridFiveData";

import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";

export default function GridFive() {

  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      ...dataTest5.initialState,
      rowGrouping: {
        ...dataTest5.initialState?.rowGrouping,
        model: ["accounts"],
      },
      sorting: {
        sortModel: [{ field: "__row_group_by_columns_group__", sort: "asc" }],
      },
    },
  });

  const getDetailPanelContent = React.useCallback(
    ({ row }) => <GridFive_Two row={row.innerData} />,
    []
  );


  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <DataGridPremium
        {...dataTest5}
        apiRef={apiRef}
        disableRowSelectionOnClick
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
        getDetailPanelContent={getDetailPanelContent}
      />
    </Box>
  );
}
