import React from 'react';
import {TouchableOpacity, Text, ActivityIndicator} from 'react-native';

import styles from './Button.styles';

const Button = ({text, onPress, loading, theme = 'primary'}) => {
  return (
    <TouchableOpacity
      testID="button-touchable"
      style={styles[theme].container}
      onPress={onPress}
      disabled={loading}>
      {loading ? (
        <ActivityIndicator testID="button-indicator" color="white" />
      ) : (
        <Text testID="button-text" style={styles[theme].title}>
          {text}
        </Text>
      )}
    </TouchableOpacity>
  );
};

export default Button;
