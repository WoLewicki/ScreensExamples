import * as React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {enableScreens} from 'react-native-screens';

enableScreens();

const RootStack = createStackNavigator();
const PrimaryStack = createStackNavigator();

function Details({navigation: {goBack}}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={goBack}>
        Go to Home Page
      </Text>
    </View>
  );
}

function Home({navigation: {navigate}}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text} onPress={() => navigate('Details')}>
        Go to Details Page
      </Text>
    </View>
  );
}

function PrimaryNavigator() {
  return (
    <PrimaryStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        gestureEnabled: true,
        transparentCard: true,
        gestureDirection: 'horizontal',
        cardStyleInterpolator: CardStyleInterpolators.forVerticalIOS,
        headerStyle: {backgroundColor: 'red'},
      }}>
      <PrimaryStack.Screen name="Home" component={Home} />
      <PrimaryStack.Screen name="Details" component={Details} />
    </PrimaryStack.Navigator>
  );
}

function RootNavigator() {
  return (
    <RootStack.Navigator
      mode="modal"
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <RootStack.Screen name="Home" component={PrimaryNavigator} />
    </RootStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <RootNavigator />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
    color: '#fff',
  },
});
