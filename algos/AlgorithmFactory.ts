import {AlgorithmType} from './AlgorithmType';
import { IAlgorithm } from './IAlgorithm';
import BubbleSort from './implementation/BubbleSort';
import InsertionSort from './implementation/InsertionSort';
/**
 * Algorithm Selector
 * Takes in given algorithm type, returns a class that can be used to generate Array
 */

export function generateAlgorithm(type: AlgorithmType, data: Array<number>): IAlgorithm {

    switch (type) {
        case AlgorithmType.BubbleSort:
            return new BubbleSort(data);

        case AlgorithmType.InsertionSort:
        case AlgorithmType.None:
        default:  {
            return new InsertionSort(data);
        }
    }
}