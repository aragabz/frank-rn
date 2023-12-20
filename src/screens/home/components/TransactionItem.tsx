import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './style';
import Row from '../../../components/row/Row';
import {Transaction} from '../../../types/Transaction.type';
import TitleText from '../../../components/text/title-text/TitleText';
import SubTitleText from '../../../components/text/subtitle-text/SubTitleText';

interface TransactionItemProps {
  transaction: Transaction;
  onPress: () => void;
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  transaction,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Row style={styles.row}>
        {/* title and date */}
        <View>
          <TitleText text={transaction.name} />
          <SubTitleText text={transaction.description} />
        </View>
        <SubTitleText
          text={`${transaction.amount}`}
          style={styles.transactionAmount}
        />
      </Row>
      <View style={styles.divider} />
    </TouchableOpacity>
  );
};

export default TransactionItem;
