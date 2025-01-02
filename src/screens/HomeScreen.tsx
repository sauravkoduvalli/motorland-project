import React from 'react';
import {Button, Text, View} from 'react-native';
import {useNavigation} from '@react-navigation/native';

function HomeScreen() {
  const navigation = useNavigation();
  const goto = () => {
    navigation.navigate('Profile');
  };
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <Text style={{textAlign: 'center'}}>Home</Text>
      <Button onPress={goto} title="Learn More"></Button>
    </View>
  );
}

export default HomeScreen;
