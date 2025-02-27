import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Button, StyleSheet, View} from 'react-native';
import {RootStackParams} from '../types/navigation';

type HomeScreenProps = NativeStackScreenProps<RootStackParams, 'Home'>;

const HomeScreen = ({navigation}: HomeScreenProps) => {
  return (
    <View>
      <View style={styles.btn}>
        <Button
          title="Go to Dawa's profile"
          onPress={() => navigation.navigate('Profile', {name: 'Dawa'})}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="DO Type"
          onPress={() => navigation.navigate('TypeTest')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Gesture Tutorial"
          onPress={() => navigation.navigate('GestureTests')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="API Tutorial"
          onPress={() => navigation.navigate('ApiTest')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Access Tutorial"
          onPress={() => navigation.navigate('AccessTest')}
        />
      </View>
      <View style={styles.btn}>
        <Button
          title="Aniamtion Tutorial"
          onPress={() => navigation.navigate('AnimationTest')}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  btn: {
    marginBottom: 10,
  },
});

export default HomeScreen;
