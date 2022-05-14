import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/styles/colors';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingTop: 20,
    padding: 5,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    height: deviceSize.height / 1.6,
  },
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
  input: {
    paddingHorizontal: 10,
    borderRadius: 10,
    marginBottom: 15,
    marginHorizontal: 5,
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
    marginTop: 15,
  },
});
