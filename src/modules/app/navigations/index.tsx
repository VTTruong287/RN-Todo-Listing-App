import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from '../../../screens/index';
import React from 'react';
import { useAppContext } from '../contexts/app';
import { ScreenName } from '../../commons/contants';
import { useTodo } from '../redux/todo/hook';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
    const { status } = useAppContext();
    const { dispatchFetchTodoRequested } = useTodo();

    React.useEffect(() => {
        dispatchFetchTodoRequested();
    }, []);

    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={ScreenName.HomeScreen}
                screenOptions={{
                    headerShown: true,
                }}
            >
                <Stack.Screen name={ScreenName.LoginScreen} component={LoginScreen} />
                <Stack.Screen name={ScreenName.HomeScreen} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
