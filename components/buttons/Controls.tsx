import React from 'react';
import { Box, Grid } from '@mui/material';
import RandomiseValues from './randomiseValues/RandomiseValues';
import RunAlgo from './runAlgo/RunAlgo';
import AlgoSelector from '../selector/AlgoSelector';

export const Controls = () => {
  return (
    <Grid
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Grid item xs={6}>
          <RandomiseValues />
        </Grid>
        <Grid item xs={6}>
          <RunAlgo />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <AlgoSelector />
      </Grid>
    </Grid>
  );
};

export default Controls;
