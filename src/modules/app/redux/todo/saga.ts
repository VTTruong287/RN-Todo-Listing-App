import { PayloadAction } from '@reduxjs/toolkit';
import { call, fork, put, takeEvery, select, delay, takeLeading } from 'redux-saga/effects';
import { TodoType, selectTodoList, todoActions } from './slice';
import ApiService from '../../../commons/services/api';

function* init() {
    /**
     * fetchTodoRequested
     */
    console.log('=== todo-saga --- watch --- fetchTodoRequested');
    yield takeLeading(todoActions.fetchTodoRequested.type, function* (action: PayloadAction<any>): any {
        console.log('=== todo-saga --- take --- fetchTodoRequested: ', action.payload);
        const todoListFromApi = yield call([ApiService, ApiService.getTodoList]);

        yield put(todoActions.fetchTodoSucceed(todoListFromApi));
    });

    /**
     * addTodoRequested
     */
    console.log('=== todo-saga --- watch --- addTodoRequested');
    yield takeLeading(todoActions.addTodoRequested.type, function* (action: PayloadAction<TodoType>): any {
        console.log('=== todo-saga --- take --- addTodoRequested: ', action.payload);

        if (action.payload) {
            const todoList: Array<TodoType> = yield call([ApiService, ApiService.addTodo], action.payload);

            yield put(todoActions.fetchTodoSucceed(todoList));
        }
    });
}

export default function* todoSaga() {
    console.log('todo-saga');

    yield fork(init);
}
