import {createStackNavigator} from '@react-navigation/stack';
import BottomTabNavigator from './bottomTabNavigator';
import TransactionDetailsScreen from '../screens/transaction/details/TransactionDetailsScreen';
import AddTransactionScreen from '../screens/transaction/add/AddTransactionScreen';

const Stack = createStackNavigator();

const RootStack: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="bottom-tabs">
      <Stack.Screen
        name="bottom-tabs"
        component={BottomTabNavigator}
        options={{
          headerShown: false,
        }}
      />

      <Stack.Screen
        name="transaction-details"
        component={TransactionDetailsScreen}
      />
      <Stack.Screen
        name="add-transaction"
        component={AddTransactionScreen}
        options={{
          title: '',
        }}
      />
    </Stack.Navigator>
  );
};

export default RootStack;
