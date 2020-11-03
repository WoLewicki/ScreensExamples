import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React, {useRef} from 'react';
import {ScrollView, Button} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {useSafeArea} from 'react-native-safe-area-context';

export const NativeStack = createNativeStackNavigator();

function ScrollViewBugScreen() {
  const someContent = Array.from({length: 50}, (v, i) => i);

  const scrollRef = useRef(null);

  const statusBarInset = useSafeArea().top;
  const smallHeaderInset = statusBarInset + 44;
  const largeHeaderInset = statusBarInset + 96;

  function onPress() {
    scrollRef.current?.scrollTo({
      animated: true,
      y: -statusBarInset,
    });
  }

  return (
    <ScrollView
      ref={scrollRef}
      contentInsetAdjustmentBehavior="automatic"
      scrollToOverflowEnabled>
      {someContent.map((x) => (
        <Button title="Click me" key={x} onPress={onPress} />
      ))}
    </ScrollView>
  );
}

export default function ReactNativeScreensBugs() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerTranslucent: true,
          headerLargeTitle: true,
          headerShown: true,
          headerStyle: {backgroundColor: 'rgba(100,100,100, 0.5)'},
        }}>
        <NativeStack.Screen
          name="StickyHeader"
          component={ScrollViewBugScreen}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}
