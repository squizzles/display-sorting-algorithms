import * as React from "react";
import { useDispatch, useSelector, } from "react-redux";
import { updateArray, selectAlgoValues, selectAlgoType, setIsRunning, algoIsRunning } from "@/store/algoSlice";
import { generateAlgorithm } from "@/algos/AlgorithmFactory";
import { AlgorithmType } from "@/algos/AlgorithmType";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function RunAlgo() {
    const array = useSelector(selectAlgoValues);
    const algoType = useSelector(selectAlgoType);
    const algoRunning = useSelector(algoIsRunning);
    const dispatch = useDispatch();

    function algoNotSelected(): boolean {
      return algoType === AlgorithmType.None
    }
  
    async function runSelectedAlgo() {
      // Set Algo to running
      dispatch(setIsRunning(true));

      // Get the selected algorithm
      const selectedAlgo = generateAlgorithm(algoType, array);

      while (!selectedAlgo.isSorted()){
        dispatch(updateArray(selectedAlgo.step()));
        await delay(100);
      }

      dispatch(setIsRunning(false));
    }

    function delay(duration: number): Promise<void> {
      return new Promise((resolve) => {
        setTimeout(resolve, duration);
      });
    }

	return (
		<Box sx={{ minWidth: 120, maxWidth: 400, padding: 4 }}>
			<Button disabled={algoRunning || algoNotSelected()} onClick={runSelectedAlgo}>Run Algorithm</Button>
		</Box>
	);
}
