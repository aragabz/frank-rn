import {View, Text, ViewProps} from 'react-native';
import React from 'react';
import styles from './style';
import TitleText from '../text/title-text/TitleText';
import SubTitleText from '../text/subtitle-text/SubTitleText';

interface BalanceCardProps extends ViewProps {
  title: string;
  amount: string;
  textColor: string;
}

const BalanceCard: React.FC<BalanceCardProps> = ({
  title,
  amount,
  textColor,
  ...props
}) => {
  return (
    <View style={[styles.container, props.style]}>
      <TitleText text={title} style={[styles.title, {color: textColor}]} />
      <SubTitleText
        text={amount}
        style={[styles.balance, {color: textColor}]}
      />
    </View>
  );
};

export default BalanceCard;
