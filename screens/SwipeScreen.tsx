import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

const SwipeScreen = () => {
  const pressed = useSharedValue<boolean>(false);
  const offset = useSharedValue<number>(0);

  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
      console.log('begin');
    })
    .onChange(e => {
      offset.value = e.translationX;
    })
    .onEnd(() => {
      pressed.value = false;
      offset.value = withSpring(0);
      console.log('ended');
    });

  const animatedStyles = useAnimatedStyle(() => ({
    backgroundColor: pressed.value ? '#FFE04B' : '#B58DF1',
    width: withTiming(pressed.value ? 120 : 100),
    height: withTiming(pressed.value ? 120 : 100),
    transform: [{translateX: offset.value}],
  }));

  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <GestureDetector gesture={pan}>
          <Animated.View style={[styles.circle, animatedStyles]} />
        </GestureDetector>
        <Text style={{marginTop: 20}}>Tap and Pan Gesture</Text>
      </View>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  circle: {
    borderRadius: 100,
  },
});
export default SwipeScreen;
