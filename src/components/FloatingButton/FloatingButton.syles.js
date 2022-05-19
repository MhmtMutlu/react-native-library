import {StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    borderRadius: 50,
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.white,
    shadowColor: 'black',
    shadowOpacity: 0.5,
    elevation: 8,
    shadowRadius: 20,
    shadowOffset: {width: 56, height: 10},
  },
});
