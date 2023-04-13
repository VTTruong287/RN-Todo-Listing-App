import { AppProvider } from './src/modules/app/contexts/app';
import AppNavigation from './src/modules/app/navigations';
import { store } from './src/modules/app/redux/init/store';
import { Provider as ReduxProvider } from 'react-redux';

export default function App() {
    return (
        <ReduxProvider store={store}>
            <AppProvider>
                <AppNavigation />
            </AppProvider>
        </ReduxProvider>
    );
}
