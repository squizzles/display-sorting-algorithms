import * as React from "react";
import { useDispatch, useSelector, } from "react-redux";
import { updateArray, selectAlgoValues, selectAlgoType } from "@/store/algoSlice";
import { generateAlgorithm } from "@/algos/AlgorithmFactory";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function RunAlgo() {
    const array = useSelector(selectAlgoValues);
    const algoType = useSelector(selectAlgoType);
    const dispatch = useDispatch();
  
    async function runSelectedAlgo() {
      // Get the selected algorithm
      const selectedAlgo = generateAlgorithm(algoType, array);

      while (!selectedAlgo.isSorted()){
        dispatch(updateArray(selectedAlgo.step()));
        await delay(100);
      }
    }

    function delay(duration: number): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(resolve, duration);
      });
    }

	return (
		<Box sx={{ minWidth: 120, maxWidth: 400, padding: 4 }}>
			<Button onClick={runSelectedAlgo}>Run Algorithm</Button>
		</Box>
	);
}
