import React from 'react';
import {View, TextInput} from 'react-native';
import Button from '../Button';
import Modal from 'react-native-modal';
import styles from './ContentModal.styles';

const ContentModal = ({isVisible, onSend, onClose}) => {
  const [text, setText] = React.useState(null);

  const handleSend = () => {
    if (!text) {
      return;
    }
    onSend(text);
    setText(null);
  };

  return (
    <Modal
      style={styles.modal}
      isVisible={isVisible}
      swipeDirection="down"
      onSwipeComplete={onClose}
      onBackdropPress={onClose}
      onBackButtonPress={onClose}>
      <View style={styles.container}>
        <View style={styles.input}>
          <TextInput multiline placeholder="deneme" onChangeText={setText} />
        </View>
        <Button text="Gönder" onPress={handleSend} />
      </View>
    </Modal>
  );
};

export default ContentModal;
