import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import React, {useRef} from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  FlatList,
  Button,
  View,
} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {createStackNavigator} from '@react-navigation/stack';
import {useSafeArea} from 'react-native-safe-area-context';

const NativeStack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{}}
      scrollToOverflowEnabled={true}
      contentInsetAdjustmentBehavior="automatic">
      <Button title="Second" onPress={() => navigation.push('Second')} />
    </ScrollView>
  );
};

const ListScreen = ({navigation}) => {
  const data = Array.from({length: 50}).map((_, i) => ({text: String(i)}));
  const ref = React.useRef();
  const renderItem = ({item}) => {
    const {text} = item;
    return (
      <TouchableOpacity key={text}>
        <Text>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <View style={{width: '100%', height: 100, backgroundColor: 'red'}} />
      {/* <View style={{transform: [{scaleY: 1}]}}> */}
      <FlatList inverted ref={ref} data={data} renderItem={renderItem} />
      {/* </View> */}
    </>
  );
};

export default function ReactNativeScreensBugs() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerTranslucent: true,
          stackPresentation: 'modal',
        }}>
        <NativeStack.Screen
          options={{headerLargeTitle: true}}
          name="StickyHeader"
          component={HomeScreen}
        />
        <NativeStack.Screen
          options={{headerLargeTitle: true, gestureEnabled: true}}
          name="Second"
          component={ListScreen}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

//     null 27.5 0 137.5 true
//     null 27.5 0 137.5 true
