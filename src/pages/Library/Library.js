import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import ContentModal from '../../components/Modal/ContentModal';
import styles from './Messages.styles';

const Library = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(true);

  const handleModalClose = () => {
    setInputModalVisible(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={[]} renderItem={() => null} />
      <ContentModal
        isVisible={inputModalVisible}
        onClose={handleModalClose}
        onSend={() => null}
      />
    </SafeAreaView>
  );
};

export default Library;
