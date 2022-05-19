import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import colors from '../../assets/styles/colors';
import styles from './FloatingButton.syles';

const FloatingButton = ({onPress, icon}) => {
  return (
    <TouchableOpacity
      testID="floating-button"
      style={styles.container}
      onPress={onPress}>
      <Icon name={icon} color={colors.darkGrey2x} size={35} />
    </TouchableOpacity>
  );
};

export default FloatingButton;
