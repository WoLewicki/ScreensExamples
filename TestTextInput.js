import * as React from 'react';
import {View, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';

function HomeScreen({navigation, route}) {
  return (
    <ScrollView
      contentContainerStyle={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <TextInput placeholder={'Username'} autoCompleteType={'email'} />
      <TextInput
        placeholder={'Password'}
        autoCompleteType={'password'}
        secureTextEntry={true}
      />
      <View style={styles.bottomRight} />
    </ScrollView>
  );
}

function HomeScreen1({navigation, route}) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-end',
      }}>
      <View style={styles.bottomRight} />
    </View>
  );
}

function HomeStack() {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

function EditStack() {
  const Stack1 = createNativeStackNavigator();
  return (
    <Stack1.Navigator>
      <Stack1.Screen name="Home1" component={HomeScreen1} />
    </Stack1.Navigator>
  );
}

function TabStack() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{unmountOnBlur: true}}>
      <Tab.Screen name="HomeStack" component={HomeStack} />
      <Tab.Screen name="EditStack" component={EditStack} />
    </Tab.Navigator>
  );
}

function RootStack() {
  const Root = createNativeStackNavigator();
  return (
    <Root.Navigator
      screenOptions={{
        headerLargeTitle: true,
      }}>
      <Root.Screen name="First" component={TabStack} />
    </Root.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  bottomRight: {
    width: 100,
    height: 100,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
  },
});
