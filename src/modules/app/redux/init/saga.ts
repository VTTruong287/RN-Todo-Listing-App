import { all, call } from 'redux-saga/effects';
import todoSaga from '../todo/saga';
import authSaga from '../../../auth/redux/saga';

export function* appSaga() {
    yield all([authSaga(), todoSaga()]);
}
