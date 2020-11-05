import 'react-native-gesture-handler';
import React from 'react';
import {View, Button, FlatList, Text, ScrollView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

export const HomeScreen = ({navigation}) => (
  // <ScrollView style={{backgroundColor: 'red', flex: 1}}>
  //   <View style={{width: 100, height: 100, backgroundColor: 'blue'}} />
  //   <Button
  //     title="Details"
  //     onPress={() => {
  //       navigation.navigate('Details');
  //     }}
  //   />
  <FlatList
    data={DATA}
    renderItem={({item}) => <Item title={item.title} />}
    keyExtractor={(item) => item.id}
  />
  // </ScrollView>
);

export const DetailsScreen = ({navigation}) => (
  <View style={{backgroundColor: 'transparent', flex: 1, alignItems: 'center'}}>
    <View style={{width: 100, height: 100, backgroundColor: 'red'}} />
    <Button
      title="Back"
      onPress={() => {
        navigation.goBack();
      }}
    />
    <FlatList
      inverted
      data={DATA}
      renderItem={({item}) => <Item title={item.title} />}
      keyExtractor={(item) => item.id}
    />
  </View>
);

export const ProfileScreen = ({navigation}) => <View />;

const RootStack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{stackPresentation: 'modal'}}>
        <RootStack.Screen
          name="Home"
          component={HomeScreen}
          options={{headerLargeTitle: true}}
        />
        <RootStack.Screen
          name="Details"
          component={DetailsScreen}
          options={{headerShown: false}}
        />
        <RootStack.Screen name="Profile" component={ProfileScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1455fsdfds71e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14sz5571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-1s45571e29fdfdd72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72asas',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-14557gg1e29d72',
    title: 'Third Item',
  },
];

function Item({title}) {
  return (
    <View>
      <Text style={{fontSize: 90}}>{title}</Text>
    </View>
  );
}
