import { Button, TextBox } from '../../../commons/components/';
import { StyleSheet, Text, View } from 'react-native';

const AddTodoForm = () => {
    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextBox />
            <Text>Content</Text>
            <TextBox />
            <Button text="Add" />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default AddTodoForm;
