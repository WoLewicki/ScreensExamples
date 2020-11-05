import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();

function Tab1(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Tab 1</Text>
    </View>
  );
}

function Tab2(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Tab 2</Text>
    </View>
  );
}

function Tab3(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Tab 3</Text>
    </View>
  );
}

function ScreenTab(props) {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name={'Tab1'}
        options={{tabBarLabel: 'Tab 1'}}
        component={Tab1}
      />
      <Tab.Screen
        name={'Tab2'}
        options={{tabBarLabel: 'Tab 2'}}
        component={Tab2}
      />
      <Tab.Screen
        name={'Tab3'}
        options={{tabBarLabel: 'Tab 3'}}
        component={Tab3}
      />
    </Tab.Navigator>
  );
}

function Screen1(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Screen 1</Text>
      <Button
        title="Go"
        mode="contained"
        onPress={() => props.navigation.navigate('Screen2')}>
        Screen 2
      </Button>
    </View>
  );
}
function Screen2(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Screen 2</Text>
      <Button
        title="Go"
        mode="contained"
        onPress={() => props.navigation.navigate('ScreenTab')}>
        Tab Screen
      </Button>
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: true,
          stackPresentation: 'modal',
        }}>
        <Stack.Screen
          options={{title: 'Screen1'}}
          name="Screen1"
          component={Screen1}
        />
        <Stack.Screen
          options={{title: 'Screen2'}}
          name="Screen2"
          component={Screen2}
        />
        <Stack.Screen
          options={{title: 'ScreenTab'}}
          name="ScreenTab"
          component={ScreenTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
