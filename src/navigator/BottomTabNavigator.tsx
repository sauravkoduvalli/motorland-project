import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ChatScreen from '../screens/ChatScreen';
import ProfileScreen from '../screens/ProfileScreen';
import {BottomTabStackParamList} from './types';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator<BottomTabStackParamList>();

function BottomTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = '';
          let iconType = focused ? '' : '-outline'; // Add '-outline' for outlined icons
          if (route.name === 'Home') {
            iconName = 'home' + iconType;
          } else if (route.name === 'Chat') {
            iconName = 'chat' + iconType;
          } else if (route.name === 'Profile') {
            iconName = 'account' + iconType;
          }
          return <Icon name={iconName} size={30} color={color} />;
        },
        tabBarActiveTintColor: 'green', // Active icon color
        tabBarInactiveTintColor: 'gray', // Inactive icon color
      })}>
      <Tab.Screen name="Home" component={HomeScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Chat" component={ChatScreen} options={{headerShown: false}}/>
      <Tab.Screen name="Profile" component={ProfileScreen} options={{headerShown: false}}/>
    </Tab.Navigator>
  );
}

export default BottomTabNavigator;
