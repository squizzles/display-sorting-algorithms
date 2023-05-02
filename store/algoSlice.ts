import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from './store';
import Algorithm from '@/algos/Algorithm';

// Define a type for the slice state
interface AlgoState {
	values: Array<number>;
	type: Algorithm;
}

// Define the initial state using that type
const initialState: AlgoState = {
	values: [],
	type: Algorithm.None,
};

export const algoSlice = createSlice({
	name: 'algo',
	initialState,
	reducers: {
		// Specify the type of algo currently being used
		setName: (state, action: PayloadAction<Algorithm>) => {
			state.type = action.payload;
		},
		// Update global values to re-display
		updateValues: (state, action: PayloadAction<Array<number>>) => {
			state.values = action.payload;
		},
	},
});

export const { setName, updateValues } = algoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAlgo = (state: RootState) => state.algo;

export default algoSlice.reducer;
