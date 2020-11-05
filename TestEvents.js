import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {ScrollView, View, Button, Platform} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createNativeStackNavigator();
const NestedStack = createNativeStackNavigator();
const TripleNesting = createNativeStackNavigator();

function Deeper({navigation}) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionStart', ({data}) => {
      console.warn(
        Platform.OS +
          ' Deeper transitionStart ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', ({data}) => {
      console.warn(
        Platform.OS +
          ' Deeper transitionEnd ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <NestedStack.Navigator
      screenOptions={{
        headerTranslucent: false,
        headerLargeTitle: true,
        // stackPresentation: 'transparentModal',
        headerLeft: () => (
          <View
            style={{
              width: 21,
              height: 20,
              backgroundColor: 'red',
            }}
          />
        ),
        headerCenter: () => (
          <View style={{width: 21, height: 20, backgroundColor: 'blue'}} />
        ),
        headerRight: () => (
          <View style={{width: 21, height: 20, backgroundColor: 'blue'}} />
        ),
      }}>
      <NestedStack.Screen name="Privacy" component={Privacy} />
      <NestedStack.Screen name="Another" component={Another} />
    </NestedStack.Navigator>
  );
}

export default function NativeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          stackAnimation: 'none',
          stackOrientation: 'all',
          direction: 'rtl',
        }}>
        <Stack.Screen name="Status" component={Status} />
        <Stack.Screen name="Deeper" component={Deeper} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Status({navigation}) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionStart', ({data}) => {
      console.warn(
        Platform.OS +
          ' Status transitionStart ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', ({data}) => {
      console.warn(
        Platform.OS +
          ' Status transitionEnd ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic">
      <Button title="Click" onPress={() => navigation.navigate('Deeper')} />
    </ScrollView>
  );
}

function Privacy({navigation}) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionStart', ({data}) => {
      console.warn(
        Platform.OS +
          ' Privacy transitionStart ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', ({data}) => {
      console.warn(
        Platform.OS +
          ' Privacy transitionEnd ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255,0,0,0.2)'}}>
      <Button title="Click" onPress={() => navigation.navigate('Another')} />
    </View>
  );
}

function Another({navigation}) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionStart', ({data}) => {
      console.warn(
        Platform.OS +
          ' Another transitionStart ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', ({data}) => {
      console.warn(
        Platform.OS +
          ' Another transitionEnd ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <TripleNesting.Navigator
      screenOptions={{
        stackAnimation: 'none',
        stackOrientation: 'all',
      }}>
      <TripleNesting.Screen name="FirstTriple" component={FirstTriple} />
      <TripleNesting.Screen name="SecondTriple" component={SecondTriple} />
    </TripleNesting.Navigator>
  );
}

function FirstTriple({navigation}) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionStart', ({data}) => {
      console.warn(
        Platform.OS +
          ' FirstTriple transitionStart ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', ({data}) => {
      console.warn(
        Platform.OS +
          ' FirstTriple transitionEnd ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: 'rgba(255,0,0,0.2)'}}>
      <Button
        title="Click"
        onPress={() => navigation.navigate('SecondTriple')}
      />
    </View>
  );
}

function SecondTriple({navigation}) {
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionStart', ({data}) => {
      console.warn(
        Platform.OS +
          ' SecondTriple transitionStart ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  React.useEffect(() => {
    const unsubscribe = navigation.addListener('transitionEnd', ({data}) => {
      console.warn(
        Platform.OS +
          ' SecondTriple transitionEnd ' +
          (data.closing ? 'closing' : 'opening'),
      );
    });

    return unsubscribe;
  }, [navigation]);

  return <View style={{flex: 1, backgroundColor: 'rgba(255,0,0,0.2)'}} />;
}
