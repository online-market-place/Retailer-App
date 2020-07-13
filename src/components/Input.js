import React from 'react';
import {StyleSheet, View, TextInput, Text} from 'react-native';

const Input = props => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.label}</Text>
      <View style={styles.inputContainer}>
        <TextInput {...props} styles={{...styles.input, ...props.style}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
  },

  label: {
    fontSize: 16,
    paddingLeft: 5,
  },

  inputContainer: {
    flexDirection: 'row',
    borderBottomWidth: 0.5,
    alignItems: 'center',
    borderColor: 'grey',
    marginBottom: 20,
  },

  input: {
    alignSelf: 'center',
    color: 'black',
    fontSize: 18,
    flex: 1,
    minHeight: 40,
  },
});

export default Input;
