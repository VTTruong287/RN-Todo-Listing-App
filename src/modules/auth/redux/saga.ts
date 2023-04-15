import { fork } from 'redux-saga/effects';

function* init() {
    /**
     * fetchTodoRequested
     */
    // console.log('=== todo-saga --- watch --- fetchTodoRequested');
    // yield takeLeading(todoActions.fetchTodoRequested.type, function* (action: PayloadAction<any>): any {
    //     console.log('=== todo-saga --- take --- fetchTodoRequested: ', action.payload);
    //     const todoListFromApi = yield call([ApiService, ApiService.getTodoList]);
    //     yield put(todoActions.fetchTodoSucceed(todoListFromApi));
    // });
}

export default function* authSaga() {
    console.log('auth-saga');

    yield fork(init);
}
