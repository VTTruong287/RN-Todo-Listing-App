import { useAppDispatch, useAppSelector } from '../init/hooks';
import { TodoType, selectTodoList, todoActions } from './slice';

const useTodo = () => {
    const dispatch = useAppDispatch();

    const selectedTodoList = useAppSelector(selectTodoList);

    const dispatchFetchTodoRequested = () => {
        dispatch(todoActions.fetchTodoRequested());
    };
    const dispatchAddTodoRequested = (payload: TodoType) => {
        dispatch(todoActions.addTodoRequested(payload));
    };

    return {
        selectedTodoList,
        dispatchFetchTodoRequested,
        dispatchAddTodoRequested,
    };
};

export { useTodo };
