import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    padding: 20,
    borderRadius: 15,
    height: deviceSize.height / 3,
  },
  modal: {
    left: deviceSize.width / 100,
    right: deviceSize.width / 100,
    position: 'absolute',
    top: deviceSize.height / 3.5,
    marginVertical: 20,
  },
  text: {
    fontSize: 18,
    marginBottom: 10,
    fontStyle: 'italic',
  },
  text_title: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
