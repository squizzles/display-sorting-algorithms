import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Algorithm from '../../algos/Algorithm';

export default function AlgoSelector() {
  const [selectedAlgorithm, setSelectedAlgorithm] = React.useState<Algorithm>(Algorithm.None);

  const handleAlgorithmChange = (event: SelectChangeEvent<unknown>) => {
    setSelectedAlgorithm(event.target.value as Algorithm);
  };

  return (
    <Box sx={{ minWidth: 120, maxWidth: 400, padding: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="algorithm-select-label">Select an algorithm</InputLabel>
        <Select
          labelId="algorithm-select-label"
          id="algorithm-select"
          value={selectedAlgorithm}
          label="Select an algorithm"
          onChange={handleAlgorithmChange}
        >
          {Object.values(Algorithm).map((algorithm) => (
            <MenuItem key={algorithm} value={algorithm}>
              {algorithm}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
