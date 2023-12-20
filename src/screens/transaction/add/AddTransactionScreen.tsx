import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {Button, RadioButton, TextInput} from 'react-native-paper';
import Row from '../../../components/row/Row';
import SubTitleText from '../../../components/text/subtitle-text/SubTitleText';
import TitleText from '../../../components/text/title-text/TitleText';
import {Transaction} from '../../../types/Transaction.type';
import {useDispatch} from 'react-redux';
import {saveTransaction} from '../../../redux/slice/transactionSlice';
import moment from 'moment';
import {colors} from '../../../theme/colors';
import styles from './style';

const AddTransactionScreen: React.FC = () => {
  const dispatch = useDispatch();
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const [transaction, setTransaction] = useState({
    name: '',
    amount: 0,
    description: '',
    type: 'income',
    category: '',
    timeStamp: '',
  } satisfies Transaction);

  useEffect(() => {
    setIsButtonDisabled(!(transaction.name !== '' && transaction.amount !== 0));
  }, [transaction]);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.palette.White,
        padding: 16,
        height: '100%',
        borderWidth: 1,
        justifyContent: 'space-between',
      }}>
      {/* form */}
      <View>
        <TitleText text="New Transaction" />
        <TextInput
          mode="outlined"
          label="Name"
          style={styles.input}
          activeOutlineColor={colors.palette.Black}
          outlineColor={colors.palette.Black}
          value={transaction.name}
          onChangeText={text => {
            setTransaction({...transaction, name: text});
          }}
        />
        <TextInput
          mode="outlined"
          label="Amount"
          style={styles.input}
          activeOutlineColor={colors.palette.Black}
          outlineColor={colors.palette.Black}
          inputMode="numeric"
          value={`${transaction.amount}`}
          onChangeText={text => {
            setTransaction({...transaction, amount: +text});
          }}
        />
        <TextInput
          mode="outlined"
          label="Description"
          style={styles.input}
          value={transaction.description}
          onChangeText={text => {
            setTransaction({...transaction, description: text});
          }}
        />
        <TextInput
          mode="outlined"
          label="Category"
          style={styles.input}
          activeOutlineColor={colors.palette.Black}
          outlineColor={colors.palette.Black}
          value={transaction.category}
          onChangeText={text => {
            setTransaction({...transaction, category: text});
          }}
        />
        <Row>
          <RadioButton
            value="income"
            color={colors.palette.Black}
            status={transaction.type === 'income' ? 'checked' : 'unchecked'}
            onPress={() => {
              setTransaction({...transaction, type: 'income'});
            }}
          />
          <SubTitleText text="Income" />
        </Row>
        <Row>
          <RadioButton
            value="expenses"
            color={colors.palette.Black}
            status={transaction.type === 'expense' ? 'checked' : 'unchecked'}
            onPress={() => {
              setTransaction({...transaction, type: 'expense'});
            }}
          />
          <SubTitleText text="Expense" />
        </Row>
      </View>

      {/* button */}
      <Button
        mode="contained"
        textColor={colors.palette.White}
        buttonColor={colors.palette.Black}
        disabled={isButtonDisabled}
        onPress={() => {
          dispatch(
            saveTransaction({
              ...transaction,
              timeStamp: `${moment().unix()}`,
            } satisfies Transaction),
          );
        }}>
        Save
      </Button>
    </View>
  );
};

export default AddTransactionScreen;
