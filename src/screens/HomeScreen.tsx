import React from 'react';
import {Alert, StatusBar} from 'react-native';
import {Button, StyleSheet, Text} from 'react-native';
import {SafeAreaProvider, SafeAreaView} from 'react-native-safe-area-context';

function HomeScreen() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.mainContainer}>
        <StatusBar />
        <Text style={{textAlign: 'center'}}>Home</Text>
        <Button
          onPress={() => Alert.alert('Simple Button pressed')}
          title="Learn More"
        />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {flex: 1, justifyContent: 'center'},
});

export default HomeScreen;
