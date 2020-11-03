import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

enableScreens();

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ModalStack = (props) => (
  <Stack.Navigator
    screenOptions={{
      // stackAnimation: 'slide',
      stackPresentation: 'modal',
      // direction: 'rtl',
      // headerLargeTitle: true,
    }}>
    <Stack.Screen name="First" component={First} />
    <Stack.Screen
      name="Second"
      component={Second}
      // options={{stackPresentation: 'transparentModal'}}
    />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{unmountOnBlur: false}}>
        <Tab.Screen name="Tab1" component={ModalStack} />
        <Tab.Screen name="Tab2" component={First} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

function First({navigation}) {
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.navigate('Second')}>
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

function Second({navigation}) {
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() =>
            navigation.reset({
              index: 1,
              routes: [
                {name: 'Tab1'},
                {
                  name: 'Tab2',
                },
              ],
            })
          }>
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
          onPress={() => navigation.push('Third')}>
          <Text style={styles.buttonText}>Tap me for second screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

function Third({navigation}) {
  return (
    <View style={styles.verticalContainer}>
      <View style={styles.centeredContainer}>
        <TouchableOpacity
          style={[styles.centeredContainer, styles.buttonExtras]}
          onPress={() => navigation.navigate('Second')}>
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
          onPress={() => navigation.push('Second')}>
          <Text style={styles.buttonText}>Tap me for second screen</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  verticalContainer: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'pink',
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
