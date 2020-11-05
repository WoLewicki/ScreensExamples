import React, {useState, useEffect} from 'react';
import {StyleSheet, SafeAreaView, ScrollView, Text, View} from 'react-native';
import SearchBar from 'react-native-search-bar';
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
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const items = ['Apples', 'Pie', 'Juice', 'Cake', 'Nuggets'];

function First({navigation}) {
  const [search, setSearch] = useState('');
  const search1 = React.createRef();

  React.useEffect(() => {
    navigation.setOptions({
      searchBar: () => (
        <SearchBar
          ref={search1}
          barStyle="black"
          onSearchButtonPress={() => search1.current.blur()}
          onChange={(e) => console.log(e.nativeEvent)}
          onChangeText={setSearch}
        />
      ),
    });
  }, [navigation, search1]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.inset}>
        {/* <SearchBar
          ref={search1}
          barStyle="black"
          onSearchButtonPress={() => search1.current.blur()}
        /> */}

        {items
          .filter((a) => a.toLowerCase().indexOf(search.toLowerCase()) !== -1)
          .map((a) => (
            <Text style={styles.listItem} key={a}>
              {a}
            </Text>
          ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#F5FCFF',
  },
  inset: {
    flex: 1,
  },
  header: {
    textAlign: 'center',
    margin: 15,
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 18,
    backgroundColor: '#fff',
  },
});
