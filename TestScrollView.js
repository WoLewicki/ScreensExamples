import {NavigationContainer} from '@react-navigation/native';
import React, {useRef} from 'react';
import {ScrollView, StyleSheet, Text, View, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {useSafeArea} from 'react-native-safe-area-context';

export const NativeStack = createNativeStackNavigator();

function ScrollViewBugScreen({navigation}) {
  const someContent = Array.from({length: 50}, (v, i) => i);

  const scrollRef = useRef(null);

  const statusBarInset = useSafeArea().top;
  const smallHeaderInset = statusBarInset + 44;
  const largeHeaderInset = statusBarInset + 96;

  function onPress() {
    scrollRef.current?.scrollTo({
      animated: true,
      y: -largeHeaderInset,
    });
  }

  return (
    <>
      <ScrollView
        ref={scrollRef}
        contentInsetAdjustmentBehavior="automatic"
        scrollToOverflowEnabled
        stickyHeaderIndices={[0, 5]}>
        {someContent.map((x) => (
          <TouchableOpacity key={x} onPress={onPress} style={styles.button}>
            <Text>Scroll to {x}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button
        title="Navigate"
        onPress={() => navigation.replace('Second')}
        style={{
          position: 'absolute',
          padding: 30,
          backgroundColor: 'red',
          bottom: 100,
          alignSelf: 'center',
        }}>
        Some Absolute Text
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    backgroundColor: 'lightblue',
    flex: 1,
  },
});

export default function ReactNativeScreensBugs() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerTranslucent: true,
          headerHideShadow: true,
          // headerStyle: {
          // backgroundColor: undefined,
          // },
        }}>
        <NativeStack.Screen
          options={{
            headerLargeTitle: true,
            headerStyle: {
              backgroundColor: 'traffnsparentfdsasdfs',
            },
          }}
          name="StickyHeader"
          component={ScrollViewBugScreen}
        />
        <NativeStack.Screen
          options={{headerLargeTitle: true}}
          name="Second"
          component={ScrollViewBugScreen}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

//     null 27.5 0 137.5 true
//     null 27.5 0 137.5 true
