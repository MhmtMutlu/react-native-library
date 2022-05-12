import React from 'react';
import {View, TextInput} from 'react-native';
import Button from '../Button';
import Modal from 'react-native-modal';
import styles from './ContentModal.styles';
import {Formik} from 'formik';

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
              <View style={styles.input}>
                <TextInput
                  value={values.bookName}
                  placeholder="Kitap adı ..."
                  onChangeText={handleChange('bookName')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  value={values.writer}
                  placeholder="Yazarı ..."
                  onChangeText={handleChange('writer')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  value={values.bookSubject}
                  placeholder="Kitabın konusu ..."
                  onChangeText={handleChange('bookSubject')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  value={values.quotes}
                  placeholder="Alıntılar ..."
                  onChangeText={handleChange('quotes')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  value={values.startDate}
                  placeholder="Başlangıç tarihi ..."
                  onChangeText={handleChange('startDate')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  value={values.endDate}
                  placeholder="Başlangıç tarihi ..."
                  onChangeText={handleChange('endDate')}
                />
              </View>
              <View style={styles.input}>
                <TextInput
                  value={values.imageUrl}
                  placeholder="Kitabın resmi ..."
                  onChangeText={handleChange('imageUrl')}
                />
              </View>
              <View style={styles.button_wrapper}>
                <Button text="Giriş Yap" onPress={handleSubmit} />
                <Button
                  text="Kaydet"
                  theme="secondary"
                  onPress={handleSubmit}
                />
              </View>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

export default ContentModal;
