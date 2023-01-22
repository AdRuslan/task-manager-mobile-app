import {NavigationContainer} from '@react-navigation/native';
import { store } from './store/store'
import {Provider} from 'react-redux'
import AuthFlow from './AuthFlow';

export default function App() {
    return (
        <Provider store={store}>
            <NavigationContainer>
                <AuthFlow/>
            </NavigationContainer>
        </Provider>
    );
}
