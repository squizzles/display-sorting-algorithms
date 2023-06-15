import { IAlgorithm } from '../IAlgorithm';

export default class BubbleSort implements IAlgorithm {

    // Array of data to sort
    private data: Array<number>;
    private isFinished: boolean = false;
    private currentIndex: number;

    constructor(data: Array<number>){
        // Convert number to custom data type
        this.data = data;
        // Insertion sort starts by comparing 1st element to the 0th
        this.currentIndex = 1;
    }

    // Modify the data one step at a time
    public step(): Array<number> {
        // Sort 1 step in algo
        

        // Update isFinished

        return this.data;
    }

    public isSorted(): boolean {
        return this.isFinished;
    };
}