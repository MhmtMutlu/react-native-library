import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkGrey2x,
  },
  logo_container: {
    flex: 0.3,
    backgroundColor: colors.darkGrey2x,
    marginBottom: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: Dimensions.get('window').height / 6,
    width: Dimensions.get('window').width / 6,
    resizeMode: 'contain',
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: colors.white,
    paddingLeft: 30,
  },
  body_container: {
    flex: 0.7,
    justifyContent: 'center',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: colors.white,
    paddingHorizontal: 5,
  },
  button_wrapper: {marginTop: 30},
});
