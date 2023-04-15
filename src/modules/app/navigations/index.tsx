import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen, LoginScreen } from '../../../screens/index';
import React from 'react';
import { AppStateEnum, useAppContext } from '../contexts/app';
import { ScreenName } from '../../commons/constants';
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
                initialRouteName={ScreenName.LoginScreen}
                screenOptions={{
                    headerShown: true,
                }}
            >
                {status != AppStateEnum.LOGGED_IN && (
                    <Stack.Screen
                        name={ScreenName.LoginScreen}
                        component={LoginScreen}
                        options={{ headerShown: false }}
                    />
                )}
                {status == AppStateEnum.LOGGED_IN && (
                    <Stack.Screen name={ScreenName.HomeScreen} component={HomeScreen} />
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default AppNavigation;
