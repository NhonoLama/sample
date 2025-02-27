import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import HomeScreen from './screens/HomeScreen';
import {ProfileScreen} from './screens/ProfileScreen';
import TypeScreen from './screens/TypeScreen';
import {RootStackParams} from './types/navigation';
import GestureScreen from './screens/GestureScreen';
import ApiScreen from './screens/ApiScreen';
import AccessScreen from './screens/AccessScreen';
import AnimationScreen from './screens/AnimationScreen';

const App = () => {
  // const firstName = 'Dawa';
  // const lastName = 'Lama';
  const Stack = createNativeStackNavigator<RootStackParams>();
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{title: 'welcome'}}
        />
        <Stack.Screen
          name="Profile"
          component={ProfileScreen}
          options={{title: 'pic'}}
        />
        <Stack.Screen
          name="TypeTest"
          component={TypeScreen}
          options={{title: 'type anything'}}
        />
        <Stack.Screen
          name="GestureTests"
          component={GestureScreen}
          options={{title: 'All Gestures'}}
        />
        <Stack.Screen
          name="ApiTest"
          component={ApiScreen}
          options={{title: 'hello'}}
        />
        <Stack.Screen
          name="AccessTest"
          component={AccessScreen}
          options={{title: 'hello'}}
        />
        <Stack.Screen
          name="AnimationTest"
          component={AnimationScreen}
          options={{title: 'hello'}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
