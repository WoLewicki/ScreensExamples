import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  TextInput,
  StatusBar,
  View,
  Text,
} from 'react-native';

import {Colors} from 'react-native/Libraries/NewAppScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {enableScreens} from 'react-native-screens';

enableScreens(true);

const LoginScreen = (props) => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <TextInput
          style={{fontSize: 20}}
          autoCompleteType={'username'}
          importantForAutofill={'yes'}
          placeholder={'Username'}
        />
        <TextInput
          style={{fontSize: 20}}
          autoCompleteType={'password'}
          importantForAutofill={'yes'}
          placeholder={'Password'}
          secureTextEntry={true}
        />
        <TouchableOpacity
          onPress={() => props.navigation.replace('Home')}
          style={{
            height: 60,
            backgroundColor: 'red',
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text>LOGIN</Text>
        </TouchableOpacity>
        <ScrollView>
          <TextInput
            style={{fontSize: 20}}
            autoCompleteType={'username'}
            importantForAutofill={'yes'}
            placeholder={'Username'}
          />
          <TextInput
            style={{fontSize: 20}}
            autoCompleteType={'password'}
            importantForAutofill={'yes'}
            placeholder={'Password'}
            secureTextEntry={true}
          />
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const HomeScreen = (props) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>
        Hello. Welcome. You should now be prompted to save your credentials.
      </Text>
      <TouchableOpacity
        onPress={() => props.navigation.replace('Login')}
        style={{
          height: 60,
          backgroundColor: 'red',
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text>LOGIN</Text>
      </TouchableOpacity>
    </View>
  );
};

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator screenOptions={{detachInactiveScreens: false}}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
});
