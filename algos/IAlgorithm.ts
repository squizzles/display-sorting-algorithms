
/**
 * The interface declares the operations that all concrete algorithms must implement
 */
export interface IAlgorithm {
    step(): number[];
    isSorted(): boolean;
}