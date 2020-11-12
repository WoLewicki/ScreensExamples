import * as React from 'react';
import {Button, ScrollView, TouchableOpacity, Text, Alert} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createStackNavigator} from '@react-navigation/stack';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const createTwoButtonAlert = () =>
  Alert.alert(
    'Alert Title',
    'My Alert Msg',
    [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'OK', onPress: () => console.log('OK Pressed')},
    ],
    {cancelable: false},
  );

function First({navigation}) {
  return (
    <ScrollView
      style={{backgroundColor: 'pink', flex: 1}}
      contentInsetAdjustmentBehavior="automatic">
      <Button
        title="Go To Second"
        onPress={() => navigation.navigate('Second')}
      />
      <Button title="2-Button Alert" onPress={createTwoButtonAlert} />
    </ScrollView>
  );
}

function Second({navigation}) {
  const someContent = Array.from({length: 50}, (v, i) => i);

  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      scrollToOverflowEnabled
      stickyHeaderIndices={[0, 5]}>
      {someContent.map((x) => (
        <Button title="2-Button Alert" onPress={createTwoButtonAlert} />
      ))}
    </ScrollView>
  );
}

function Third({navigation}) {
  console.warn('Behind modal');
  return (
    <ScrollView style={{flex: 1}} contentInsetAdjustmentBehavior="automatic">
      <Button title="Go back" onPress={() => navigation.popToTop()} />
    </ScrollView>
  );
}

const NativeStack = createNativeStackNavigator();

export default function BugStack() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        mode="modal"
        screenOptions={{
          stackPresentation: 'modal',
          headerTitleStyle: {fontFamily: 'Arial'},
        }}>
        <NativeStack.Screen name="First" component={First} />
        <NativeStack.Screen name="Second" component={Second} />
        <NativeStack.Screen
          name="Third"
          component={Third}
          options={{stackPresentation: 'transparentModal'}}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
