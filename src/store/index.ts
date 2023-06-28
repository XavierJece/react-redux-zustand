import { configureStore, createSlice } from "@reduxjs/toolkit";
import { useSelector, TypedUseSelectorHook } from 'react-redux'

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
    todo: todoSlice.reducer,
  },
});

// Actions
export const { add } = todoSlice.actions;

// Types
export type RootState = ReturnType<typeof store.getState>
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector