import React, { ReactChild } from 'react';
import { View } from 'react-native/types';

export enum AppStateEnum {
    UNKNOWN,
    INITIALIZING,
    LOGGED_IN,
    LOG_OUT,
}

type AppContextProps = {
    status: AppStateEnum;
};

const AppContext = React.createContext<AppContextProps>({
    status: AppStateEnum.UNKNOWN,
});
const useAppContext = () => React.useContext(AppContext);

type AppProviderProps = {
    children: ReactChild | ReactChild[];
};
const AppProvider = (props: AppProviderProps) => {
    const [appState, setAppState] = React.useState(AppStateEnum.UNKNOWN);
    return <AppContext.Provider value={{ status: appState }}>{props.children}</AppContext.Provider>;
};

export { AppProvider, useAppContext };
export default AppContext;
