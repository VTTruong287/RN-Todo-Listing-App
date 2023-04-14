import React from 'react';
import { StyleSheet, View } from 'react-native';
import ConnectWalletButton from '../../modules/app/components/connect-wallet-button';

const LoginScreen = () => {
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
