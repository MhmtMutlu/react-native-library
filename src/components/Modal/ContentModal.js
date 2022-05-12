import React from 'react';
import {View} from 'react-native';
import Button from '../Button';
import Modal from 'react-native-modal';
import styles from './ContentModal.styles';
import {Formik} from 'formik';
import Input from '../Input';

const initialValues = {
  bookName: '',
  writer: '',
  bookSubject: '',
  bookPages: 0,
  quotes: '',
  startDate: '',
  endDate: '',
  imageUrl: '',
};

const ContentModal = ({isVisible, onSend, onClose}) => {
  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <Formik initialValues={initialValues} onSubmit={onSend}>
          {({handleSubmit, handleChange, values}) => (
            <View style={styles.body_container}>
              <Input
                value={values.bookName}
                placeholder="Kitap adı ..."
                onChangeText={handleChange('bookName')}
              />
              <Input
                value={values.writer}
                placeholder="Yazarı ..."
                onChangeText={handleChange('writer')}
              />
              <Input
                value={values.bookSubject}
                placeholder="Kitabın konusu ..."
                onChangeText={handleChange('bookSubject')}
              />
              <Input
                value={values.quotes}
                placeholder="Alıntılar ..."
                onChangeText={handleChange('quotes')}
              />
              <Input
                value={values.startDate}
                placeholder="Başlangıç tarihi ..."
                onChangeText={handleChange('startDate')}
              />
              <Input
                value={values.endDate}
                placeholder="Başlangıç tarihi ..."
                onChangeText={handleChange('endDate')}
              />
              <Input
                value={values.imageUrl}
                placeholder="Kitabın resmi ..."
                onChangeText={handleChange('imageUrl')}
              />
              <View style={styles.button_wrapper}>
                <Button text="Kaydet" onPress={handleSubmit} />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default ContentModal;
