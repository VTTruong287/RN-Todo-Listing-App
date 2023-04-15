import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../../app/redux/init/store';

export type UpdateWalletAddressPayload = {
    walletAddress: string | undefined;
};

type AuthState = {
    walletAddress: string | undefined;
};

const initialState: AuthState = {
    walletAddress: '',
};

const authSlice = createSlice({
    name: 'auth',
    initialState: initialState,
    reducers: {
        updateWalletAddress: (state, action: PayloadAction<UpdateWalletAddressPayload>) => {
            console.log('=== auth-slice --- updateWalletAddress');

            state.walletAddress = action.payload.walletAddress;
        },
    },
});

/* --- ACTIONS --- */
export const authActions = authSlice.actions;

/* --- REDUCERS --- */
export const authReducers = authSlice.reducer;

/* --- SELECTORS --- */
export const selectAuthWalletAddress = (state: RootState) => state.auth.walletAddress;
