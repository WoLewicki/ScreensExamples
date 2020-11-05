import * as React from 'react';
import {Button, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const NativeStack = createNativeStackNavigator();

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
  return (
    <ScrollView
      style={{backgroundColor: 'yellow', flex: 1}}
      contentInsetAdjustmentBehavior="automatic">
      <Button title="Go To First" onPress={() => navigation.goBack()} />
    </ScrollView>
  );
}

export default function BugStack() {
  return (
    <>
      <NavigationContainer>
        <NativeStack.Navigator
          screenOptions={{
            headerTranslucent: true,
            statusBarStyle: 'dark',
            // headerStyle: {backgroundColor: 'rgba(100,100,100,0.0)'},
            // headerHideShadow: true,
            // stackPresentation: 'fullScreenModal',
            headerLargeTitle: true,
          }}>
          <NativeStack.Screen name="First" component={First} />
          <NativeStack.Screen name="Second" component={Second} />
        </NativeStack.Navigator>
      </NavigationContainer>
    </>
  );
}
