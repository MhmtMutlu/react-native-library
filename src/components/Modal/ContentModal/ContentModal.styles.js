import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: 15,
    padding: 5,
    borderRadius: 15,
    height: deviceSize.height / 1.4,
  },
  modal: {
    left: deviceSize.width / 100,
    right: deviceSize.width / 100,
    position: 'absolute',
    top: 15,
    marginVertical: 20,
  },
  input: {
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: colors.lightGrey3x,
  },
  date_wrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  date: {
    flex: 0.5,
  },
  button_wrapper: {
    marginTop: 10,
  },
});
