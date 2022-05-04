import React from 'react';
import {TextInput, View} from 'react-native';
import styles from './Input.styles';

const Login = ({placeholder, value, onType, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onType}
        secureTextEntry={isSecure}
      />
    </View>
  );
};

export default Login;
