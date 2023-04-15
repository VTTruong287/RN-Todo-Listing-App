import { AppProvider } from '../modules/app/contexts/app';
import AppNavigation from '../modules/app/navigations';
import { store } from '../modules/app/redux/init/store';
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
