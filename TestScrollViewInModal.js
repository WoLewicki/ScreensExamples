import React, {Component} from 'react';
import {
  StyleSheet,
  Animated,
  Button,
  View,
  RefreshControl,
  Text,
} from 'react-native';

import {
  PanGestureHandler,
  ScrollView,
  State,
} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from 'react-native-screens/native-stack';

function wait(timeout) {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
}

function Example() {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);
  return (
    <>
      <View style={{width: '100%', height: 50, backgroundColor: 'red'}} />

      <DraggableBox />
    </>
  );
}

class DraggableBox extends Component {
  someContent = Array.from({length: 50}, (v, i) => i);
  constructor(props) {
    super(props);
    this._translateX = new Animated.Value(0);
    this._translateY = new Animated.Value(0);
    this._lastOffset = {x: 0, y: 0};
    this._onGestureEvent = Animated.event(
      [
        {
          nativeEvent: {
            translationX: this._translateX,
            translationY: this._translateY,
          },
        },
      ],
      {useNativeDriver: true},
    );
  }
  _onHandlerStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      this._lastOffset.x += event.nativeEvent.translationX;
      this._lastOffset.y += event.nativeEvent.translationY;
      this._translateX.setOffset(this._lastOffset.x);
      this._translateX.setValue(0);
      this._translateY.setOffset(this._lastOffset.y);
      this._translateY.setValue(0);
    }
  };

  render() {
    return (
      <PanGestureHandler
        {...this.props}
        onGestureEvent={this._onGestureEvent}
        onHandlerStateChange={this._onHandlerStateChange}>
        <Animated.View style={{flex: 1}}>
          <ScrollView
            refreshControl={
              <RefreshControl //refreshing={refreshing} onRefresh={onRefresh}
              />
            }
            waitFor={['dragbox', 'image_pinch', 'image_rotation', 'image_tilt']}
            style={styles.scrollView}>
            {this.someContent.map((x) => (
              <Text>Scroll to {x}</Text>
            ))}
          </ScrollView>
        </Animated.View>
      </PanGestureHandler>
    );
  }
}

const NativeStack = createNativeStackNavigator();

const HomeScreen = ({navigation}) => {
  return (
    <ScrollView
      style={{}}
      scrollToOverflowEnabled={true}
      contentInsetAdjustmentBehavior="automatic">
      <Button title="Second" onPress={() => navigation.push('Second')} />
    </ScrollView>
  );
};

export default function ReactNativeScreensBugs() {
  return (
    <NavigationContainer>
      <NativeStack.Navigator
        screenOptions={{
          headerTranslucent: true,
          stackPresentation: 'modal',
        }}>
        <NativeStack.Screen
          options={{headerLargeTitle: true}}
          name="StickyHeader"
          component={HomeScreen}
        />
        <NativeStack.Screen
          options={{headerLargeTitle: true, gestureEnabled: true}}
          name="Second"
          component={Example}
        />
      </NativeStack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },

  box: {
    width: '100%',
    height: 200,
    alignSelf: 'center',
    backgroundColor: 'plum',
    margin: 10,
    zIndex: 200,
  },
});
