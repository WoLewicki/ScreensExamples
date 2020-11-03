import * as React from 'react';
import {Button, ScrollView, TouchableOpacity, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createStackNavigator} from '@react-navigation/stack';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';

enableScreens();

function First({navigation}) {
  return (
    <ScrollView
      style={{backgroundColor: 'pink', flex: 1}}
      contentInsetAdjustmentBehavior="automatic">
      <Button
        title="Go To Second"
        onPress={() => navigation.navigate('Second')}
      />
    </ScrollView>
  );
}

function Second({navigation}) {
  const someContent = Array.from({length: 50}, (v, i) => i);
  console.warn('Modal');
  return (
    <ScrollView
      contentInsetAdjustmentBehavior="automatic"
      scrollToOverflowEnabled
      stickyHeaderIndices={[0, 5]}>
      {someContent.map((x) => (
        <TouchableOpacity key={x}>
          <Text>Scroll to {x}</Text>
        </TouchableOpacity>
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
