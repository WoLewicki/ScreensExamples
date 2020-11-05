// In App.js in a new project

import * as React from 'react';
import {View, Text, TouchableOpacity, PlatformColor} from 'react-native';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {AppearanceProvider, useColorScheme} from 'react-native-appearance';
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native';

const ModalStack = createNativeStackNavigator();

function HomeScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SettingsScreen');
        }}>
        <Text>Show Settings Screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Welcome to Settings Screen</Text>
    </View>
  );
}

function HomeNavigator() {
  return (
    <ModalStack.Navigator screenOptions={{headerShown: false}}>
      <ModalStack.Screen name="HomeScreen" component={HomeScreen} />
      <ModalStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
        options={{stackPresentation: 'modal'}}
      />
    </ModalStack.Navigator>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  const scheme = useColorScheme();
  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === 'dark' ? DarkTheme : DefaultTheme}>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeNavigator} //options={{headerStyle: {backgroundColor: PlatformColor('systemBackgroundColor')}}}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </AppearanceProvider>
  );
}
