import { IAlgorithm } from '@/algos/IAlgorithm';

export default class InsertionSort implements IAlgorithm {

    // Array of data to sort
    private data: number[];
    private currentIndex_i: number;
    private currentIndex_j: number;
    private key: number;
    private isFinished: boolean = false;

    constructor(data: number[]){
        // TODO - Convert number to custom data type
        this.data = data;
        // Insertion sort starts by comparing 1st element to the 0th
        this.currentIndex_i = 1;
        this.currentIndex_j = 0;
        this.key = data[1];
    }

    // Modify the data one step at a time
    public step(): number[] {
        // Ensure current step won't go out of bounds
        if (this.isFinished || this.currentIndex_i == this.data.length){
            this.isFinished = true;
            return this.data;
        }

        var arrayCopy = [...this.data];

        // Sort 1 step in algo
        

        /* Move element j of arr[0..i-1], that are
        greater than key, to one position ahead
        of their current position */
        if (this.currentIndex_j >= 0 && arrayCopy[this.currentIndex_j] > this.key) {
            const temp = arrayCopy[this.currentIndex_j+1]
            arrayCopy[this.currentIndex_j+1] = arrayCopy[this.currentIndex_j];
            arrayCopy[this.currentIndex_j] = temp;

            
        } 
        if (this.currentIndex_j == -1 ){
            this.currentIndex_i = this.currentIndex_i + 1;
            this.currentIndex_j = this.currentIndex_i ;
            this.key = arrayCopy[this.currentIndex_i];

        }
        this.currentIndex_j = this.currentIndex_j - 1;

        // Update state after iteration
        this.data = arrayCopy;

        return this.data;
    }

    public isSorted(): boolean {
        return this.isFinished;
    };
}