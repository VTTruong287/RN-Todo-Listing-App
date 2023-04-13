import { StatusBar } from 'expo-status-bar';
import React from 'react';

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
    children: React.ReactNode;
};
const AppProvider = (props: AppProviderProps) => {
    const [appState, setAppState] = React.useState(AppStateEnum.UNKNOWN);
    return (
        <AppContext.Provider value={{ status: appState }}>
            {props.children}
            <StatusBar style="auto" />
        </AppContext.Provider>
    );
};

export { AppProvider, useAppContext };
export default AppContext;
