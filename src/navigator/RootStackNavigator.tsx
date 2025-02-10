import {createNativeStackNavigator} from '@react-navigation/native-stack';

import { RootStackParamList } from './types';
import BottomTabNavigator from './BottomTabNavigator';
import LoginScreen from '../screens/auth/LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Login">
      {/* <Stack.Screen name="BottomTab" component={BottomTabNavigator} options={{headerShown: false}}/> */}
      <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}}/>
      {/* <Stack.Screen name="Profile" component={ProfileScreen} /> */}
    </Stack.Navigator>
  );
}

export default RootStack;
