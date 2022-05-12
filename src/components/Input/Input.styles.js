import {StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    paddingVertical: 1,
    paddingHorizontal: 10,
    borderRadius: 10,
    margin: 5,
    backgroundColor: colors.lightGrey3x,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.darkGrey2x,
  },
  input: {
    flex: 1,
  },
});
