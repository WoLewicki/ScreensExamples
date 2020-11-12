import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator, NativeStackNavigationProp} from 'react-native-screens/native-stack';

type SimpleStackParams = {
  First: undefined;
  Second: undefined;
};

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen name="Second" component={Second} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function First({navigation}: {navigation: NativeStackNavigationProp<SimpleStackParams>}) {
  return (
    <View style={styles.verticalContainer}>
      <TouchableOpacity
        style={[styles.centeredContainer, styles.buttonExtras]}
        onPress={() => navigation.replace('Second')}>
        <Text style={styles.buttonText}>Tap me for second screen</Text>
      </TouchableOpacity>
    </View>
  );
}

function Second({navigation}) {
  return (
    <View style={styles.verticalContainer}>
      <TouchableOpacity
        style={[styles.centeredContainer, styles.buttonExtras]}
        onPress={() => navigation.replace('First')}>
        <Text style={styles.buttonText}>Tap me for second screen</Text>
      </TouchableOpacity>
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
