import {StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';

const base_style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 5,
    alignItems: 'center',
    borderRadius: 10,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 17,
  },
});

export default {
  primary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.darkGrey2x,
    },
    title: {
      ...base_style.title,
      color: colors.white,
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      backgroundColor: colors.lightGrey3x,
    },
    title: {
      ...base_style.title,
      color: colors.darkGrey2x,
    },
  }),
};
