import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  logo_container: {
    flex: 0.6,
    backgroundColor: colors.darkGrey2x,
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
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
  body_container: {flex: 0.4},
});
