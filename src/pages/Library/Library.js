import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import Card from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import ContentModal from '../../components/Modal/ContentModal';
import parsedData from '../../utils/parsedData';

import styles from './Library.styles';

const Library = () => {
  const [inputModalVisible, setInputModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);
  const userMail = auth().currentUser.email.replace('.', '');
  console.log('userMail', userMail);

  useEffect(() => {
    database()
      .ref(`${userMail}/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedContentData = parsedData(contentData || {});
        setContentList(parsedContentData);
      });
  }, [userMail]);

  const handleModalClose = () => {
    setInputModalVisible(false);
  };

  const handleModalToggle = () => {
    setInputModalVisible(!inputModalVisible);
  };

  const sendContent = content => {
    const contentObj = {
      bookName: content.bookName,
      writer: content.writer,
      bookSubject: content.bookSubject,
      startDate: content.startDate.toISOString(),
      endDate: content.endDate.toISOString(),
    };
    database().ref(`${userMail}/`).push(contentObj);
    handleModalToggle();
  };

  const renderContent = ({item, index}) => (
    <Card cardData={item} index={index + 1} onPress={() => null} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton icon="plus" onPress={handleModalToggle} />
      <ContentModal
        isVisible={inputModalVisible}
        onClose={handleModalClose}
        onSend={sendContent}
      />
    </SafeAreaView>
  );
};

export default Library;
