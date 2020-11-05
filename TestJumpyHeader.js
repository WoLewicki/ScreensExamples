/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, ScrollView, Button} from 'react-native';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

export const HomeScreen = ({navigation}) => {
  return (
    // <ScrollView
    //   // contentInsetAdjustmentBehavior="automatic"
    //   contentOffset={{
    //     y: 100,
    //   }}>
    <Button
      title="TabNavigator"
      onPress={() => navigation.navigate('TabNavigator')}
    />
    // </ScrollView>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name="Tab1" component={HomeScreen} />
    <Tab.Screen name="Tab2" component={HomeScreen} />
    <Tab.Screen name="Tab3" component={HomeScreen} />
  </Tab.Navigator>
);

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerTranslucent: true,
          headerLargeTitle: true,
          // headerStyle: {backgroundColor: 'transparent'},
        }}>
        <Stack.Screen name="Home1" component={HomeScreen} />
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
