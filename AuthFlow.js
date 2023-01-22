import {ROUTES} from './const';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TaskListScreen from './screens/task-list';
import CreateTaskScreen from './screens/create-task';
import LoginScreen from './screens/login';
import {useSelector} from 'react-redux';
import {selectIsAuth} from './store/slices/baseSlice';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const AuthFlow = () => {
    const isAuth = useSelector(selectIsAuth);

    if (isAuth) {
        return (
            <Tab.Navigator
                screenOptions={({route}) => ({
                    tabBarIcon: ({focused, color, size}) => {
                        let iconName;

                        if (route.name === ROUTES.TASK_LIST) {
                            iconName = focused ? 'ios-list' : 'ios-list-outline';
                        } else if (route.name === ROUTES.CREATE_TASK) {
                            iconName = focused ? 'add-circle' : 'add-circle-outline';
                        }

                        return <Ionicons name={iconName} size={size} color={color}/>;
                    },
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                })}>
                <Tab.Screen name={ROUTES.TASK_LIST} component={TaskListScreen}/>
                <Tab.Screen name={ROUTES.CREATE_TASK} component={CreateTaskScreen}/>
            </Tab.Navigator>
        )
    }

    return <LoginScreen/>
}

export default AuthFlow
