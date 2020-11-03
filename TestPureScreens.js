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
      stack: ['azure'],
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
        active={1}
        onDismissed={() => this.removeByKey(key)}>
        {/* <ScreenStackHeaderConfig title={key} translucent={false} largeTitle>
          {index === 0 && (
            <ScreenStackHeaderLeftView>
              <TouchableHighlight onPress={() => alert('sdf')}>
                <Image
                  source={{
                    uri:
                      'https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
                  }}
                  style={{ width: 30, height: 30 }}
                />
              </TouchableHighlight>
            </ScreenStackHeaderLeftView>
          )}
          <ScreenStackHeaderRightView>
            <View style={{width: 20, height: 20, backgroundColor: 'green'}} />
          </ScreenStackHeaderRightView>
          <ScreenStackHeaderCenterView>
            <View
              style={{
                width: 20,
                height: 20,
                backgroundColor: 'plum',
                borderWidth: 1,
                borderColor: 'red',
              }}
            />
          </ScreenStackHeaderCenterView>
        </ScreenStackHeaderConfig> */}
        {this.props.renderScreen(key)}
      </Screen>
    );
  };
  render() {
    const screens = this.state.stack.map(this.renderScreen);
    return (
      <ScreenContainer style={styles.container}>{screens}</ScreenContainer>
    );
  }
}

class App extends Component {
  renderScreen = (key) => {
    const index = COLORS.indexOf(key);
    const color = key;
    const pop = index > 0 ? () => this.stack.pop() : null;
    const push = index < 2 ? () => this.stack.push(COLORS[index + 1]) : null;
    const remove = index > 1 ? () => this.stack.remove(1) : null;
    return (
      <SafeAreaView>
          <TextInput
            style={{fontSize: 20}}
            autoCompleteType={'username'}
            importantForAutofill={'yes'}
            placeholder={'Username'}
          />
          <TextInput
            style={{fontSize: 20}}
            autoCompleteType={'password'}
            importantForAutofill={'yes'}
            placeholder={'Password'}
            secureTextEntry={true}
          />
          <TouchableOpacity
            onPress={() => push('pink')}
            style={{
              height: 60,
              backgroundColor: 'red',
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>LOGIN</Text>
          </TouchableOpacity>
      </SafeAreaView>
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
});

export default App;
