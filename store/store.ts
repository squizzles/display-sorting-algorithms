import { createWrapper } from 'next-redux-wrapper';
import algoReducer from './algoSlice';
import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';

// https://blog.logrocket.com/use-redux-next-js/

const makeStore = () => configureStore({
	reducer: {
		algo: algoReducer,
	},
	devTools: true,
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppStore = ReturnType<typeof makeStore>;
export type AppState = ReturnType<AppStore["getState"]>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  AppState,
  unknown,
  Action
>;

// Next.js wrapper
export const wrapper = createWrapper<AppStore>(makeStore);