/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createAppContainer} from 'react-navigation';
// import {createStackNavigator} from 'react-navigation-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
// import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

enableScreens();

class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.verticalContainer}>
        <View style={styles.centeredContainer}>
          <Text>Hi I'm the FIRST screen</Text>
        </View>
        <View style={styles.flexOne}>
          <TouchableOpacity
            style={[styles.centeredContainer, styles.buttonExtras]}
            onPress={() => this.props.navigation.push('Second')}>
            <Text style={styles.buttonText}>Tap me for second screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

class SecondScreen extends React.Component {
  render() {
    return (
      <View style={styles.verticalContainer}>
        <View style={styles.centeredContainer}>
          <Text>Hi I'm the SECOND screen</Text>
          <TouchableOpacity
            style={[styles.centeredContainer, styles.buttonExtras]}
            onPress={() => console.warn('Touch works')}>
            <Text style={styles.buttonText}>Tap me</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.x} />
      </View>
    );
  }
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Second" component={SecondScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// const AppNavigator = createNativeStackNavigator({
//   Home: HomeScreen,
//   Second: SecondScreen,
//   initialRouteName: 'Home',
// });

// export default createAppContainer(AppNavigator);

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  buttonExtras: {
    backgroundColor: '#3A8EED',
    borderRadius: 20,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
