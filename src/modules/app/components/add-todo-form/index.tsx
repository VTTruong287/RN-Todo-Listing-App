import { Button, TextBox } from '../../../commons/components/';
import { StyleSheet, Text, View } from 'react-native';
import { useTodo } from '../../redux/todo/hook';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { TodoType } from '../../redux/todo/slice';
import { dp, Colors } from '../../../commons/constants';

const AddTodoForm = () => {
    const { dispatchAddTodoRequested } = useTodo();

    const addTodoHandler = (data: any) => {
        dispatchAddTodoRequested(data);
    };

    const formSchema = Yup.object().shape({
        title: Yup.string().required(),
        content: Yup.string().required(),
    });

    const {
        handleSubmit,
        setValue,
        getValues,
        formState: { errors },
    } = useForm<TodoType>({
        resolver: yupResolver(formSchema),
        defaultValues: {},
    });

    return (
        <View style={styles.container}>
            <Text>Title</Text>
            <TextBox
                viewStyle={styles.textBox}
                placeholder="Title"
                defaultValue={getValues('title')}
                onChangeText={(value) => setValue('title', value)}
                errorMessage={errors.title?.message}
            />
            <Text>Content</Text>
            <TextBox
                viewStyle={styles.textBox}
                placeholder="Content"
                defaultValue={getValues('content')}
                onChangeText={(value) => setValue('content', value)}
                errorMessage={errors.content?.message}
            />
            <Button
                defaultStyle={styles.buttonDefaultStyle}
                textStyle={styles.buttonTextStyle}
                text="Add"
                onPressed={handleSubmit(addTodoHandler)}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        minHeight: dp(200),
        padding: dp(10),
    },
    textBox: {
        width: '100%',
        maxHeight: dp(40),
        marginVertical: dp(5),
    },
    buttonDefaultStyle: {
        backgroundColor: Colors.primary4,
        color: Colors.neutral1,
    },
    buttonTextStyle: {
        fontWeight: 'bold',
    },
});

export default AddTodoForm;
