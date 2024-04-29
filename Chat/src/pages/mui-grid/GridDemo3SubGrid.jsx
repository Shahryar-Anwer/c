import * as React from 'react';
import {
  DataGridPremium,
  useGridApiRef,
  useKeepGroupedColumnsHidden,
} from '@mui/x-data-grid-premium';
import { useMovieData } from '@mui/x-data-grid-generator';

import dataTwo from "./dataTwo"

export default function GridDemo3SubGrid() {
    const data = useMovieData();
    const apiRef = useGridApiRef();
  
    const initialState = useKeepGroupedColumnsHidden({
      apiRef,
      initialState: {
        rowGrouping: {
          model: ['account'],
        },
      },
    });
  

  return (
    <div style={{ height: 6000, width: '100%' }}>
      <DataGridPremium {...dataTwo} apiRef={apiRef} initialState={initialState} disableColumnMenu={true} />
    </div>
  );
}
