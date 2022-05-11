import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import styles from './Messages.styles';

const Library = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={[]} renderItem={() => null} />
    </SafeAreaView>
  );
};

export default Library;
