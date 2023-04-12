import { ScrollView, Text } from 'react-native/types';

const TodoList = () => {
    const items = [
        {
            id: 1,
            value: 'xxx',
        },
        {
            id: 2,
            value: 'yyy',
        },
        {
            id: 3,
            value: 'zzz',
        },
    ];
    return (
        <ScrollView showsVerticalScrollIndicator={false} horizontal={true}>
            {items.map((item: any, idx: number) => {
                return <Text>item.value</Text>;
            })}
        </ScrollView>
    );
};

export default TodoList;
