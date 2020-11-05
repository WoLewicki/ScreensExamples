import 'react-native-gesture-handler';

import * as React from 'react';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

import {
  ActivityIndicator,
  StyleSheet,
  SafeAreaView,
  Text,
  Modal,
  TouchableHighlight,
  View,
  Alert,
  Button,
} from 'react-native';
import A from 'react-native-reanimated';
import {withTransition} from 'react-native-redash';

import {TouchableOpacity} from 'react-native-gesture-handler';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="normal-screen">
          {() => (
            <GlobalLoader>
              <NormalScreen />
            </GlobalLoader>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="modal-screen"
          options={{
            stackPresentation: 'formSheet',
          }}>
          {() => (
            <GlobalLoader>
              <ModalScreen />
            </GlobalLoader>
          )}
        </Stack.Screen>
        <Stack.Screen
          name="transparent-screen"
          component={TransparentScreen}
          options={{
            stackPresentation: 'transparentModal',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// @ts-ignore
const Context = React.createContext({});

export class GlobalLoader extends React.Component {
  aniamtionValue = new A.Value(0);
  transition = withTransition(this.aniamtionValue);
  pointerEvents = A.cond(this.transition, 'auto', 'none');

  style = {
    opacity: A.interpolate(this.transition, {
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
  };

  startLoader = () => {
    this.aniamtionValue.setValue(1);
  };
  stopLoader = () => {
    this.aniamtionValue.setValue(0);
  };

  value = {
    startLoader: this.startLoader,
    stopLoader: this.stopLoader,
  };

  render() {
    const {children} = this.props;
    return (
      <Context.Provider value={this.value}>
        {children}
        <A.View
          style={[styles.container, this.style]}
          pointerEvents={this.pointerEvents}>
          <ActivityIndicator size="large" color="red" />
        </A.View>
      </Context.Provider>
    );
  }
}

export function useGlobalLoader() {
  return React.useContext(Context);
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.45)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

// @ts-ignore
const Context1 = React.createContext({});

export class GlobalToast extends React.Component {
  value = {};

  render() {
    const {children} = this.props;
    return <Context1.Provider value={this.value}>{children}</Context1.Provider>;
  }
}

export function ModalScreen({navigation}) {
  const loader = useGlobalLoader();
  function handleToHomePress() {
    navigation.navigate('normal-screen');
  }

  function handleTiggerLoaderPress() {
    loader.startLoader();
    setTimeout(() => {
      loader.stopLoader();
    }, 5000);
  }

  function handleTriggerToastPress() {}

  return (
    <SafeAreaView style={styles3.container}>
      <Text style={styles2.text}>Modal screen</Text>

      <TouchableOpacity style={styles2.button} onPress={handleToHomePress}>
        <Text>To Home</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles2.button}
        onPress={handleTiggerLoaderPress}>
        <Text>Trigger Loader</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles2.button}
        onPress={handleTriggerToastPress}>
        <Text>Trigger Toast</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles2 = StyleSheet.create({
  container: {
    width: 200,
    height: 200,
    alignContent: 'center',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  text: {fontSize: 22},
  button: {padding: 20},
});

export function NormalScreen() {
  const loader = useGlobalLoader();
  const navigation = useNavigation();
  function handleToModalPress() {
    navigation.navigate('transparent-screen');
  }
  function handleTiggerLoaderPress() {
    loader.startLoader();
    setTimeout(() => {
      loader.stopLoader();
    }, 5000);
  }
  function handleTriggerToastPress() {}

  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView style={styles3.container}>
      <GlobalLoader>
        <Text style={styles3.text}>Modal screen</Text>

        <Button
          title="To modal"
          onPress={() => navigation.navigate('transparent-screen')}
        />
        <TouchableOpacity
          style={styles3.button}
          onPress={handleTiggerLoaderPress}>
          <Text>Trigger Loader</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles3.button}
          onPress={handleTriggerToastPress}>
          <Text>Trigger Toast</Text>
        </TouchableOpacity>

        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
              <Text style={modalStyles.modalText}>Hello World!</Text>

              <TouchableHighlight
                style={{...modalStyles.openButton, backgroundColor: '#2196F3'}}
                onPress={setModalVisible}>
                <Text style={modalStyles.textStyle}>Hide Modal</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={{...modalStyles.openButton, backgroundColor: '#2196F3'}}
                onPress={handleToModalPress}>
                <Text style={modalStyles.textStyle}>To modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          style={modalStyles.openButton}
          onPress={() => setModalVisible(true)}>
          <Text style={modalStyles.textStyle}>Show Modal</Text>
        </TouchableHighlight>
      </GlobalLoader>
    </SafeAreaView>
  );
}

const styles3 = StyleSheet.create({
  container: {flex: 1},
  text: {fontSize: 22},
  button: {padding: 20},
});

const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    width: 200,
    height: 600,
  },
  openButton: {
    backgroundColor: '#F194FF',
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export function TransparentScreen({navigation}) {
  const [modalVisible, setModalVisible] = React.useState(false);

  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
      }}>
      <View
        style={{
          width: '100%',
          height: 200,
          backgroundColor: 'red',
        }}
      />
      <Button title="back" onPress={() => navigation.goBack()} />
    </SafeAreaView>
  );
}
