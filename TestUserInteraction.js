import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {
  createStackNavigator,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

// enableScreens();

function First({navigation}) {
  const NestedStack = createBottomTabNavigator();

  return (
    <NestedStack.Navigator
      // mode="modal"
      // activeLimit={5}
      // screensEnabled={true}
      screenOptions={{
        animationEnabled: true,
        transparentCard: true,
        // cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
        headerStyle: {backgroundColor: 'red'},
        gestureEnabled: true,
      }}>
      <NestedStack.Screen name="NestedFirst" component={NestedFirst} />
      <NestedStack.Screen name="NestedSecond" component={NestedSecond} />
    </NestedStack.Navigator>
  );
}

function SecondScreen({navigation}) {
  // React.useLayoutEffect(() => {
  //   const unsubscribe = navigation.addListener('transitionStart', (e) => {
  //     console.warn(e);
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  // React.useLayoutEffect(() => {
  //   const unsubscribe = navigation.addListener('transitionEnd', (e) => {
  //     console.warn(e);
  //   });

  //   return unsubscribe;
  // }, [navigation]);

  return (
    <View style={styles.verticalContainer}>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.navigate('Third')}>
          <Text style={styles.buttonText}>Tap me for second screen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredContainer}>
        <Text>Hi I'm the SECOND screen</Text>
        <TextInput
          placeholder={'Password'}
          autoCompleteType={'password'}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Pop to top</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flexOne} />
      <View style={styles.flexOne}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.navigate('Third')}>
          <Text style={styles.buttonText}>Tap me for second screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function ThirdScreen({navigation}) {
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.centeredContainer}>
        <Text>Hi I'm the SECOND screen</Text>
      </View>
      <View style={styles.flexOne} />
      <View style={styles.flexOne}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.navigate('Second')}>
          <Text style={styles.buttonText}>Tap me for second screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function NestedFirst({navigation}) {
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.navigate('NestedSecond')}>
          <Text style={styles.buttonText}>Tap me for second screen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredContainer}>
        <Text>Hi I'm the SECOND screen</Text>
        <TextInput
          placeholder={'Password'}
          autoCompleteType={'password'}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Pop to top</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flexOne} />
      <View style={styles.flexOne}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.navigate('Second')}>
          <Text style={styles.buttonText}>Tap me for second screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function NestedSecond({navigation}) {
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.navigate('NestedFirst')}>
          <Text style={styles.buttonText}>Tap me for second screen</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.centeredContainer}>
        <Text>Hi I'm the SECOND screen</Text>
        <TextInput
          placeholder={'Password'}
          autoCompleteType={'password'}
          secureTextEntry={true}
        />
      </View>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.popToTop()}>
          <Text style={styles.buttonText}>Pop to top</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.flexOne} />
      <View style={styles.flexOne}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.navigate('Second')}>
          <Text style={styles.buttonText}>Tap me for second screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        mode="modal"
        statusBarStyle={'dark-content'}
        detachInactiveScreens={true}
        screenOptions={{
          animationEnabled: true,
          transparentCard: true,
          cardStyleInterpolator: CardStyleInterpolators.forModalPresentationIOS,
          headerStyle: {backgroundColor: 'red'},
          gestureEnabled: true,
        }}>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={SecondScreen} />
        <Stack.Screen name="Third" component={ThirdScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
  },
  centeredContainer: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  flexOne: {
    flex: 1,
  },
  buttonExtras: {
    backgroundColor: '#3A8EED',
    borderRadius: 20,
    margin: 20,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
