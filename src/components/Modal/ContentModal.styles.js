import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.lightGrey,
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: deviceSize.height / 2,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  input: {
    flex: 1,
  },
});
