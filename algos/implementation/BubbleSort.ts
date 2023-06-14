import { IAlgorithm } from '../IAlgorithm';

export default class BubbleSort implements IAlgorithm {

    // Array of data to sort
    private data: Array<number>;
    private isFinished: boolean = false;

    constructor(data: Array<number>){
        // Convert number to custom data type
        

        this.data = data;
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