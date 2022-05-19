import React from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import Card from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import ContentModal from '../../components/Modal/ContentModal';

import styles from './Library.styles';

const Library = () => {
  const [inputModalVisible, setInputModalVisible] = React.useState(false);

  const handleModalClose = () => {
    setInputModalVisible(false);
  };

  const handleModalToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const renderContent = ({item}) => (
    <Card message={item} onPress={() => null} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={[{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]}
        renderItem={renderContent}
      />
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
