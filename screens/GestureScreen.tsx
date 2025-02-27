import {
  createNativeStackNavigator,
  NativeStackScreenProps,
} from '@react-navigation/native-stack';
import React from 'react';
import {View, Button} from 'react-native';
import DragScreen from './DragScreen';
import SwipeScreen from './SwipeScreen';

type GestureList = {
  Drag: undefined;
  Swipe: undefined;
  Gesture: undefined;
};

type GestureScreenProps = NativeStackScreenProps<GestureList>;

const GestureStack = createNativeStackNavigator<GestureList>();

// GestureScreen now only handles the button navigation
const GestureScreen = ({navigation}: GestureScreenProps) => {
  return (
    <View>
      <View style={{marginBottom: 10}}>
        <Button
          title="Drag and Drop"
          onPress={() => navigation.navigate('Drag')}
        />
      </View>
      <View style={{marginBottom: 10}}>
        <Button title="Swipe" onPress={() => navigation.navigate('Swipe')} />
      </View>
    </View>
  );
};

// Main Navigation Stack (where the screens are declared)
const App = () => {
  return (
    <GestureStack.Navigator initialRouteName="Gesture">
      <GestureStack.Screen name="Gesture" component={GestureScreen} />
      <GestureStack.Screen
        name="Drag"
        component={DragScreen}
        options={{title: 'Drag and Drop'}}
      />
      <GestureStack.Screen
        name="Swipe"
        component={SwipeScreen}
        options={{title: 'Swipe LEFT & RIGHT'}}
      />
    </GestureStack.Navigator>
  );
};

export default App;
