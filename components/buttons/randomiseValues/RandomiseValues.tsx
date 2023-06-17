import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateArray, algoIsRunning } from "@/store/algoSlice";
import { generateRandomArray } from "@/utils/RandomGenerator";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function RandomiseValues() {
	const dispatch = useDispatch();
	const algoRunning = useSelector(algoIsRunning);

	useEffect(() => {
		dispatch(updateArray(generateRandomArray(25)));
	}
	, []);

	function populateRandomData(): void {
		dispatch(updateArray(generateRandomArray(25)));
	}

	return (
		<Box sx={{ minWidth: 120, maxWidth: 400, padding: 4, justifyItems: "center" }}>
			<Button disabled={algoRunning} onClick={populateRandomData}>Randomize Data</Button>
		</Box>
	);
}
