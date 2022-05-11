import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";
import todoReducer from "../redux/todo.slice";

const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});

export default store;

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
