import { TodoType } from '../../../app/redux/todo/slice';
import DataService, { DataKey } from '../data-service';

class ApiService {
    async getTodoList() {
        let result: Array<TodoType> = [];
        let todoListFromStore = await DataService.getItem(DataKey.TODO_DATA);

        try {
            result = JSON.parse(todoListFromStore);
        } catch (error) {}

        if (!result || result.length == 0) {
            result = [
                {
                    title: 'Todo 1',
                    content: 'Content 1',
                },
                {
                    title: 'Todo 2',
                    content: 'Content 2',
                },
            ];
        }

        return result;
    }
    async addTodo(todoItem: TodoType) {
        let result = await this.getTodoList();

        result.push(todoItem);

        await DataService.setItem(DataKey.TODO_DATA, JSON.stringify(result));

        return result;
    }
}

export default new ApiService();
