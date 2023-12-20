import {Text, TextProps} from 'react-native';
import React from 'react';
import styles from './style';
interface TitleTextProps extends TextProps {
  text: string;
}

const TitleText: React.FC<TitleTextProps> = ({text}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default TitleText;
