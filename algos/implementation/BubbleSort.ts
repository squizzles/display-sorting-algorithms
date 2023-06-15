import { SwipeableDrawer } from '@mui/material';
import { IAlgorithm } from '../IAlgorithm';

export default class BubbleSort implements IAlgorithm {

    // Array of data to sort
    private data: number[];
    private isFinished: boolean = false;
    private currentIndex: number;

    constructor(data: number[]){
        // Convert number to custom data type
        this.data = data;
        // Bubble sort iterates over all elements
        this.currentIndex = 0;
    }

    // Modify the data one step at a time
    public step(): number[] {
        // Ensure current step won't go out of bounds
        if (this.isFinished || this.currentIndex == this.data.length - 1){
            this.isFinished = true;
            return this.data;
        }

        var arrayCopy = [...this.data];

        /*
            Each step of bubble sort, largest element is moved to the rightmost element
        */
        for (let i = 0; i < arrayCopy.length - this.currentIndex - 1; i++){
            if (arrayCopy[i] > arrayCopy[i+1]){
                const temp = arrayCopy[i];
                arrayCopy[i] = arrayCopy[i+1];
                arrayCopy[i+1] = temp;
            }
        }

        // Update state after iteration
        this.currentIndex++;
        this.data = arrayCopy;

        return this.data;
    }

    public isSorted(): boolean {
        return this.isFinished;
    };
}