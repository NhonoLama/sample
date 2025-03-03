import {useEffect} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withRepeat,
  withSequence,
  withSpring,
  withTiming,
} from 'react-native-reanimated';

export default function AnimationScreen() {
  const width = useSharedValue<number>(100);
  const translateX = useSharedValue<number>(10);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };

  useEffect(() => {
    translateX.value = withDelay(
      500,
      withSequence(
        withTiming(translateX.value - 20, {duration: 150}),
        withRepeat(withTiming(translateX.value + 20, {duration: 300}), 5, true),
        withTiming(0, {duration: 150}),
      ),
    );
  }, []);

  const animateMe = useAnimatedStyle(() => ({
    transform: [{translateX: translateX.value}],
  }));

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Animated.View style={[styles.box, {width}, animateMe]} />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
const styles = StyleSheet.create({
  box: {height: 100, backgroundColor: 'violet', margin: 20},
});
