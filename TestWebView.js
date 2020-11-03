import * as React from 'react';

import {Text, View, ScrollView, SafeAreaView, Button} from 'react-native';
import {enableScreens} from 'react-native-screens';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import 'react-native-gesture-handler';
import WebView from 'react-native-webview';

const LIMIT_NUMBER_OF_LINES = 20;

const produceLongText = function () {
  let t = '';
  for (let i = 1; i <= LIMIT_NUMBER_OF_LINES; i++) {
    t += '' + i + ' :long text on ' + '\n';
  }
  return t;
};

const Stack = createStackNavigator();

function WebviewScreen({navigation}) {
  return (
    <ScrollView style={{flex: 1}}>
      <View style={{padding: 20}}>
        <Button
          color="gray"
          title="No Bug: navigate to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>

      <View
        style={{
          width: '100%',
          height: 200,
          borderColor: 'red',
          borderWidth: 2,
        }}>
        <WebView
          renderToHardwareTextureAndroid={false}
          source={{
            html: "<h1 style='font-size: 50px'>Webview: Hello world!</h1>",
          }}
        />
      </View>
      <Text style={{fontSize: 30}}>{produceLongText()}</Text>
      <View style={{padding: 20}}>
        <Button
          color="orange"
          title="Buggy: navigate to Details"
          onPress={() => navigation.navigate('Details')}
        />
      </View>
    </ScrollView>
  );
}

const DetailScreen = () => (
  <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
    <Text style={{fontSize: 30}}>DetailScreen</Text>
  </View>
);

function HomeScreen() {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Button
        onPress={() => navigation.navigate('Webview')}
        title="Go to webview"
      />
    </View>
  );
}
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{gestureEnabled: true}}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Webview" component={WebviewScreen} />
        <Stack.Screen name="Details" component={DetailScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
