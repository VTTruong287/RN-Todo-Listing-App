import React from 'react';
import { StyleSheet, View } from 'react-native';
import ConnectWalletButton from '../../modules/auth/components/connect-wallet-button';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type LoginScreenProps = {
    navigation: NativeStackNavigationProp<any>;
};

const LoginScreen = (props: LoginScreenProps) => {
    return (
        <View style={styles.container}>
            <ConnectWalletButton />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});

export default LoginScreen;
