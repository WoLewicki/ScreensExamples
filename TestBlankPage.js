/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import * as React from 'react';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {StyleSheet, View, Button} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

enableScreens();

const Page = ({navigation, route}) => {
  React.useEffect(() => {
    navigation.setParams({
      title: 'From Component',
    });
  }, [navigation]);

  return <View style={{flex: 1, backgroundColor: 'red'}} />;
};

function One({navigation}) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Two')} title="GOOOOO" />
    </View>
  );
}

function Two({navigation}) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Three')} title="GOOOOO" />
    </View>
  );
}

function Three({navigation}) {
  return (
    <View>
      <Button onPress={() => navigation.navigate('Two')} title="GOOOOO" />
    </View>
  );
}

const PageStack = createNativeStackNavigator();

const Root = createNativeStackNavigator();

const PageStackComponent = () => (
  <PageStack.Navigator
    screenOptions={{
      headerShown: true,
    }}>
    <PageStack.Screen
      name="Page1"
      component={Page}
      options={({route}) => ({
        title: `title: ${route?.params?.title}`,
      })}
    />
  </PageStack.Navigator>
);

const App = () => {
  return (
    <NavigationContainer>
      <Root.Navigator
        // mode="modal"
        screenOptions={{
          headerShown: true,
          animationEnabled: false,
          // gestureEnabled: false,
        }}>
        <Root.Screen
          name="One"
          component={One}
          options={({navigation}) => ({
            headerLeft: () => (
              <Button title="GOO" onPress={() => navigation.navigate('Two')} />
            ),
          })}
        />
        <Root.Screen name="Two" component={Two} />
        <Root.Screen name="Three" component={Three} />
      </Root.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  engine: {
    position: 'absolute',
    right: 0,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
});

export default App;
