import { createSlice, createSelector } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from './store';
import { AlgorithmType } from '@/algos/AlgorithmType';
import { HYDRATE } from "next-redux-wrapper";
import App from 'next/app';

// Define a type for the slice state
interface AlgoState {
	values: number[];
	type: AlgorithmType;
	isRunning: boolean;
}

// Define the initial state using that type
const initialState: AlgoState = {
	values: [],
	type: AlgorithmType.None,
	isRunning: false,
};

export const algoSlice = createSlice({
	name: 'algo',
	initialState,
	reducers: {
		// Specify the type of algo currently being used
		setName: (state, action: PayloadAction<AlgorithmType>) => {
			state.type = action.payload;
		},
		// Update global values to re-display
		updateArray: (state, action: PayloadAction<number[]>) => {
			state.values = action.payload;
		},
		// Set isRunning variable
		setIsRunning: (state, action: PayloadAction<boolean>) => {
			state.isRunning = action.payload;
		},
	},

	// Special reducer for hydrating the state. Special case for next-redux-wrapper
	extraReducers: {
		[HYDRATE]: (state, action) => {
		  return {
			...state,
			...action.payload.auth,
		  };
		},
	},
});

export const { setName, updateArray, setIsRunning } = algoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAlgo = (state: AppState) => state.algo;
export const selectAlgoType = (state: AppState) => state.algo.type;
export const algoIsRunning = (state: AppState) => state.algo.isRunning;

export const selectAlgoValues = createSelector(
	(state: AppState) => state.algo.values,
	(values) => [...values] // Create a copy of the array
  );

export default algoSlice.reducer;
