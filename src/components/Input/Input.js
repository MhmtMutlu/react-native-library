import React from 'react';
import {TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/styles/colors';

import styles from './Input.styles';

const Input = ({placeholder, value, onType, iconName, isSecure}) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onType}
        secureTextEntry={isSecure}
        placeholderTextColor={colors.darkGrey2x}
      />
      <Icon name={iconName} size={25} color={colors.darkGrey2x} />
    </View>
  );
};

export default Input;
