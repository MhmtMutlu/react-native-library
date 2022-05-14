import React, {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';

import Button from '../Button';
import styles from './ContentModal.styles';
import Input from '../Input';

const initialValues = {
  bookName: '',
  writer: '',
  bookSubject: '',
  bookPages: 0,
  quotes: '',
  startDate: new Date(),
  endDate: new Date(),
};

const ContentModal = ({isVisible, onSend, onClose}) => {
  const [firstDateVisibility, setFirstDateVisibility] = useState(false);
  const [secondDateVisibility, setSecondDateVisibility] = useState(false);

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={value => console.log(value)}>
          {({handleSubmit, handleChange, setFieldValue, values}) => (
            <View style={styles.body_container}>
              <Input
                value={values.bookName}
                placeholder="Kitap adı ..."
                onType={handleChange('bookName')}
              />
              <Input
                value={values.writer}
                placeholder="Yazarı ..."
                onType={handleChange('writer')}
              />
              <Input
                value={values.bookSubject}
                placeholder="Kitabın konusu ..."
                onType={handleChange('bookSubject')}
              />
              <Input
                isMultiline={true}
                value={values.quotes}
                placeholder="Alıntılar ..."
                onType={handleChange('quotes')}
              />
              <View style={styles.date_wrapper}>
                <View style={styles.date}>
                  <Button
                    text="Başlangıç Tarihi"
                    theme="secondary"
                    onPress={() => setFirstDateVisibility(true)}
                  />
                  <DatePicker
                    modal
                    androidVariant="iosClone"
                    open={firstDateVisibility}
                    mode="date"
                    date={values.startDate}
                    onConfirm={date => {
                      setFirstDateVisibility(false);
                      console.log('DATE--->', date);
                      setFieldValue('startDate', date);
                    }}
                    onCancel={() => {
                      setFirstDateVisibility(false);
                    }}
                  />
                </View>
                <View style={styles.date}>
                  <Button
                    text="Bitiş Tarihi"
                    theme="secondary"
                    onPress={() => setSecondDateVisibility(true)}
                  />
                  <DatePicker
                    modal
                    androidVariant="iosClone"
                    open={secondDateVisibility}
                    mode="date"
                    date={values.endDate}
                    onConfirm={date => {
                      setSecondDateVisibility(false);
                      setFieldValue('endDate', date);
                    }}
                    onCancel={() => {
                      setSecondDateVisibility(false);
                    }}
                  />
                </View>
              </View>
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
