import * as React from 'react';
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  FlatList,
  ScrollView,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          // stackAnimation: 'slide',
          stackPresentation: 'push',
          // direction: 'rtl',
          // headerLargeTitle: true,
        }}>
        <Stack.Screen name="First" component={First} />
        <Stack.Screen
          name="Second"
          component={Second}
          // options={{stackPresentation: 'transparentModal'}}
        />
        <Stack.Screen name="Third" component={Third} />
      </Stack.Navigator>
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
      <View //style={styles.centeredContainer}
      >
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
          onPress={() => navigation.push('Third')}>
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

const ListScreen = ({navigation}) => {
  const data = Array.from({length: 100}).map((_, i) => ({text: String(i)}));
  const ref = React.useRef();
  const renderItem = ({item}) => {
    const {text} = item;
    return (
      <TouchableOpacity key={text}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList ref={ref} data={data} renderItem={renderItem} />
    </View>
  );
};

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
