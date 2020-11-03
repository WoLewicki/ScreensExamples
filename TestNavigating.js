import React from 'react';
import {
  Text,
  TouchableOpacity,
  View,
  ViewStyle,
  StyleProp,
  Button,
} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {useSafeArea, SafeAreaProvider} from 'react-native-safe-area-context';

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const NestedStack = createNativeStackNavigator();

const buttonStyle: StyleProp<ViewStyle> = {
  margin: 20,
  backgroundColor: 'pink',
  padding: 10,
  borderRadius: 10,
  display: 'flex',
};

function Tab1(props: any) {
  const insets = useSafeArea();

  return (
    <View style={{marginTop: insets.top}}>
      <Text>I am Tab1 (Please, go to Tab2)</Text>
      <Button title="Press" onPress={() => props.navigation.navigate('Home')} />
    </View>
  );
}

function Tab2() {
  return (
    <NestedStack.Navigator
      initialRouteName="Screen4"
      // screenOptions={{stackAnimation: 'none'}}
    >
      <NestedStack.Screen
        name="Screen4"
        options={{headerShown: false}}
        component={Screen4}
      />
      <NestedStack.Screen name="Screen5" component={Screen5} />
    </NestedStack.Navigator>
  );
}

function Screen1() {
  return (
    <Tab.Navigator initialRouteName="Tab1">
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
}

function Screen2(props: any) {
  const insets = useSafeArea();

  return (
    <View style={{marginTop: insets.top}}>
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => props.navigation.navigate('Screen3')}>
        <Text>I am Screen2, Navigate to Screen3</Text>
      </TouchableOpacity>
    </View>
  );
}

function Screen3(props: any) {
  const insets = useSafeArea();

  // Issue arise after calling this function
  const handleNavigation = () => {
    props.navigation.navigate('Screen1', {
      screen: 'Tab2',
      initial: false,
      params: {
        screen: 'Screen5',
        initial: false,
      },
    });
  };

  return (
    <View style={{marginTop: insets.top}}>
      <Button title="Press" onPress={() => props.navigation.navigate('Home')} />

      <TouchableOpacity style={buttonStyle} onPress={handleNavigation}>
        <Text>I am Screen3, Navigate to Screen 5</Text>
      </TouchableOpacity>
    </View>
  );
}

function Screen4(props: any) {
  const insets = useSafeArea();

  return (
    <View style={{marginTop: insets.top}}>
      {/* Click this button first */}
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => props.navigation.navigate('Screen2')}>
        <Text>I am Screen4, Navigate to Screen2</Text>
      </TouchableOpacity>
      {/* Click this button at the end of the flow */}
      <TouchableOpacity
        style={buttonStyle}
        onPress={() => props.navigation.navigate('Screen5')}>
        <Text>
          I am Screen4, Navigate to Screen5 (click it after reproducing issue)
        </Text>
      </TouchableOpacity>
    </View>
  );
}

// This screens cannot be opened properly
function Screen5() {
  const insets = useSafeArea();

  return (
    <View style={{marginTop: insets.top}}>
      <Text>I am Screen5</Text>
    </View>
  );
}

const Another = createNativeStackNavigator();

const all = () => {
  return (
    <Stack.Navigator
      initialRouteName="Screen1"
      // screenOptions={{headerShown: false, stackAnimation: 'none'}}
    >
      <Stack.Screen name="Screen1" component={Screen1} />
      <Stack.Screen name="Screen2" component={Screen2} />
      <Stack.Screen name="Screen3" component={Screen3} />
    </Stack.Navigator>
  );
};

function Home() {
  return <View />;
}

export default function App() {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Another.Navigator screenOptions={{stackPresentation: 'modal'}}>
          <Another.Screen name="Root" component={all} />
          <Another.Screen name="Home" component={Home} />
        </Another.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
