import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { dp } from '../../../commons/contants/dimensions';
import { useTodo } from '../../redux/todo/hook';

const TodoList = () => {
    const { selectedTodoList = [] } = useTodo();

    return (
        <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
            {selectedTodoList.map((item: any, idx: number) => {
                return (
                    <View style={styles.itemWrapper}>
                        <Text>Title: {item.title}</Text>
                        <Text>Content: {item.content}</Text>
                    </View>
                );
            })}
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#eee',
        width: '100%',
    },
    itemWrapper: {
        flex: 1,
        flexGrow: 1,
        width: '100%',
        backgroundColor: '#fff',
        marginVertical: dp(5),
        padding: dp(5),
    },
});

export default TodoList;
