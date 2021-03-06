import React from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/styles/colors';

import styles from './Input.styles';

const Input = ({
  placeholder,
  value,
  onType,
  iconName,
  isSecure,
  handleIconPress,
  isMultiline = false,
}) => {
  return (
    <View testID="input-view" style={styles.container}>
      <TextInput
        multiline={isMultiline}
        numberOfLines={isMultiline ? 6 : null}
        testID="text-input"
        style={styles.input}
        value={value}
        placeholder={placeholder}
        onChangeText={onType}
        secureTextEntry={isSecure}
        placeholderTextColor={colors.darkGrey2x}
        textAlignVertical={isMultiline ? 'top' : null}
      />
      {iconName && iconName === 'key' ? (
        <TouchableOpacity onPress={handleIconPress}>
          <Icon name={iconName} size={25} color={colors.darkGrey2x} />
        </TouchableOpacity>
      ) : (
        <Icon name={iconName} size={25} color={colors.darkGrey2x} />
      )}
    </View>
  );
};

export default Input;
