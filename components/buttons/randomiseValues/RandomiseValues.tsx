import * as React from "react";
import { useDispatch } from "react-redux";
import { updateValues } from "@/store/algoSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function RandomiseValues() {
	const dispatch = useDispatch();

	function populateRandomData() {
		const newRandomData: number[] = [];
		for (let i = 0; i < 25; i++) {
			newRandomData.push( Math.random() * 100 );
		}
		console.log(`updated array with ${newRandomData} `);	
		dispatch(updateValues(newRandomData as any));
	}

	return (
		<Box sx={{ minWidth: 120, padding: 4, justifyContent: "center", textAlign: "center",  }}>
			<Button onClick={populateRandomData} >Randomize Data</Button>
		</Box>
	);
}
