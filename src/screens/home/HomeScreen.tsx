import {View, Text, FlatList, Image} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './style';
import BalanceCard from '../../components/balance-card/BalanceCard';
import Row from '../../components/row/Row';
import TransactionItem from './components/TransactionItem';
import {useDispatch, useSelector} from 'react-redux';
import {
  SELECTOR_TRANSACTION,
  initTransactionState,
} from '../../redux/slice/transactionSlice';
import SubTitleText from '../../components/text/subtitle-text/SubTitleText';
import {AnimatedFAB} from 'react-native-paper';
import {useNavigation} from '@react-navigation/native';
import {colors} from '../../theme/colors';
import * as storage from '../../utils/storage';
import {StorageKeys} from '../../utils/constants';
import {Transaction} from '../../types/Transaction.type';

const HomeScreen: React.FC = () => {
  const disaptch = useDispatch();
  const navigation = useNavigation();

  const {transactions} = useSelector(SELECTOR_TRANSACTION);
  const [totalBalance, setTotalBalance] = useState(0);
  const [incomeBalance, setIncomeBalance] = useState(0);
  const [expenseBalance, setExpenseBalance] = useState(0);

  const [isExtended, setIsExtended] = useState(true);
  const fabStyle = {['right']: 16};

  useEffect(() => {
    loadCachedTransactions();
  }, []);

  useEffect(() => {
    // filter transactions with type income
    const incomeTransactions = transactions.filter(
      item => item.type === 'income',
    );

    if (incomeTransactions.length > 0) {
      setIncomeBalance(
        incomeTransactions.reduce((sum, item) => sum + item.amount, 0),
      );
    } else {
      setIncomeBalance(0);
    }

    // filter transactions with type expense
    const expenseTransactions = transactions.filter(
      item => item.type === 'expense',
    );
    if (expenseTransactions.length > 0) {
      setExpenseBalance(
        expenseTransactions.reduce((sum, item) => sum + item.amount, 0),
      );
    } else {
      setExpenseBalance(0);
    }

    setTotalBalance(incomeBalance - expenseBalance);
  }, [transactions]);

  const loadCachedTransactions = () => {
    let result = storage.load(StorageKeys.TRANSACTIONS);
    result
      .then(transactions => {
        if (transactions !== undefined && transactions !== null) {
          disaptch(initTransactionState(transactions as Transaction[]));
        }
      })
      .catch(err => console.log(err));
  };

  const TotalBalanceCard = () => {
    return (
      <BalanceCard
        title="Total Balance"
        amount={`${totalBalance}`}
        textColor={colors.palette.Black}
      />
    );
  };

  const onScroll = ({nativeEvent}) => {
    const currentScrollPosition =
      Math.floor(nativeEvent?.contentOffset?.y) ?? 0;

    setIsExtended(currentScrollPosition <= 0);
  };

  const IncomeCard = () => {
    return (
      <BalanceCard
        title="Income"
        amount={`${incomeBalance}`}
        textColor={colors.palette.Black}
        style={{width: '48%'}}
      />
    );
  };
  const ExpensesCard = () => {
    return (
      <BalanceCard
        title="Expenses"
        amount={`${expenseBalance}`}
        textColor={colors.palette.Black}
        style={{width: '48%'}}
      />
    );
  };

  const noTransactionsList = () => {
    return (
      <View style={styles.noTransactionsContainer}>
        <Image
          source={require('../../assets/paper.png')}
          style={{width: 40, height: 40}}
        />
        <SubTitleText text="No Transactions" />
      </View>
    );
  };

  const renderFabButton = () => {
    return (
      <AnimatedFAB
        icon={'plus'}
        label={'Add'}
        color={colors.palette.White}
        extended={isExtended}
        onPress={() => navigation.navigate({name: 'add-transaction'} as never)}
        visible={true}
        animateFrom={'right'}
        iconMode={'dynamic'}
        style={[styles.fabStyle, fabStyle]}
      />
    );
  };

  return (
    <View style={styles.mainContainer}>
      {/* total balance */}
      {TotalBalanceCard()}
      {/* income and expenses cards */}
      <Row style={styles.incomeAndExpenses}>
        {IncomeCard()}
        {ExpensesCard()}
      </Row>

      {/* transactions history */}
      <Text style={styles.transactionHistoryText}>Transactions History</Text>
      <View>
        {transactions !== undefined && transactions.length > 0 ? (
          <FlatList
            onScroll={onScroll}
            showsVerticalScrollIndicator={false}
            data={transactions}
            renderItem={({item}) => {
              return (
                <TransactionItem
                  transaction={item}
                  onPress={() => {
                    navigation.navigate({
                      name: 'transaction-details',
                      params: item,
                    } as never);
                  }}
                />
              );
            }}
          />
        ) : (
          noTransactionsList()
        )}
      </View>
      {renderFabButton()}
    </View>
  );
};

export default HomeScreen;
