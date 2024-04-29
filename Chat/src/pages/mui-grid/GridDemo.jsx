import * as React from "react";
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from "@mui/x-data-grid-premium";
import { useMovieData } from "@mui/x-data-grid-generator";
import firstGrid from "./data";

export default function GridDemo() {

  const data = firstGrid;
  //   const data = useMovieData();
  const apiRef = useGridApiRef();

  const initialState = useKeepGroupedColumnsHidden({
    apiRef,
    initialState: {
      rowGrouping: {
        model: ["account" , "director"],
      },
    },
  });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGridPremium {...data} apiRef={apiRef} initialState={initialState} />
    </div>
  );
}
