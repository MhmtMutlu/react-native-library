import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';
import FloatingButton from '../../components/FloatingButton';
import ContentModal from '../../components/Modal/ContentModal';
import styles from './Messages.styles';

const Library = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(true);

  const handleModalClose = () => {
    setInputModalVisible(false);
  };

  const handleModalToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={[]} renderItem={() => null} />
      <FloatingButton icon="plus" onPress={handleModalToggle} />
      <ContentModal
        isVisible={inputModalVisible}
        onClose={handleModalClose}
        onSend={() => null}
      />
    </SafeAreaView>
  );
};

export default Library;
