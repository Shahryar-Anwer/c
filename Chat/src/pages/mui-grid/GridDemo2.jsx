import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import {
  DataGridPremium,
  GridToolbar,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
  useGridApiEventHandler,
} from "@mui/x-data-grid-premium";
import { useDemoData } from "@mui/x-data-grid-generator";

import dataTwo from "./dataTwo";

import "./GridDemo2.css";

export default function GridDemo2() {
  const { data, loading } = useDemoData({
    dataSet: "Account",
    rowLength: 100,
    editable: true,
    visibleFields: [
      "account",
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
      ...dataTwo.initialState,
      rowGrouping: {
        ...dataTwo.initialState?.rowGrouping,
        model: ["account"],
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

  const [mainHeadings, setMainHeadings] = useState({
    unRealizedPNL: "-$3,457.57",
    realizedPNL: "-$3,457.57",
    totalPNL: "-$3,865.67",
    totalCost: "2,000,65.369874",
    qtyBought: "1000",
    qtySold: "500",
    qtyShorted: "200",
  });

  // callback function to call when event triggers
  const updateHeading = () => {
    setTimeout(() => {
      /* Main Headings */

      if (document.querySelectorAll('[data-field="desk"]')[1]) {

        document.querySelectorAll('[data-field="desk"]')[1].innerHTML =
          mainHeadings.unRealizedPNL;
      }

      if (document.querySelectorAll('[data-field="traderName"]')[1]) {
        document.querySelectorAll('[data-field="traderName"]')[1].innerHTML =
          mainHeadings.realizedPNL;
      }

      if (document.querySelectorAll('[data-field="traderEmail"]')[1]) {
        document.querySelectorAll('[data-field="traderEmail"]')[1].innerHTML =
          mainHeadings.totalPNL;
      }

      if (document.querySelectorAll('[data-field="quantity"]')[1]) {
        document.querySelectorAll('[data-field="quantity"]')[1].innerHTML =
          mainHeadings.totalCost;
      }

      if (document.querySelectorAll('[data-field="filledQuantity"]')[1]) {
        document.querySelectorAll(
          '[data-field="filledQuantity"]'
        )[1].innerHTML = mainHeadings.qtyBought;
      }

      if (document.querySelectorAll('[data-field="isFilled"]')[1]) {
        document.querySelectorAll('[data-field="isFilled"]')[1].innerHTML =
          mainHeadings.qtySold;
      }

      if (document.querySelectorAll('[data-field="status"]')[1]) {
        document.querySelectorAll('[data-field="status"]')[1].innerHTML =
          mainHeadings.qtyShorted;
      }

      /* Sub Headings */
    }, 0);
  };

  const updateSubHeading = () => {
    setTimeout(() => {
      document.querySelectorAll('[data-field="unrealizedPNL"]')[2].innerHTML =
        mainHeadings.unRealizedPNL;
    }, 0);
  };

  return (
    <Box sx={{ height: 520, width: "100%" }}>
      <DataGridPremium
        {...dataTwo}
        apiRef={apiRef}
        loading={loading}
        disableRowSelectionOnClick
        initialState={initialState}
        slots={{ toolbar: GridToolbar }}
        onStateChange={(e) => {
          updateHeading();
        }}
      >
        <DataGridPremium
          {...dataTwo}
          apiRef={apiRef}
          loading={loading}
          disableRowSelectionOnClick
          initialState={initialState}
          slots={{ toolbar: GridToolbar }}
          onStateChange={(e) => {
            updateHeading();
          }}
        />
      </DataGridPremium>
    </Box>
  );
}
