import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './src/navigator/RootStackNavigator';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App(): React.JSX.Element {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
          <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export default App;
