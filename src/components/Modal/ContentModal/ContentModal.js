import React, {useState} from 'react';
import {View} from 'react-native';
import {Formik} from 'formik';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-date-picker';

import Input from '../../Input';
import Button from '../../Button';

import styles from './ContentModal.styles';

const ContentModal = ({isVisible, onUpdate, onClose, onDelete, itemValues}) => {
  const initialValues = {...itemValues[0]};
  const [firstDateVisibility, setFirstDateVisibility] = useState(false);
  const [secondDateVisibility, setSecondDateVisibility] = useState(false);

  return (
    <Modal
      testID="test-content-modal"
      coverScreen={true}
      style={styles.modal}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View testID="test-content-modal-container" style={styles.container}>
        <Formik
          initialValues={initialValues}
          onSubmit={value => onUpdate(value, initialValues.id)}>
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
                isMultiline={true}
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
                    date={new Date(values.startDate)}
                    onConfirm={date => {
                      setFirstDateVisibility(false);
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
                    date={new Date(values.endDate)}
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
                <Button text="Güncelle" onPress={handleSubmit} />
                <Button
                  text="Sil"
                  theme="secondary"
                  onPress={() => onDelete(initialValues.id)}
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
