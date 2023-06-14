<<<<<<< HEAD
import { selectAlgo, selectAlgoType } from '../../store/algoSlice';
import { useSelector, useDispatch } from 'react-redux';
=======
import React from "react";
import {
	selectAlgoType,
	selectAlgoValues,
} from "../../store/algoSlice";
import { useSelector } from "react-redux";
import dynamic from "next/dynamic";
const BarChart = dynamic(() => import("recharts").then((mod) => mod.BarChart), {
	ssr: false,
});
const XAxis = dynamic(() => import("recharts").then((mod) => mod.XAxis), {
	ssr: false,
});
const YAxis = dynamic(() => import("recharts").then((mod) => mod.YAxis), {
	ssr: false,
});
import { Bar } from "recharts";
import { Box } from "@mui/material";
>>>>>>> 580af2fd6d7cdf63add73c2fd15603fbb6807029

const AlgorithmDisplay: React.FC = () => {
	const algoType = useSelector(selectAlgoType);
	const algoValues = useSelector(selectAlgoValues);
  const algoValuesDisplay = algoValues.map((value, index) => {
    return { pos: index, value: value };
  });

	return (
		<Box>
			<h1>Selected Algorithm: {algoType}</h1>
			<BarChart width={800} height={300} data={algoValuesDisplay}>
				<XAxis dataKey="pos" stroke="#8884d8" />
				<YAxis />
				<Bar dataKey="value" fill="#8884d8" />
			</BarChart>
		</Box>
	);
};

export default AlgorithmDisplay;
