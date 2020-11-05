/* eslint-disable react-native/no-inline-styles */
import {useNavigation, NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  TouchableHighlight,
} from 'react-native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {getHeaderHeight} from 'react-native-screens';

const Stack = createNativeStackNavigator();

export default function NativeNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTranslucent: false,
          headerLargeTitle: true,
          stackAnimation: 'default',
          stackPresentation: 'push',
          statusBarAnimation: 'fade',
          headerLeft: () => (
            <View
              style={{
                width: 21,
                height: 20,
                backgroundColor: 'red',
              }}
            />
          ),
          headerCenter: () => (
            <View style={{width: 21, height: 20, backgroundColor: 'blue'}} />
          ),
          headerRight: () => (
            <View style={{width: 20, height: 20, backgroundColor: 'blue'}} />
          ),
        }}>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            headerLargeTitle: true,
            statusBarStyle: 'light-content',
            statusBarHidden: false,

            // headerLargeStyle: {
            //   backgroundColor: 'red',
            // },
            // headerStyle: {
            //   backgroundColor: 'red',
            // },
          }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{
            statusBarStyle: 'light-content',
            statusBarHidden: true,
            // headerLargeTitle: true,
            // headerHideShadow: true,
            // headerRight: () => (
            //   <View style={{width: 20, height: 20, backgroundColor: 'red'}} />
            // ),
            // headerCenter: () => (
            //   <View style={{width: 20, height: 20, backgroundColor: 'red'}} />
            // ),
            // headerLargeStyle: {
            //   backgroundColor: 'yellow',
            // },
            // headerStyle: {
            //   backgroundColor: 'green',
            // },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Home({navigation}) {
  const [yes, setYes] = React.useState(true);
  return (
    <ScrollView
      style={{backgroundColor: 'yellow'}}
      contentInsetAdjustmentBehavior="automatic">
      <View style={styles.leftTop} />
      <Button
        title="Profile"
        onPress={() => {
          navigation.navigate('Profile');
        }}
      />
      <Button
        title="status bar style"
        onPress={() => {
          navigation.setOptions({
            statusBarStyle:
              Math.random() > 0.5 ? 'light-content' : 'dark-content',
            statusBarHidden: yes,
          });
          setYes(!yes);
        }}
      />
    </ScrollView>
  );
}

function Profile(props) {
  return (
    <ScrollView style={{backgroundColor: 'red'}}>
      <Text>Profile</Text>
      <Button
        title="Home"
        onPress={() => {
          props.navigation.navigate('Home');
        }}
      />
      <Button
        title="One more Profile"
        onPress={() => {
          props.navigation.push('Profile');
        }}
      />
      <Button
        title="Change back layout"
        onPress={() =>
          props.navigation.setOptions({
            headerBackTitleStyle: {
              fontFamily: 'verdana',
              fontSize: 60,
            },
            headerBackTitle: Math.random() > 0.5 ? 'cos' : 'akk',
          })
        }
      />
      <Button
        title="Switch to title"
        onPress={() => {
          props.navigation.setOptions({
            headerCenter: undefined,
          });
        }}
      />
      <Button
        title="Add back button and headerLeft"
        onPress={() => {
          props.navigation.setOptions({
            backButtonInCustomView: true,
            headerLeft: () => (
              <View style={{backgroundColor: 'blue', width: 25, height: 25}} />
            ),
          });
        }}
      />
      <Button
        title="Disable back button"
        onPress={() => {
          props.navigation.setOptions({
            backButtonInCustomView: false,
          });
        }}
      />
      <Button
        title="Change right"
        onPress={() => {
          props.navigation.setOptions({
            headerRight: () => (
              <View
                style={{backgroundColor: 'yellow', width: 50, height: 50}}
              />
            ),
          });
        }}
      />
      <Button
        title="Add headerLeft"
        onPress={() => {
          props.navigation.setOptions({
            headerLeft: () => (
              <View style={{backgroundColor: 'blue', width: 50, height: 50}} />
            ),
          });
        }}
      />
      <Button
        title="Add headerCenter"
        onPress={() => {
          props.navigation.setOptions({
            headerCenter: () => (
              <View style={{backgroundColor: 'blue', width: 25, height: 25}} />
            ),
          });
        }}
      />
      <Button
        title="Center and right at once"
        onPress={() => {
          props.navigation.setOptions({
            headerCenter: () => (
              <View style={{backgroundColor: 'pink', width: 30, height: 30}} />
            ),
            headerRight: () => (
              <View style={{backgroundColor: 'pink', width: 30, height: 30}} />
            ),
          });
        }}
      />
      <Button
        title="All at once"
        onPress={() => {
          props.navigation.setOptions({
            headerCenter: () => (
              <View style={{backgroundColor: 'pink', width: 30, height: 30}} />
            ),
            headerRight: () => (
              <View style={{backgroundColor: 'pink', width: 30, height: 30}} />
            ),
            headerLeft: () => (
              <View style={{backgroundColor: 'pink', width: 30, height: 30}} />
            ),
          });
        }}
      />
      {/* <View style={styles.leftTop} /> */}
      <View style={styles.bottomRight} />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listItem: {
    padding: 20,
    backgroundColor: 'white',
    marginBottom: 20,
    justifyContent: 'center',
    alignContent: 'center',
  },
  listItemText: {
    fontSize: 28,
  },
  screen: {
    ...StyleSheet.absoluteFillObject,
    paddingTop: 200,
    flex: 1,
    backgroundColor: 'white',
  },
  leftTop: {
    position: 'absolute',
    width: 80,
    height: 100,
    left: 0,
    top: 0,
    backgroundColor: 'red',
  },
  separator: {
    height: 1,
    backgroundColor: '#DBDBE0',
  },
  bottomRight: {
    position: 'absolute',
    width: 100,
    height: 100,
    right: 0,
    bottom: 0,
    backgroundColor: 'blue',
  },
  modal: {
    position: 'absolute',
    left: 50,
    top: 50,
    right: 50,
    bottom: 50,
    backgroundColor: 'red',
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    alignSelf: 'stretch',
    borderColor: 'black',
  },
});
