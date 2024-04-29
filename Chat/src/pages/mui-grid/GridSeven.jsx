import * as React from "react";
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { useMovieData } from "@mui/x-data-grid-generator";
import GridFive_Three from "./GridFive_Three";
import gridFive from "./GridFiveData";

import "./GridSix.css";

const currencyFormatter = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export default function GridSeven() {
  const data = useMovieData();
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ["account" , "unrealizedPNL"],
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
    },
  });

  const getDetailPanelContent = React.useCallback(
    ({ row }) => <GridFive_Three row={row.innerData} />,
    []
  );

  return (
    <div style={{ height: "100%", width: "100%" }}>
      <DataGridPremium
        {...data}
        apiRef={apiRef}
        columns={gridFive.columns}
        rows={gridFive.rows}
        disableRowSelectionOnClick
        initialState={initialState}
        getAggregationPosition={(groupNode) =>
          groupNode.depth === -1 ? null : "inline"
        }
        getDetailPanelContent={getDetailPanelContent}
      />
    </div>
  );
}
