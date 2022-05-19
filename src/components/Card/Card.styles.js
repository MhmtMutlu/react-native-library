import {StyleSheet} from 'react-native';
import colors from '../../assets/styles/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: colors.lightGrey3x,
    borderRadius: 5,
    borderTopLeftRadius: 50,
    borderBottomLeftRadius: 50,
    margin: 10,
    padding: 5,
    shadowColor: colors.grey,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.5,
    shadowRadius: 15,
    elevation: 10,
    height: 80,
  },
  left_container: {
    flex: 0.2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    justifyContent: 'center',
    alignItems: 'center',
    color: colors.lightGrey3x,
    backgroundColor: colors.darkGrey2x,
    width: 80,
    height: 78,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: colors.lightGrey3x,
  },
  circle_text: {
    color: colors.lightGrey3x,
    fontSize: 28,
    fontWeight: 'bold',
  },
  right_container: {
    flex: 0.8,
    justifyContent: 'center',
    alignItems: 'flex-start',
    paddingLeft: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.darkGrey2x,
  },
  writer: {
    fontSize: 14,
    fontStyle: 'italic',
  },
});
