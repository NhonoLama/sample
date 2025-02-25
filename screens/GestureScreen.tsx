import {NavigationContainer} from '@react-navigation/native';
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

type GestureScreenProps = NativeStackScreenProps<GestureList, 'Gesture'>;

const GestureStack = createNativeStackNavigator<GestureList>();

const GestureScreen = ({navigation}: GestureScreenProps) => {
  return (
    <View>
      // Button section
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
      //navigation section
      <GestureStack.Navigator initialRouteName="Gesture">
        <GestureStack.Screen
          name="Drag"
          component={DragScreen}
          options={{title: 'Drag and Drop'}}
        />
        <GestureStack.Screen
          name="Swipe"
          component={SwipeScreen}
          options={{title: 'SwipeLEFT&RIGHT'}}
        />
        <GestureStack.Screen
          name="Gesture"
          component={GestureScreen}
          options={{title: 'Gesture Tutoiral'}}
        />
      </GestureStack.Navigator>
    </View>
  );
};

export default GestureScreen;
