import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/home/HomeScreen';
import StatsScreen from '../screens/stats/StatsScreen';

const Tab = createBottomTabNavigator();
const BottomTabNavigator: React.FC = () => {
    return (
        <Tab.Navigator initialRouteName="home" screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen
                name="home"
                component={HomeScreen}

            />
            <Tab.Screen
                name="stats"
                component={StatsScreen}
            />
        </Tab.Navigator>
        
    );
};

export default BottomTabNavigator;
