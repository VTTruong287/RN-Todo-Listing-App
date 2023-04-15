import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { dp } from '../../../commons/constants/dimensions';
import { useTodo } from '../../redux/todo/hook';
import { Colors } from '../../../commons/constants';

const TodoList = () => {
    const { selectedTodoList = [] } = useTodo();

    return (
        <View style={styles.container}>
            <Text style={styles.itemTitle}>List Todo:</Text>
            <ScrollView style={styles.scrollContainer} showsVerticalScrollIndicator={false}>
                {selectedTodoList.map((item: any, idx: number) => {
                    return (
                        <View style={styles.itemWrapper} key={idx}>
                            <Text style={styles.itemTitle}>Title: {item.title}</Text>
                            <Text style={styles.itemContent}>Content: {item.content}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContainer: {
        flex: 1,
        backgroundColor: '#eee',
        marginTop: dp(5),
    },
    container: {
        flex: 1,
        backgroundColor: '#eee',
        paddingTop: dp(10),
    },
    itemWrapper: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        marginVertical: dp(5),
        padding: dp(5),
    },
    itemTitle: {
        color: Colors.neutral8,
    },
    itemContent: {
        color: Colors.neutral8,
    },
});

export default TodoList;
