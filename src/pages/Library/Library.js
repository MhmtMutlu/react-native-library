import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView} from 'react-native';

import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

import Card from '../../components/Card';
import FloatingButton from '../../components/FloatingButton';
import SaveModal from '../../components/Modal/SaveModal';
import parsedData from '../../utils/parsedData';

import styles from './Library.styles';
import ContentModal from '../../components/Modal/ContentModal';
import {showMessage} from 'react-native-flash-message';
import colors from '../../assets/styles/colors';
import Loading from '../../components/Loading';

const Library = () => {
  const [loading, setLoading] = useState(false);
  const [saveModalVisible, setSaveModalVisible] = useState(false);
  const [updateModalVisible, setUpdateModalVisible] = useState(false);
  const [contentList, setContentList] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const userMail = auth().currentUser.email.replace('.', '');

  useEffect(() => {
    database()
      .ref(`${userMail}/`)
      .on('value', snapshot => {
        const contentData = snapshot.val();
        const parsedContentData = parsedData(contentData || {});
        setContentList(parsedContentData);
      });
  }, [userMail]);

  const handleSaveModalToggle = () => {
    setSaveModalVisible(!saveModalVisible);
  };

  const handleUpdateModalToggle = () => {
    setUpdateModalVisible(!updateModalVisible);
  };

  const sendContent = async content => {
    try {
      setLoading(true);
      const contentObj = {
        bookName: content.bookName,
        writer: content.writer,
        bookSubject: content.bookSubject,
        quotes: content.quotes,
        startDate: content.startDate.toISOString(),
        endDate: content.endDate.toISOString(),
      };
      await database()
        .ref(`${userMail}/`)
        .push(contentObj)
        .then(() =>
          showMessage({
            message: 'Yeni kitap kaydı başarılı bir şekilde yapıldı!',
            type: 'default',
            backgroundColor: colors.lightGrey3x,
            color: colors.darkGrey2x,
          }),
        );
      handleSaveModalToggle();
    } catch (error) {
      console.warn(error);
      showMessage({
        message: 'Yeni kitap kaydı yapılırken bir hata oluştu!',
        type: 'default',
        backgroundColor: colors.lightGrey3x,
        color: colors.darkGrey2x,
      });
    } finally {
      setLoading(false);
    }
  };

  const updateContent = async (content, id) => {
    try {
      setLoading(true);
      const contentObj = {
        bookName: content.bookName,
        writer: content.writer,
        bookSubject: content.bookSubject,
        quotes: content.quotes,
        startDate: content.startDate,
        endDate: content.endDate,
      };
      await database()
        .ref(`${userMail}/${id}`)
        .update(contentObj)
        .then(() =>
          showMessage({
            message: 'Güncelleme başarılı bir şekilde yapıldı!',
            type: 'default',
            backgroundColor: colors.lightGrey3x,
            color: colors.darkGrey2x,
          }),
        );
      handleUpdateModalToggle();
    } catch (error) {
      console.warn(error);
      showMessage({
        message: 'Güncelleme yapılırken bir hata oluştu!',
        type: 'default',
        backgroundColor: colors.lightGrey3x,
        color: colors.darkGrey2x,
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async id => {
    try {
      setLoading(true);
      await database()
        .ref(`${userMail}/${id}`)
        .remove()
        .then(() =>
          showMessage({
            message: 'Silme işlemi başarılı bir şekilde yapıldı!',
            type: 'default',
            backgroundColor: colors.lightGrey3x,
            color: colors.darkGrey2x,
          }),
        );
      handleUpdateModalToggle();
    } catch (error) {
      console.warn(error);
      showMessage({
        message: 'Silme işlemi yapılırken bir hata oluştu!',
        type: 'default',
        backgroundColor: colors.lightGrey3x,
        color: colors.darkGrey2x,
      });
    } finally {
      setLoading(false);
    }
  };

  const filterContentList = async id => {
    return contentList.filter(item => item.id === id);
  };

  const handleOnPress = async itemID => {
    const filteredContentData = await filterContentList(itemID);
    setFilteredData(filteredContentData);
  };

  const renderContent = ({item, index}) => (
    <Card
      cardData={item}
      index={index + 1}
      onPress={async () => {
        await handleOnPress(item.id);
        setUpdateModalVisible(true);
      }}
    />
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList data={contentList} renderItem={renderContent} />
      <FloatingButton icon="plus" onPress={handleSaveModalToggle} />
      <SaveModal
        isVisible={saveModalVisible}
        onClose={() => setSaveModalVisible(false)}
        onSend={sendContent}
      />
      {filteredData.length ? (
        <ContentModal
          itemValues={filteredData}
          isVisible={updateModalVisible}
          onClose={() => setUpdateModalVisible(false)}
          onUpdate={updateContent}
          onDelete={handleDelete}
        />
      ) : null}
    </SafeAreaView>
  );
};

export default Library;
