import * as React from "react";
import { useDispatch } from "react-redux";
import { updateArray } from "@/store/algoSlice";
import { generateRandomArray } from "@/utils/RandomGenerator";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function RandomiseValues() {

	const dispatch = useDispatch();

	React.useEffect(() => {
		populateRandomData()
	}, []);

	function populateRandomData() {
		dispatch(updateArray(generateRandomArray(25)));
	}

	return (
		<Box sx={{ minWidth: 120, maxWidth: 400, padding: 4 }}>
			<Button onClick={populateRandomData}>Randomize Data</Button>
		</Box>
	);
}
