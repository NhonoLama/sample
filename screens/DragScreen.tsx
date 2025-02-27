import React, {useState} from 'react';
import {View, Text, StyleSheet, GestureResponderEvent} from 'react-native';

const DragScreen = () => {
  const [position, setPosition] = useState({x: 0, y: 0});

  const onStart = (evt: GestureResponderEvent) => {
    console.log('Touch started', evt.nativeEvent);
    return true;
  };

  const onMove = (evt: GestureResponderEvent) => {
    console.log('Touch moved', evt.nativeEvent);
    return true;
  };

  const onResponderMove = (evt: GestureResponderEvent) => {
    setPosition({
      x: evt.nativeEvent.pageX,
      y: evt.nativeEvent.pageY,
    });
  };

  return (
    <View
      style={[styles.box, {left: position.x, top: position.y}]}
      onStartShouldSetResponder={onStart}
      onMoveShouldSetResponder={onMove}
      onResponderMove={onResponderMove}>
      <Text>Drag me!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    position: 'absolute',
    width: 100,
    height: 100,
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default DragScreen;
