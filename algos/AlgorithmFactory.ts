import {AlgorithmType} from './AlgorithmType';
import { IAlgorithm } from './IAlgorithm';
import LinearSort from './implementation/LinearSort';
/**
 * Algorithm Selector
 * Takes in given algorithm type, returns a class that can be used to generate Array
 */

function generateAlgorithm(type: AlgorithmType, data: Array<number>): IAlgorithm {

    switch (type) {
        case AlgorithmType.LinearSort:
        case AlgorithmType.None:
        default:  {
            return new LinearSort(data);
        }
    }
}