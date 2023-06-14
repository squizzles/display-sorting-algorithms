import { IAlgorithm } from '../IAlgorithm';

export default class InsertionSort implements IAlgorithm {

    // Array of data to sort
    private data: Array<number>;
    private currentIndex: number;
    private isFinished: boolean = false;

    constructor(data: Array<number>){
        // TODO - Convert number to custom data type
        this.data = data;
        // Insertion sort starts by comparing 1st element to the 0th
        this.currentIndex = 1;
    }

    // Modify the data one step at a time
    public step(): Array<number> {
        // Ensure current step won't go out of bounds
        if (this.isFinished || this.currentIndex == this.data.length){
            this.isFinished = true;
            return this.data;
        }

        // Sort 1 step in algo
        const key = this.data[this.currentIndex];
        var j = this.currentIndex - 1;

        /* Move elements of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        while (j >= 0 && this.data[j] > key) {
            this.data[j + 1] = this.data[j];
            j = j - 1;
        }

        return this.data;
    }

    public isSorted(): boolean {
        return this.isFinished;
    };
}