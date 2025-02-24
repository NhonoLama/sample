import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

interface myProp {
  fn: string;
  ln: string;
}

const MyName = (props: myProp) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        My name is {props.fn} {props.ln}.
      </Text>
    </View>
  );
};

const App = () => {
  const firstName = 'Dawa';
  const lastName = 'Lama';
  return <MyName fn={firstName} ln={lastName} />;
};

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
});

export default App;
