import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { appSaga } from './saga';
import { todoReducers } from '../todo/slice';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    reducer: {
        todo: todoReducers,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: false,
        }).concat(sagaMiddleware),
});

sagaMiddleware.run(appSaga);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
