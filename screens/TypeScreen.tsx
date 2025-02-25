import React, {useState} from 'react';
import {View, TextInput, StyleSheet, Text} from 'react-native';

const TypeScreen = () => {
  const [text, setText] = useState('');
  return (
    <View>
      <TextInput
        style={styles.input}
        value={text}
        onChangeText={newText => setText(newText)}
        placeholder="Type Something........."
      />
      <Text style={{padding: 10}}>{text}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 10,
    margin: 5,
    padding: 4,
  },
});

export default TypeScreen;
