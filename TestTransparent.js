import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';

import {enableScreens} from 'react-native-screens';

enableScreens();

const ScreenInTransparentModal = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ScreenInTransparentModal</Text>
      <Button
        title="Navigate To NormalNavigator"
        onPress={() => navigation.navigate('NormalNavigator')}
      />
      <Button title="go back" onPress={() => navigation.goBack()} />
    </View>
  );
};

const ScreenInNormalNavigator = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>ScreenInNormalNavigator</Text>
      <Button
        title="Navigate To FirstScreen"
        onPress={() => navigation.navigate('FirstScreen')}>
        <Text>Back To FirstScreen</Text>
      </Button>
    </View>
  );
};

const FirstScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>FirstScreen </Text>
      <Button
        title="Navigate To TransparentModalNavigator"
        onPress={() => navigation.navigate('TransparentModalNavigator')}>
        <Text>Navigate To TransparentModalNavigator</Text>
      </Button>
    </View>
  );
};
let Stack = createNativeStackNavigator();

const TransparentModalNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ScreenInTransparentModal"
        component={ScreenInTransparentModal}
      />
    </Stack.Navigator>
  );
};

const NormalNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen
        name="ScreenInNormalNavigator"
        component={ScreenInNormalNavigator}
      />
    </Stack.Navigator>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="FirstScreen" component={FirstScreen} />
        <Stack.Screen
          name="TransparentModalNavigator"
          component={TransparentModalNavigator}
          options={{stackPresentation: 'modal'}}
        />
        <Stack.Screen name="NormalNavigator" component={NormalNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
