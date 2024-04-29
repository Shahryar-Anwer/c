import Box from "@mui/material/Box";
import {
  DataGridPro,
/*   useGridSelector,
  useGridApiContext,
  gridDetailPanelExpandedRowsContentCacheSelector, */
  GRID_DETAIL_PANEL_TOGGLE_COL_DEF,
} from "@mui/x-data-grid-pro";
import SubGrid from "./SubGrid";
import { useCallback } from "react";
import { data } from "./Data";

import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

/* import IconButton from "@mui/material/IconButton";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"; */
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";

import React, { useState, useEffect } from "react";

export default function Grid() {
  /*  */
  /* function CustomDetailPanelToggle(props) {
    const { id, value: isExpanded } = props;
    const apiRef = useGridApiContext();

    // To avoid calling ´getDetailPanelContent` all the time, the following selector
    // gives an object with the detail panel content for each row id.
    const contentCache = useGridSelector(
      apiRef,
      gridDetailPanelExpandedRowsContentCacheSelector
    );

    // If the value is not a valid React element, it means that the row has no detail panel.
    const hasDetail = React.isValidElement(contentCache[id]);

    return (
      <IconButton
        size="small"
        tabIndex={-1}
        disabled={!hasDetail}
        aria-label={isExpanded ? "Close" : "Open"}
      >
        <ExpandMoreIcon
          sx={{
            transform: `rotateZ(${isExpanded ? 180 : 0}deg)`,
            transition: (theme) =>
              theme.transitions.create("transform", {
                duration: theme.transitions.duration.shortest,
              }),
          }}
          fontSize="inherit"
        />
      </IconButton>
    );
  } */
  /*  */

  const columns = [
    { field: "symbol", headerName: "Symbol", width: 200 },
    {
      field: "optionDesc",
      headerName: "Option Description",
      width: 200,
      valueGetter: (_, row) => {
        if (row.complexLegs.length > 0) {
          return "Multi-Leg";
        }
        return "Apr 5, 2023 255.0 Call";
      },
    },
    {
      field: "side",
      headerName: "Side",
      width: 200,
      valueGetter: (value) => {
        if (value == 2) {
          return "SO";
        }
        return "Buy";
      },
    },
    {
      field: "orderId",
      headerName: "Order Id",
      width: 200,
    },
    {
      field: "account",
      headerName: "Account",
      width: 200,
    },
    {
      field: "ordType",
      headerName: "Order Type",
      width: 200,
      valueGetter: (value) => {
        if (value == 0) {
          return "LMT";
        }
        return "KMT";
      },
    },
    {
      field: "price",
      headerName: "Price",
      width: 200,
    },
    {
      field: "price1",
      headerName: "Price",
      width: 200,
    },
    {
      field: "price2",
      headerName: "Price",
      width: 200,
    },
    {
      field: "price3",
      headerName: "Price",
      width: 200,
    },
    {
      field: "price4",
      headerName: "Price",
      width: 200,
    },
    {
      ...GRID_DETAIL_PANEL_TOGGLE_COL_DEF,
      /* renderCell: (params) => {
        return <CustomDetailPanelToggle id={params.id} value={params.value} />;
      }, */
      renderHeader: () => {
        return <KeyboardDoubleArrowDownIcon sx={{ color: "#009AC7" }} />;
      },
    },
  ];

  const rows = data.eventData;

  const [showDetailPanel, setShowDetailPanel] = useState(true);

  const getDetailPanelContent = useCallback((rows) => {
    if (rows?.row?.complexLegs && showDetailPanel == true) {
      return <SubGrid row={rows?.row?.complexLegs} />;
    }
  }, []);

  useEffect(() => {
    setShowDetailPanel(false);
  }, []);

  const getDetailPanelHeight = useCallback(() => 400, []);

  return (
    <Box sx={{ width: "100%", height: "100%" }}>
      <DataGridPro
        columns={columns}
        rows={rows}
        getDetailPanelHeight={getDetailPanelHeight}
        getDetailPanelContent={getDetailPanelContent}
        slots={{
          detailPanelExpandIcon: () => (
            <KeyboardArrowDownIcon sx={{ color: "#009AC7" }} />
          ),
          detailPanelCollapseIcon: () => (
            <KeyboardArrowUpIcon sx={{ color: "#009AC7" }} />
          ),
        }}
        initialState={{
          pinnedColumns: { left: ["__detail_panel_toggle__", "symbol"] },
        }}
        sx={{
          "& div[data-field='__detail_panel_toggle__'] .MuiDataGrid-columnHeaderTitleContainer":
            {
              justifyContent: "center",
            },
        }}
      />
    </Box>
  );
}
