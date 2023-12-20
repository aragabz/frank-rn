import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {SELECTOR_TRANSACTION} from '../../redux/slice/transactionSlice';
import {groupBy} from '@types/lodash';
import _ from 'lodash';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {itemType} from 'react-native-gifted-charts/src/LineChart/types';
import styles from './style';
import {FlatList} from 'react-native-gesture-handler';
import TitleText from '../../components/text/title-text/TitleText';
import Row from '../../components/row/Row';
import SubTitleText from '../../components/text/subtitle-text/SubTitleText';
import {Divider} from 'react-native-paper';

const StatsScreen = () => {
  const {transactions} = useSelector(SELECTOR_TRANSACTION);
  const [pieChartData, setPieChartData] = useState<itemType[]>([]);
  useEffect(() => {
    const result = _.countBy(transactions, item => item.category);
    let items = [];
    for (const key in result) {
      items.push({value: result[key], text: key === '' ? 'General' : key});
    }
    setPieChartData(items);
  }, [transactions]);
  return (
    <View style={styles.container}>
      <PieChart
        data={pieChartData}
        showText={true}
        donut
        labelsPosition="outward"
      />

      <FlatList
        style={{width: '100%'}}
        data={pieChartData}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View style={{width: '100%'}}>
              <Row style={{justifyContent: 'space-between'}}>
                <TitleText text={item.text ?? ''} />
                <SubTitleText text={item.value ?? ''} />
              </Row>
              <Divider />
            </View>
          );
        }}
      />
    </View>
  );
};

export default StatsScreen;
