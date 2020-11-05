import 'react-native-gesture-handler';
import React from 'react';
import {
  ScrollView,
  RefreshControl,
  StyleSheet,
  Text,
  Button,
  TouchableOpacity,
} from 'react-native';

import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer} from '@react-navigation/native';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function HomeScreen({navigation}) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <ScrollView
      contentContainerStyle={styles.scrollView}
      contentInsetAdjustmentBehavior="automatic"
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      <Button
        title="Navigate"
        onPress={() => navigation.navigate('Settings')}
        style={{
          position: 'absolute',
          padding: 30,
          backgroundColor: 'red',
          bottom: 100,
          alignSelf: 'center',
        }}>
        Some Absolute Text
      </Button>
      <Text>Pull down to see RefreshControl indicator</Text>
    </ScrollView>
  );
}

function ScrollViewBugScreen({navigation}) {
  const someContent = Array.from({length: 50}, (v, i) => i);
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        contentInsetAdjustmentBehavior="automatic"
        scrollToOverflowEnabled
        stickyHeaderIndices={[0, 5]}>
        {someContent.map((x) => (
          <TouchableOpacity key={x} style={styles.button}>
            <Text>Scroll to {x}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Button
        title="Navigate"
        onPress={() => {}}
        style={{
          position: 'absolute',
          padding: 30,
          backgroundColor: 'red',
          bottom: 100,
          alignSelf: 'center',
        }}>
        Some Absolute Text
      </Button>
    </>
  );
}

const App = () => {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{stackPresentation: 'modal'}}>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerLargeTitle: true,
            // headerLargeStyle: {backgroundColor: 'transparent'},
            // headerStyle: {backgroundColor: 'transparent'},
            headerTitle: 'Test',
            headerTranslucent: true,
          }}
        />
        <Stack.Screen
          name="Settings"
          component={ScrollViewBugScreen}
          options={{}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
  },
  button: {
    padding: 5,
    borderBottomColor: 'gray',
    borderBottomWidth: 0.5,
    backgroundColor: 'lightblue',
    flex: 1,
  },
});
