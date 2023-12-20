import {StyleSheet} from 'react-native';
import {colors} from '../../../theme/colors';

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
  },
  row: {
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  transactionDataContainer: {
    width: '80%',
  },
  transactionAmount: {
    width: '20%',
  },
  divider: {
    height: 1,
    marginTop: 4,
    backgroundColor: colors.palette.Black,
  },
});

export default styles;
