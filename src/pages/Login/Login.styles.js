import {StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo: {
    flex: 0.6,
    backgroundColor: colors.darkGrey2x,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    marginBottom: 20,
  },
  title: {margin: 10, fontSize: 26, fontWeight: 'bold'},
  body_container: {flex: 0.4},
});
