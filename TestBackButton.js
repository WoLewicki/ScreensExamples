import {NavigationContainer, useNavigation} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, TouchableOpacity, Text} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

const First = () => {
  const navigation = useNavigation();

  const handleGoToSecond = () => {
    navigation.navigate('second');
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleGoToSecond}>
        <Text>Go to second</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Second = () => {
  const navigation = useNavigation();

  const handleGoToThird = () => {
    navigation.navigate('third');
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleGoToThird}>
        <Text>Go to Third</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const Third = () => {
  const navigation = useNavigation();

  const handleGoToSecond = () => {
    navigation.navigate('second');
  };

  return (
    <SafeAreaView>
      <TouchableOpacity onPress={handleGoToSecond}>
        <Text>Go to second</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};
const img = require('./backButton.png');
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // headerShown: false,
          backButtonImage: img,
          headerBackTitleVisible: false,
          headerTintColor: 'hsl(360, 50%, 50%)',
        }}>
        <Stack.Screen
          name="first"
          component={First}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="second"
          component={Second}
          options={
            {
              // headerShown: false,
            }
          }
        />
        <Stack.Screen name="third" component={Third} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
