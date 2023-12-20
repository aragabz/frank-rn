import {StyleSheet} from 'react-native';
import {colors} from '../../theme/colors';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 16,
    flex: 1,
    backgroundColor: colors.palette.White,
  },
  balanceCard: {
    borderRadius: 16,
    padding: 16,
  },
  incomeAndExpenses: {
    justifyContent: 'space-between',
  },
  transactionHistoryText: {
    fontWeight: 'bold',
    fontSize: 24,
    marginTop: 16,
    color: colors.palette.Black,
  },
  noTransactionsContainer: {
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    marginVertical: 24,
  },
  fabStyle: {
    bottom: 16,
    right: 16,
    position: 'absolute',
    backgroundColor: colors.palette.Black,
  },
});

export default styles;
