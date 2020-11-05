import React from 'react';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';

import {ScrollView, Button, StyleSheet, View} from 'react-native';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
const InnerStack = createNativeStackNavigator();

const Inner = (props) => (
  <InnerStack.Navigator
    screenOptions={{
      headerTranslucent: false,
      headerLargeTitle: true,
      headerShown: true,
      headerStyle: {backgroundColor: 'rgba(100,100,100, 0.5)'},
      statusBarStyle: 'light-content',
      statusBarHidden: true,
      statusBarAnimation: 'fade',
    }}>
    <InnerStack.Screen name="DeeperHome" component={HomeScreen} />
  </InnerStack.Navigator>
);

const HomeScreen = ({navigation}) => {
  const [yes, setYes] = React.useState(true);

  const ref = React.useRef();

  return (
    <>
      <View style={styles.leftTop} />
      <ScrollView
        scrollToOverflowEnabled={true}
        ref={ref}
        contentInsetAdjustmentBehavior="automatic">
        <Button
          title="TabNavigator"
          onPress={() => navigation.push('TabNavigator1')}
        />
        <Button title="Home1" onPress={() => navigation.push('Home1')} />
      </ScrollView>
    </>
  );
};

const TabNavigator = (props) => (
  <Tab.Navigator>
    <Tab.Screen name="Tab1" component={Inner} />
    <Tab.Screen name="Tab2" component={HomeScreen} />
    <Tab.Screen name="Tab3" component={HomeScreen} />
  </Tab.Navigator>
);

export default function wut() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTranslucent: true,
          headerLargeTitle: true,
          headerStyle: {backgroundColor: 'rgba(100,100,100, 0.5)'},
          statusBarHidden: false,
          statusBarStyle: 'light-content',
          statusBarAnimation: 'none',
        }}>
        <Stack.Screen name="TabNavigator" component={HomeScreen} />
        <Stack.Screen name="TabNavigator1" component={TabNavigator} />
        <Stack.Screen
          name="Home1"
          component={HomeScreen}
          options={{
            statusBarHidden: true,
            statusBarStyle: 'dark-content',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  leftTop: {
    position: 'absolute',
    width: 80,
    height: 100,
    left: 0,
    top: 0,
    backgroundColor: 'red',
  },

  bottomRight: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
  },
});
