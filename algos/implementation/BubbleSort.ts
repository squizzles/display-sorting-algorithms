import { IAlgorithm } from '@/algos/IAlgorithm';

export default class BubbleSort implements IAlgorithm {

    // Array of data to sort
    private data: number[];
    private isFinished: boolean = false;
    private currentIndex_i: number;
    private currentIndex_j: number;

    constructor(data: number[]){
        // Convert number to custom data type
        this.data = data;
        // Bubble sort iterates over all elements
        this.currentIndex_i = 0;
        this.currentIndex_j = 0;
    }

    // Modify the data one step at a time
    public step(): number[] {
        // Ensure current step won't go out of bounds
        if (this.isFinished || this.currentIndex_i == this.data.length - 1){
            this.isFinished = true;
            return this.data;
        }

        var arrayCopy = [...this.data];

        /*
            Each step of bubble sort, largest element is moved to the rightmost element
        */
       
        
        if (arrayCopy[this.currentIndex_j] > arrayCopy[this.currentIndex_j+1]){
            const temp = arrayCopy[this.currentIndex_j];
            arrayCopy[this.currentIndex_j] = arrayCopy[this.currentIndex_j+1];
            arrayCopy[this.currentIndex_j+1] = temp;
        }

        if ( this.currentIndex_j == arrayCopy.length - this.currentIndex_i - 1){
            this.currentIndex_i++;
            this.currentIndex_j = 0;
        } else {
            this.currentIndex_j++;
        }
        

        // Update state after iteration
        this.data = arrayCopy;

        return this.data;
    }

    public isSorted(): boolean {
        return this.isFinished;
    };
}