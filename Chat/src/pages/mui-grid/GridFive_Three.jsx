import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";
import {
  DataGridPremium,
} from "@mui/x-data-grid-premium";

export default function GridFive_Three({ row , column }) {
  return (
    <div className="grid-five-three" style={{ width: "100%" }}>
      <div style={{ height: 350, width: "100%" }}>
        <DataGridPremium
          {...row}
          initialState={{
            rowGrouping: {
              model: [""],
            },
          }}
          disableVirtualization
        />
      </div>
    </div>
  );
}
