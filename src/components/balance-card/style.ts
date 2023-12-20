import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    paddingVertical: 16,
    paddingHorizontal: 8,
    borderRadius: 8,
    backgroundColor: '#F2F5F6',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.palette.Black,
  },
  balance: {
    fontSize: 18,
    fontWeight: 'normal',
    color: '#212121',
  },
});

export default styles;
