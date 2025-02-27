import {Button, View} from 'react-native';
import Animated, {useSharedValue} from 'react-native-reanimated';

export default function AnimationScreen() {
  const width = useSharedValue<number>(100);

  const handlePress = () => {
    width.value = width.value + 50;
  };

  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: 'violet',
        }}
      />
      <Button onPress={handlePress} title="Click me" />
    </View>
  );
}
