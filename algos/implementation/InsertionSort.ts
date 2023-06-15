import { IAlgorithm } from '@/algos/IAlgorithm';

export default class InsertionSort implements IAlgorithm {

    // Array of data to sort
    private data: number[];
    private currentIndex: number;
    private isFinished: boolean = false;

    constructor(data: number[]){
        // TODO - Convert number to custom data type
        this.data = data;
        // Insertion sort starts by comparing 1st element to the 0th
        this.currentIndex = 1;
    }

    // Modify the data one step at a time
    public step(): number[] {
        // Ensure current step won't go out of bounds
        if (this.isFinished || this.currentIndex == this.data.length){
            this.isFinished = true;
            return this.data;
        }

        var arrayCopy = [...this.data];

        // Sort 1 step in algo
        const key = arrayCopy[this.currentIndex];
        var j = this.currentIndex - 1;

        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && arrayCopy[j] > key) {
            const temp = arrayCopy[j+1]
            arrayCopy[j+1] = arrayCopy[j];
            arrayCopy[j] = temp;


            j = j - 1;
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