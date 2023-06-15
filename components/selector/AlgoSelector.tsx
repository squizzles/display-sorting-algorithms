import * as React from "react";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { AlgorithmType } from "../../algos/AlgorithmType";
import { setName } from "@/store/algoSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectAlgoType } from "@/store/algoSlice";

export default function AlgoSelector() {
	const selectedAlgorithm = useSelector(selectAlgoType);

	const dispatch = useDispatch();
	function handleAlgorithmChange(algoName: string) {
		dispatch(setName(algoName as AlgorithmType));
	}

	return (
		<Box sx={{ minWidth: 150, width: "auto", padding: 4, textAlign: "center" }}>
			
				<Select
					value={selectedAlgorithm}
					onChange={(e) =>
						handleAlgorithmChange(e.target.value as string)
					}
				>
					{Object.values(AlgorithmType).map((algorithm) => (
						<MenuItem key={algorithm} value={algorithm}>
							{algorithm}
						</MenuItem>
					))}
				</Select>
			
		</Box>
	);
}
