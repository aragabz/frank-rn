import {Text, TextProps} from 'react-native';
import React from 'react';
import styles from './style';

interface SubTitleTextProps extends TextProps {
  text: string;
}
const SubTitleText: React.FC<SubTitleTextProps> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default SubTitleText;
