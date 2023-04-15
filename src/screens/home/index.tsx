import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import React from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { clearSession, universalProvider } from '../../utils/UniversalProvider';
import AddTodoForm from '../../modules/app/components/add-todo-form';
import TodoList from '../../modules/app/components/todo-list';
import { AppStateEnum, useAppContext } from '../../modules/app/contexts/app';
import { useAuth } from '../../modules/auth/redux/hook';
import { Button } from '../../modules/commons/components';
import { Colors, dp } from '../../modules/commons/constants';
import { format2ShortId } from '../../utils/string';

type HomeScreenProps = {
    navigation: NativeStackNavigationProp<any>;
};

const HomeScreen = (props: HomeScreenProps) => {
    const { navigation } = props;
    const { selectedWalletAddress = '', dispatchUpdateWalletAddress } = useAuth();
    const { setAppState } = useAppContext();

    const disconnectHandler = React.useCallback(async () => {
        try {
            await universalProvider.disconnect();
            clearSession();
            dispatchUpdateWalletAddress({
                walletAddress: '',
            });
            setAppState(AppStateEnum.LOG_OUT);
        } catch (err: unknown) {
            Alert.alert('Error', 'Error disconnecting');
        }
    }, []);

    return (
        <View style={styles.container}>
            <View style={styles.walletAddressWrapper}>
                <Text style={styles.walletAddressText}>Wallet address: {format2ShortId(selectedWalletAddress)}</Text>
                <Button
                    defaultStyle={styles.disconnectButton}
                    style={{ width: dp(120) }}
                    text="Disconnect"
                    onPressed={disconnectHandler}
                />
            </View>
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
    disconnectButton: {
        color: Colors.neutral1,
        backgroundColor: Colors.primary4,
    },
    walletAddressWrapper: {
        maxHeight: dp(40),
        flex: 1,
        justifyContent: 'space-between',
        alignContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        paddingHorizontal: dp(5),
        marginTop: dp(10),
    },
    walletAddressText: {
        color: Colors.neutral8,
    },
});

export default HomeScreen;
