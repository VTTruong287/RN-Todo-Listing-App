import React from 'react';
import { StatusBar } from 'react-native';

export enum AppStateEnum {
    UNKNOWN,
    INITIALIZING,
    LOGGED_IN,
    LOG_OUT,
}

type AppContextProps = {
    status: AppStateEnum;
    setAppState: Function;
};

const AppContext = React.createContext<AppContextProps>({
    status: AppStateEnum.UNKNOWN,
    setAppState: () => {},
});
const useAppContext = () => React.useContext(AppContext);

type AppProviderProps = {
    children: React.ReactNode;
};
const AppProvider = (props: AppProviderProps) => {
    const [appState, setAppState] = React.useState(AppStateEnum.UNKNOWN);
    return (
        <AppContext.Provider value={{ status: appState, setAppState }}>
            {props.children}
            <StatusBar translucent={true} backgroundColor={'transparent'} />
        </AppContext.Provider>
    );
};

export { AppProvider, useAppContext };
export default AppContext;
