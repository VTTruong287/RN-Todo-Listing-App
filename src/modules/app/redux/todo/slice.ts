import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../init/store';

export type TodoType = {
    title: string | undefined;
    content: string | undefined;
};

type TodoState = {
    list: Array<TodoType> | undefined;
};

const initialState: TodoState = {
    list: [],
};

const todoSlice = createSlice({
    name: 'todo',
    initialState: initialState,
    reducers: {
        fetchTodoRequested: (state) => {
            console.log('=== todo-slice --- fetchTodoRequested');
        },
        fetchTodoSucceed: (state, action: PayloadAction<Array<TodoType>>) => {
            console.log('=== todo-slice --- fetchTodoSucceed');
            state.list = action.payload;
        },

        addTodoRequested: (state, action: PayloadAction<TodoType>) => {
            console.log('=== todo-slice --- addTodoRequested');
        },
    },
});

/* --- ACTIONS --- */
export const todoActions = todoSlice.actions;

/* --- REDUCERS --- */
export const todoReducers = todoSlice.reducer;

/* --- SELECTORS --- */
export const selectTodoList = (state: RootState) => state.todo.list;
