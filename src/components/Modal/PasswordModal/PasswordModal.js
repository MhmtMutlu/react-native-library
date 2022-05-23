import React from 'react';
import {Text, View} from 'react-native';
import Modal from 'react-native-modal';

import styles from './PasswordModal.styles';

const PasswordModal = ({isVisible, onClose}) => {
  const modalItem = (text, number) => (
    <Text style={styles.text}>
      <Text style={styles.text_title}>{`${number}-`}</Text> {text}
    </Text>
  );

  return (
    <Modal
      testID="test-password-modal"
      style={styles.modal}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View testID="test-password-modal-container" style={styles.container}>
        {modalItem('Şifreniz en az 1 adet küçük karakter içermelidir!', 1)}
        {modalItem('Şifreniz en az 1 adet büyük karakter içermelidir!', 2)}
        {modalItem('Şifreniz en az 1 adet sayı içermelidir!', 3)}
        {modalItem('Şifreniz en az 1 adet özel karakter içermelidir!', 4)}
        {modalItem('Şifreniz en az 8 karakter olmalıdır!', 5)}
      </View>
    </Modal>
  );
};

export default PasswordModal;
