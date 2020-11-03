import React from 'react';
import {ScrollView, View, Text, Button} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';

function HomeScreen({navigation}) {
  return (
    <>
      <ScrollView contentInsetAdjustmentBehavior="automatic">
        <View style={{height: 100, width: 100, backgroundColor: 'red'}}></View>
      </ScrollView>
    </>
  );
};

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const NestedStack = createStackNavigator();
const NestedNativeStack = createNativeStackNavigator();
const MaterialBottomTab = createMaterialBottomTabNavigator();

const TabNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name="Tab1" component={HomeScreen} />
    <Tab.Screen name="Tab2" component={HomeScreen} />
    <Tab.Screen name="Tab3" component={HomeScreen} />
  </Tab.Navigator>
);

const NestedNativeStackNavigator = (props) => (
  <NestedNativeStack.Navigator>
    <NestedNativeStack.Screen name="Screen" component={HomeScreen} />
  </NestedNativeStack.Navigator>
);

const NestedStackNavigator = (props) => (
  <NestedStack.Navigator>
    <NestedStack.Screen name="Screen" component={HomeScreen} />
  </NestedStack.Navigator>
);

const MaterialBottomNavigator = (props) => (
  <MaterialBottomTab.Navigator>
    <MaterialBottomTab.Screen name="Screen" component={HomeScreen} />
  </MaterialBottomTab.Navigator>
);

export default function () {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerTranslucent: true}}>
        {/* <Stack.Screen name="Home1" component={HomeScreen} /> */}
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
        <Stack.Screen
          name="NestedStackNavigator"
          component={NestedStackNavigator}
        />
        <Stack.Screen
          name="NestedNativeStackNavigator"
          component={NestedNativeStackNavigator}
        />
        <Stack.Screen
          name="MaterialBottomNavigator"
          component={MaterialBottomNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
