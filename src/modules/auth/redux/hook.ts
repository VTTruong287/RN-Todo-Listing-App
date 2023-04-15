import { useAppDispatch, useAppSelector } from '../../app/redux/init/hooks';
import { UpdateWalletAddressPayload, authActions, selectAuthWalletAddress } from './slice';

const useAuth = () => {
    const dispatch = useAppDispatch();

    const selectedWalletAddress = useAppSelector(selectAuthWalletAddress);

    const dispatchUpdateWalletAddress = (payload: UpdateWalletAddressPayload) => {
        dispatch(authActions.updateWalletAddress(payload));
    };

    return {
        selectedWalletAddress,
        dispatchUpdateWalletAddress,
    };
};

export { useAuth };
