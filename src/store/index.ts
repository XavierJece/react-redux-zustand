import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux'
import { player } from "./slices/player";

const todoSlice = createSlice({
  name: "todo",
  initialState: ["Fazer Café", "Estudar Redux"],

  reducers: {
    add: (state, action) => {
      state.push(action.payload.newTodo)
    },
  },
});

export const store = configureStore({
  reducer: {
    player
  },
});

// Actions
export const { add } = todoSlice.actions;
export type AppDispatch = typeof store.dispatch;

// Types
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch: () => AppDispatch = useDispatch;