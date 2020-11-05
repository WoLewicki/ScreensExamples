import {NavigationContainer, useNavigation} from '@react-navigation/native';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {Text, TouchableWithoutFeedback, View} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const App = () => {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
};
export default App;

const Home = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('PinnedModal')}>
        <Text>Go to pinned modal</Text>
      </TouchableWithoutFeedback>
    </View>
  );
};

const {
  Navigator: PinnedModalNavigator,
  Screen: PinnedModalScreen,
} = createNativeStackNavigator();

const PinnedModalStack = () => (
  <PinnedModalNavigator>
    <PinnedModalScreen
      name="PinnedModalScreen"
      component={ScreenWithPinnedBottom}
    />
  </PinnedModalNavigator>
);

const ScreenWithPinnedBottom = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex: 1, alignItems: 'center', top: 10}}>
      <Text>Pull header upwards on iOS 13 device or higher</Text>
      <Text>
        observe wobble and frame getting bigger (text is not longer centered){' '}
      </Text>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('PinnedModal')}>
        <Text>push another modal</Text>
      </TouchableWithoutFeedback>

      <View
        style={{
          position: 'absolute',
          height: 500,
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: 'blue',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Wobble</Text>
      </View>
    </View>
  );
};

const {
  Navigator: MainNavigator,
  Screen: MainScreen,
} = createNativeStackNavigator();

function MyStack() {
  return (
    <MainNavigator
      initialRouteName={'Home'}
      screenOptions={{stackPresentation: 'modal'}}>
      <MainScreen name="Home" component={Home} />
      <MainScreen name="PinnedModal" component={PinnedModalStack} />
    </MainNavigator>
  );
}
