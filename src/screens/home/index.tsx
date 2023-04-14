import { StyleSheet, View } from 'react-native';
import TodoList from '../../modules/app/components/todo-list';
import AddTodoForm from '../../modules/app/components/add-todo-form';

const HomeScreen = () => {
    return (
        <View style={styles.container}>
            <AddTodoForm />
            <TodoList />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default HomeScreen;
