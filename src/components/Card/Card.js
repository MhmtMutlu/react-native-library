import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import styles from './Card.styles';

const Card = ({cardData, index, onPress}) => {
  return (
    <TouchableOpacity
      testID="test-card"
      style={styles.container}
      onPress={onPress}>
      <View style={styles.left_container}>
        <View style={styles.circle}>
          <Text style={styles.circle_text}>{index}</Text>
        </View>
      </View>
      <View style={styles.right_container}>
        <Text style={styles.title}>{cardData.bookName}</Text>
        <Text style={styles.writer}>{cardData.writer}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
