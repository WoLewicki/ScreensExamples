import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View, Button, Platform, Text} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();
const NestedStack = createNativeStackNavigator();

function Deeper() {
  return (
    <NestedStack.Navigator
      screenOptions={{
        headerShown: true,
        direction: 'rtl',
        headerLeft: () => (
          <View style={{backgroundColor: 'pink', width: 30, height: 30}} />
        ),
        headerCenter: () => <Text>Loading</Text>,
      }}>
      <NestedStack.Screen name="Privacy" component={Privacy} />
      <NestedStack.Screen name="Another" component={Another} />
    </NestedStack.Navigator>
  );
}

export default function NativeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          direction: 'rtl',
        }}>
        <Stack.Screen name="Home" component={Status} />
        <Stack.Screen name="Settings" component={Deeper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Status({navigation}) {
  return (
    <ScrollView>
      <Button title="Click" onPress={() => navigation.navigate('Deeper')} />
    </ScrollView>
  );
}

function Privacy({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255,0,0,0.2)'}}>
      <Button title="Click" onPress={() => navigation.navigate('Another')} />
    </View>
  );
}

function Another({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255,0,0,0.2)'}}>
      <Button title="Click" onPress={() => navigation.navigate('Another')} />
    </View>
  );
}
