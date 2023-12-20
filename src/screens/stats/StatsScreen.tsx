import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {SELECTOR_TRANSACTION} from '../../redux/slice/transactionSlice';
import {groupBy} from '@types/lodash';
import _ from 'lodash';
import {BarChart, LineChart, PieChart} from 'react-native-gifted-charts';
import {itemType} from 'react-native-gifted-charts/src/LineChart/types';

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
    <View>
      <PieChart data={pieChartData} />
    </View>
  );
};

export default StatsScreen;
