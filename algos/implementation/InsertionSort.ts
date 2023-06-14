import { IAlgorithm } from '../IAlgorithm';

export default class InsertionSort implements IAlgorithm {

    // Array of data to sort
    private data: Array<number>;
    private isFinished: boolean = false;

    constructor(data: Array<number>){
        // TODO - Convert number to custom data type
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


    // function linearSort(changeArray: number[]) {
    //     const array = [...changeArray];
      
    //     for (let i = 0; i < array.length - 1; i++) {
    //       let minIndex = i;
      
    //       for (let j = i + 1; j < array.length; j++) {
    //         if (array[j] < array[minIndex]) {
    //           minIndex = j;
    //         }
    //       }
      
    //       if (minIndex !== i) {
    //         // Swap elements
    //         [array[i], array[minIndex]] = [array[minIndex], array[i]];
    //       }
    //     }
    //   }
}