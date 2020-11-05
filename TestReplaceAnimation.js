import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, Button, View} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

const First = ({navigation}) => {
  return (
    <View>
      <Button title="Navigate" onPress={() => navigation.navigate('second')} />
    </View>
  );
};

const Second = ({navigation}) => {
  return (
    <View>
      <Button title="Replace" onPress={() => navigation.replace('third')} />
    </View>
  );
};

const Third = ({navigation}) => {
  return (
    <View>
      <Button title="Replace" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{replaceAnimation: 'pop'}}>
        <Stack.Screen name="first" component={First} />
        <Stack.Screen name="second" component={Second} />
        <Stack.Screen name="third" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
