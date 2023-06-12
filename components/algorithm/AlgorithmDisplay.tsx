import React, { useState } from 'react';
import AlgorithmType from '@/algos/AlgorithmType';
import { randomData } from '@/algos/Data';
import { populateRandomData } from '@/algos/Data';
import { selectAlgoType, selectAlgoValues, updateValues } from '../../store/algoSlice';
import { useDispatch, useSelector } from 'react-redux';

import dynamic from 'next/dynamic';

const BarChart = dynamic(() => import('recharts').then((mod) => mod.BarChart), { ssr: false });
const XAxis = dynamic(() => import('recharts').then((mod) => mod.XAxis), { ssr: false });
const YAxis = dynamic(() => import('recharts').then((mod) => mod.YAxis), { ssr: false });
import { Bar } from 'recharts';

import { Box } from '@mui/material';

const AlgorithmDisplay: React.FC = () => {
  const algoType = useSelector(selectAlgoType);
  const algoValues = useSelector(selectAlgoValues);
  const [randomData, setRandomData] = useState([]);


  const dispatch = useDispatch();
  function populateRandomData() {
      const newRandomData = [];
      for (let i = 1; i < 101; i++) {
      newRandomData.push({ value: Math.random() * 100, pos: i });
    }
    dispatch(updateValues(newRandomData as any))
  };

  return ( 
  
    <Box>
      <h1>Selected Algorithm: {algoType}</h1>
      <BarChart width={800} height={300}  data={algoValues}>
        <XAxis dataKey="pos" stroke="#8884d8" />
        <YAxis />
        <Bar dataKey="value" fill="#8884d8" />
      </BarChart>
      <button onClick={populateRandomData}>Randomize Data</button>
    </Box>
  
  );
};

export default AlgorithmDisplay;
