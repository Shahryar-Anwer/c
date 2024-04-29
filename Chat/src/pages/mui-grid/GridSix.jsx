import * as React from "react";

import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";

import GridFive_Three from "./GridFive_Three";

import gridFive from "./GridFiveData";

import "./GridSix.css";

export default function GridSix() {
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ["account", "symbol"],
      },
      aggregation: {
        model: {
          quantity: "sum",
          filledQuantity: "sum",
          unrealizedPNL: "sum",
          realizedPNL: "sum",
          totalPNL: "sum",
          qtyBought: "sum",
          qtySold: "sum",
          qtyShorted: "sum",
        },
      },
      density: 'comfortable'
    },
  });

  const getDetailPanelContent = React.useCallback((params) => {
    return <GridFive_Three row={params.row.innerData} />;
  }, []);

  React.useEffect(() => {
    console.log(apiRef.current);
  }, [apiRef.current]);

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGridPremium
        apiRef={apiRef}
        columns={gridFive.columns}
        rows={gridFive.rows}
        disableRowSelectionOnClick
        initialState={initialState}
        getAggregationPosition={(groupNode) =>
          groupNode.depth === -1 ? null : "inline"
        }
        getDetailPanelContent={getDetailPanelContent}
        getRowHeight={() => 'auto'}
        /* slots={{
          columnMenu: GridFive_Three,
        }}
        slotProps={{
          columnMenu: { background: 'red', counter: gridFive.rows.length, row: gridFive.rows.innerData },
        }} */
      />
    </div>
  );
}
