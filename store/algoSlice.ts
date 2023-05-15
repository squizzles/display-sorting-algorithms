import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { AppState } from './store';
import Algorithm from '@/algos/Algorithm';
import { HYDRATE } from "next-redux-wrapper";

// Define a type for the slice state
interface AlgoState {
	values: Array<number>;
	type: string;
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

export const { setName, updateValues } = algoSlice.actions;

// Other code such as selectors can use the imported `RootState` type
export const selectAlgo = (state: AppState) => state.algo;
export const selectAlgoType = (state: AppState) => state.algo.type;

export default algoSlice.reducer;
