import React, {Component, FunctionComponent, useState, useEffect} from 'react';
import {Animated, StyleProp, ViewStyle} from 'react-native';

export type FadeDirection = 'up' | 'down';

interface FadeProps {
  visible?: boolean;
  style?: StyleProp<ViewStyle>;
  children: React.ReactNode;
  direction?: FadeDirection;
  duration?: number;
}

export const Fade: FunctionComponent<FadeProps> = (props) => {
  const {style, children, direction = 'down', duration, ...rest} = props;
  const [visibility] = useState(new Animated.Value(0));
  const [visible, setVisible] = useState(props.visible);

  useEffect(() => {
    Animated.timing(visibility, {
      toValue: visible ? 1 : 0,
      duration,
    }).start(() => !visible && setVisible(visible));
  }, [duration, visibility, visible]);

  const directions = {
    up: [5, 0],
    down: [-5, 0],
  };

  const test = visibility.interpolate({
    inputRange: [0, 1],
    outputRange: directions[direction] || [0, 0],
  });

  const containerStyle = {
    opacity: visibility.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    }),
    transform: [
      {
        translateY: test,
      },
    ],
  };

  const combinedStyle = [containerStyle, style];
  return (
    <Animated.View style={visible ? combinedStyle : containerStyle} {...rest}>
      {visible ? children : null}
    </Animated.View>
  );
};

Fade.defaultProps = {
  direction: 'up',
  visible: true,
  duration: 250,
};
