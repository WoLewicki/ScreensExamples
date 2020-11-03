import React from 'react';
import {View, Text, Button} from 'react-native';

import {TouchableOpacity} from 'react-native-gesture-handler';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

// enableScreens(false);

const Screen2 = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: '#08141B',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button title="Go back" onPress={() => navigation.goBack()}>
        <Text>to screen 2</Text>
      </Button>
    </View>
  );
};

const Screen1 = () => {
  const navigation = useNavigation();

  return (
    <View
      style={{
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('Screen2')}>
        <Text>to screen 2</Text>
      </Button>
    </View>
  );
};

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // activeLimit={2}
        initialRouteName={'Screen1'}
        screenOptions={{
          gestureEnabled: true,
          gestureDirection: 'horizontal',
          animationEnabled: true,
        }}
        headerMode={'none'}
        mode={'card'}>
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
