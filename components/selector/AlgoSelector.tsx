import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import AlgorithmType from '../../algos/AlgorithmType';
import { setName } from '@/store/algoSlice';
import { useDispatch, useSelector } from 'react-redux';
import { selectAlgoType } from '@/store/algoSlice';

export default function AlgoSelector() {
const selectedAlgorithm = useSelector(selectAlgoType);

  const dispatch = useDispatch();
  function handleAlgorithmChange(algoName : string) {
    dispatch(setName(algoName as AlgorithmType));
  }

  return (
    <Box sx={{ minWidth: 120, maxWidth: 400, padding: 4 }}>
      <FormControl fullWidth>
        <InputLabel id="algorithm-select-label">Select an algorithm</InputLabel>
        <Select
          labelId="algorithm-select-label"
          id="algorithm-select"
          value={selectedAlgorithm}
          label="Select an algorithm"
          onChange={e => handleAlgorithmChange(e.target.value as string)}
        >
          {Object.values(AlgorithmType).map((algorithm) => (
            <MenuItem key={algorithm} value={algorithm}>
              {algorithm}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
