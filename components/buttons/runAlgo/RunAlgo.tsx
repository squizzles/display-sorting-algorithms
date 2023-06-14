import * as React from "react";
import { useDispatch, useSelector, } from "react-redux";
import { updateArray, selectAlgoValues, selectAlgoType } from "@/store/algoSlice";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

export default function RunAlgo() {
    const array = useSelector(selectAlgoValues);
    const algoType = useSelector(selectAlgoType);
    const dispatch = useDispatch();
  
    async function runSelectedAlgo() {
        const changeArray = [...array];
        console.log(`running ${algoType} `);
        switch (algoType) {
            case "Bubble Sorting Algorithm":
                console.log("running bubble sort");
                await bubbleSort(changeArray);
                break;
            case "Linear Sorting Algorithm":
                console.log("running linear sort");
                await linearSort(changeArray);
                break;
        }
    }

    async function bubbleSort(changeArray: number[]) {
      for (let i = 0; i < changeArray.length; i++) {
        for (let j = 0; j < changeArray.length - 1; j++) {
          const array = [...changeArray];
  
          if (changeArray[j] > changeArray[j + 1]) {
            let temp = changeArray[j];
            changeArray[j] = changeArray[j + 1];
            changeArray[j + 1] = temp;
  
            array[j] = changeArray[j];
            array[j + 1] = changeArray[j + 1];
  
            await delay(100); // Delay between each batch (adjust the duration as needed)
  
            dispatch(updateArray(array));
          }
        }
      }
    }

    async function linearSort(changeArray: number[]) {
        const array = [...changeArray];
      
        for (let i = 0; i < array.length - 1; i++) {
          let minIndex = i;
      
          for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[minIndex]) {
              minIndex = j;
            }
          }
      
          if (minIndex !== i) {
            // Swap elements
            [array[i], array[minIndex]] = [array[minIndex], array[i]];

            await delay(100);
      
            dispatch(updateArray([...array]));
          }
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
