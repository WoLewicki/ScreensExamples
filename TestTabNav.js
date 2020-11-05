import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Home = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
      <TouchableOpacity onPress={() => props.navigation.navigate('Settings')}>
        <Text>GoToSettings</Text>
      </TouchableOpacity>
    </View>
  );
};

const Profile = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Profile Screen</Text>
    </View>
  );
};

const Settings = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Settings Screen</Text>
    </View>
  );
};

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function HomeStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Settings" component={Settings} />
    </Stack.Navigator>
  );
}

export default function () {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => {
          const routeName = route.state
            ? route.state.routes[route.state.index].name
            : 'Home';

          return {tabBarVisible: routeName === 'Home'};
        }}
        tabBarOptions={{inactiveBackgroundColor: 'green'}}>
        <Tab.Screen name="Home" component={HomeStackScreen} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
