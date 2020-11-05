import React, {Component} from 'react';
import {
  StyleSheet,
  Button,
  View,
  ScrollView,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  Text,
} from 'react-native';
import {
  Screen,
  ScreenStack,
  ScreenStackHeaderConfig,
  ScreenStackHeaderTitleView,
  ScreenStackHeaderCenterView,
  ScreenStackHeaderRightView,
  ScreenStackHeaderLeftView,
  ScreenContainer,
} from 'react-native-screens';

// const ScreenStack = requireNativeComponent('RNSScreenStack', null);

const COLORS = ['azure', 'pink', 'cyan'];

export class Stack extends Component {
  constructor(props) {
    super(props);

    this.state = {
      stack: ['pink'],
      transitioning: 0,
    };
  }
  push(key) {
    this.setState({stack: [...this.state.stack, key], transitioning: 1});
  }
  pop() {
    this.setState({
      transitioning: 0,
      stack: this.state.stack.slice(0, -1),
    });
  }
  remove(index) {
    this.setState({
      stack: this.state.stack.filter((v, idx) => idx !== index),
    });
  }
  removeByKey(key) {
    this.setState({
      stack: this.state.stack.filter((v) => key !== v),
    });
  }
  renderScreen = (key, index) => {
    let style = StyleSheet.absoluteFill;
    const {stack, transitioning} = this.state;
    const active =
      index === stack.length - 1 ||
      (transitioning !== 0 && index === stack.length - 2);
    return (
      <Screen
        style={style}
        key={key}
        stackAnimation="fade"
        active={active ? 1 : 0}
        onDismissed={() => this.removeByKey(key)}>
        {this.props.renderScreen(key)}
      </Screen>
    );
  };
  render() {
    const screens = this.state.stack.map(this.renderScreen);
    return <View style={styles.container}>{screens}</View>;
  }
}

class App extends Component {
  renderScreen = (key) => {
    const index = COLORS.indexOf(key);
    const color = key;
    const pop = index > 0 ? () => this.stack.pop() : null;
    const push = index < 2 ? () => this.stack.push(COLORS[index + 2]) : null;
    const remove = index > 1 ? () => this.stack.remove(1) : null;
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
  };
  render() {
    return (
      <Stack
        ref={(stack) => (this.stack = stack)}
        renderScreen={this.renderScreen}
      />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  textInput: {
    backgroundColor: 'white',
    borderWidth: 1,
    padding: 10,
    marginHorizontal: 20,
    alignSelf: 'stretch',
    borderColor: 'black',
  },
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

export default App;
