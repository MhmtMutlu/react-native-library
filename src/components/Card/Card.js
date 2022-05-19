import React from 'react';
import {TouchableOpacity, Text, View} from 'react-native';

import {tr} from 'date-fns/locale';
import {formatDistance, parseISO} from 'date-fns';

import styles from './Card.styles';

const Card = ({cardData, onPress}) => {
  // const formattedDate = formatDistance(parseISO(cardData.date), new Date(), {
  //   addSuffix: true,
  //   locale: tr,
  // });

  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.left_container}>
        <View style={styles.circle}>
          <Text style={styles.circle_text}>1</Text>
        </View>
      </View>
      <View style={styles.right_container}>
        <Text style={styles.title}>Clarissa</Text>
        <Text style={styles.writer}>Stefan Zweig</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Card;
