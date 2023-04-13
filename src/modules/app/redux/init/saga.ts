import { all, call } from 'redux-saga/effects';
import todoSaga from '../todo/saga';

export function* appSaga() {
    yield all([todoSaga()]);
}
