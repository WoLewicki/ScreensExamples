import * as React from 'react';
import {View, Button, StyleSheet, ScrollView, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

enableScreens();

const NativeStack = createNativeStackNavigator();

function First({navigation}) {
  return (
    <ScrollView
      style={{backgroundColor: 'pink', flex: 1}}
      contentInsetAdjustmentBehavior="automatic">
      <Button
        title="Go To Second"
        onPress={() => navigation.navigate('Second')}
      />
    </ScrollView>
  );
}

function Second({navigation}) {
  return (
    <ScrollView
      style={{backgroundColor: 'yellow', flex: 1}}
      contentInsetAdjustmentBehavior="automatic">
      <Button
        title="Go To Third"
        onPress={() => navigation.navigate('Third')}
      />
    </ScrollView>
  );
}

export default function BugStack() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator>
        <NativeStack.Screen
          name="First"
          component={First}
          options={{
            title: 'ŁŁó',
            headerLargeTitle: true,
            headerTranslucent: true,
            headerTitleStyle: {
              // fontSize: 50,
            },
            headerLargeTitleStyle: {
              // fontSize: 34,
            },
          }}
        />
        <NativeStack.Screen
          name="Second"
          component={Second}
          options={{
            title: 'Szczegóły',
            headerLargeTitle: true,
            headerTranslucent: true,
          }}
        />
        <NativeStack.Screen
          name="Third"
          component={Second}
          options={{title: 'SzczegółyŁ'}}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
