import '@walletconnect/react-native-compat';
import UniversalProvider from '@walletconnect/universal-provider';

// @ts-expect-error - `@env` is a virtualised module via Babel config.
import { ENV_PROJECT_ID, ENV_RELAY_URL } from '@env';
import { SessionTypes } from '@walletconnect/types';
import { ethers } from 'ethers';
import { Alert } from 'react-native';

export let universalProvider: UniversalProvider;
export let web3Provider: ethers.providers.Web3Provider | undefined;
export let universalProviderSession: SessionTypes.Struct | undefined;

export async function createUniversalProvider() {
    // console.log('[CONFIG] ENV_PROJECT_ID:', ENV_PROJECT_ID);
    // console.log('[CONFIG] ENV_RELAY_URL:', ENV_RELAY_URL);

    try {
        universalProvider = await UniversalProvider.init({
            logger: 'info',
            relayUrl: ENV_RELAY_URL, //'wss://relay.walletconnect.com'
            projectId: ENV_PROJECT_ID, //aff802f1f2a8a51c29d051b2e72ff32a
            metadata: {
                name: 'React Native V2 dApp',
                description: 'RN dApp by WalletConnect',
                url: 'https://walletconnect.com/',
                icons: ['https://avatars.githubusercontent.com/u/37784886'],
            },
        });
    } catch {
        Alert.alert('Error', 'Error connecting to WalletConnect');
    }
}

export function clearSession() {
    universalProviderSession = undefined;
    web3Provider = undefined;
}

export async function createUniversalProviderSession(callbacks?: {
    onSuccess?: () => void;
    onFailure?: (error: any) => void;
}) {
    try {
        console.log('=== HERE 1');
        universalProviderSession = await universalProvider.connect({
            namespaces: {
                eip155: {
                    methods: [
                        'eth_sendTransaction',
                        'eth_signTransaction',
                        'eth_sign',
                        'personal_sign',
                        'eth_signTypedData',
                    ],
                    chains: ['eip155:1'],
                    events: ['chainChanged', 'accountsChanged'],
                    rpcMap: {},
                },
            },
        });
        console.log('=== HERE 2');

        web3Provider = new ethers.providers.Web3Provider(universalProvider);
        callbacks?.onSuccess?.();
    } catch (error) {
        console.log('=== HERE 3 - ERROR: ', error);

        callbacks?.onFailure?.(error);
    }
}
