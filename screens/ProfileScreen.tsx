import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View, Text, StyleSheet, Image, Dimensions} from 'react-native';
import {RootStackParams} from '../types/navigation';

type ProfileScreenProps = NativeStackScreenProps<RootStackParams, 'Profile'>;

export const ProfileScreen = ({route}: ProfileScreenProps) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={require('../assets/home.png')} />
      <Text style={styles.text}>This is {route.params.name}'s profile</Text>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 30,
    color: '#000',
  },
  img: {
    width: width * 0.7,
    height: height * 0.4,
  },
});
