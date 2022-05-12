import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey2x,
  },
  logo_container: {
    flex: 0.5,
    backgroundColor: colors.darkGrey2x,
    marginBottom: 20,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: Dimensions.get('window').height / 4,
    width: Dimensions.get('window').width,
    resizeMode: 'contain',
  },
  title: {marginTop: 20, fontSize: 34, fontWeight: 'bold', color: colors.white},
  body_container: {
    flex: 0.5,
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
  },
  button_wrapper: {marginTop: 10},
});
