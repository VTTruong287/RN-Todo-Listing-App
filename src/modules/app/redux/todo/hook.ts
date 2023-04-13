import { useAppDispatch, useAppSelector } from '../init/hooks';
import { selectTodoList, todoActions } from './slice';

const useTodo = () => {
    const dispatch = useAppDispatch();

    const selectedTodoList = useAppSelector(selectTodoList);

    const dispatchFetchTodoRequested = () => {
        dispatch(todoActions.fetchTodoRequested());
    };

    return {
        selectedTodoList,
        dispatchFetchTodoRequested,
    };
};

export { useTodo };
