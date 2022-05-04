import {StyleSheet} from 'react-native';
import colors from '../../styles/colors';

const base_style = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
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
      backgroundColor: colors.grey,
    },
    title: {
      ...base_style.title,
      color: '#efefef',
    },
  }),
  secondary: StyleSheet.create({
    ...base_style,
    container: {
      ...base_style.container,
      borderWidth: 1,
      borderColor: colors.grey,
      backgroundColor: '#efefef',
    },
    title: {
      ...base_style.title,
      color: colors.grey,
    },
  }),
};
