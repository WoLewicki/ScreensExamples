import * as React from 'react';
import {
  Alert,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import createNativeStackNavigator from 'react-native-screens/createNativeStackNavigator';

const ListScreen = ({navigation}) => {
  const data = Array.from({length: 100}).map((_, i) => ({text: String(i)}));
  const ref = React.useRef();
  const renderItem = ({item}) => {
    const {text} = item;
    return (
      <TouchableOpacity
        key={text}
        onPress={() => Alert.alert(`Pressed "${text}"`)}>
        <Text style={styles.text}>{text}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        ref={ref}
        data={data}
        renderItem={renderItem}
        onMomentumScrollBegin={() => {
          navigation.navigate('DummyScreen');
        }}
      />
    </View>
  );
};

const DummyScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>Go Back</Text>
      </TouchableOpacity>
    </View>
  );
};

const TabNavigator = createBottomTabNavigator(
  {
    Broken: {
      screen: ListScreen,
    },
    DummyScreen: {
      screen: DummyScreen,
    },
  },
  {
    initialRouteName: 'Broken',
  },
);

const Nav = createAppContainer(TabNavigator);

export default class App extends React.Component {
  render() {
    return <Nav />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  text: {
    padding: 50,
  },
});
