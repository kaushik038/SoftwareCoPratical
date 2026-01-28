import { Text, TouchableOpacity, View } from 'react-native';
import { PieChart } from 'react-native-gifted-charts';

import CustomText from 'AppCompoments/CustomText';
import styles from './styles';
import CustomIcon from 'AppCompoments/CustomIcon';
import ICONS from 'AppUtils/icons';
import { useCallback, useMemo, useState } from 'react';
import SelectDropdown from 'react-native-select-dropdown';
import { useStatistics } from 'AppMpdules/home/api';
import { moderateScale } from 'AppSrc/utils/scalingUtils';
import Colors from 'AppSrc/theme/colors';
import ChartLoader from '../ChartLoader';

const COLORS = [
  ['#37B5EF', '#37B5EF'],
  ['#9400BD', '#9400BD'],
  ['#FF7F3A', '#FF7F3A'],
  ['#F91E4A', '#F91E4A'],
  ['#3DC269', '#3DC269'],
  ['#1F6AE1', '#1F6AE1'],
  ['#6B21A8', '#6B21A8'],
  ['#E8590C', '#E8590C'],
  ['#B91C1C', '#B91C1C'],
  ['#15803D', '#15803D'],
];

interface StatisticsData {
  percentage: number;
}

const Statistics = () => {
  const filters = [
    { title: 'Day', value: 'daily' },
    { title: 'Week', value: 'weekly' },
    { title: 'Month', value: 'monthly' },
  ];

  const [selectedFliter, setSelectedFliter] = useState({
    title: 'Day',
    value: 'daily',
  });

  const { data, isLoading } = useStatistics(selectedFliter?.value);

  const pieData = useMemo(() => {
    if (data?.data?.data?.length > 0) {
      return data?.data?.data?.map((item: StatisticsData, index: number) => ({
        value: item?.percentage,
        color: COLORS[index % COLORS.length][0],
        gradientCenterColor: COLORS[index % COLORS.length][1],
      }));
    } else {
      return [];
    }
  }, [data]);

  const randerCenterComponent = useCallback(() => {
    return (
      <View style={styles.centerComponentView}>
        <CustomIcon name={ICONS.COIN_STACK} style={styles.coinStack} />
        <Text style={styles.price}>₹ 1800.00</Text>
        <Text style={styles.totalSale}>Total Sales</Text>
      </View>
    );
  }, []);

  const DropDrown = () => {
    return (
      <SelectDropdown
        data={filters}
        defaultValue={selectedFliter}
        onSelect={(selectedItem, index) => {
          setSelectedFliter(selectedItem);
        }}
        renderButton={(selectedItem, isOpened) => {
          return (
            <View style={styles.dropdownButtonStyle}>
              <Text style={styles.dropdownButtonTxtStyle}>
                {selectedItem && selectedItem.title}
              </Text>
              <CustomIcon
                name={ICONS.DROPDWOND}
                style={styles.dropdownButtonIconStyle}
              />
            </View>
          );
        }}
        renderItem={item => {
          return (
            <View
              style={{
                ...styles.dropdownItemStyle,
              }}
            >
              <Text style={styles.dropdownItemTxtStyle}>{item.title}</Text>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
        dropdownStyle={styles.dropdownMenuStyle}
      />
    );
  };

  if (isLoading) {
    return <ChartLoader />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <CustomText value="Statistics" style={styles.headerTitle} />
        <DropDrown />
      </View>
      <View style={styles.chartView}>
        <PieChart
          data={pieData}
          donut
          strokeWidth={2}
          strokeColor={Colors.white}
          sectionAutoFocus
          radius={moderateScale(90)}
          innerRadius={moderateScale(60)}
          centerLabelComponent={randerCenterComponent}
        />
      </View>
    </View>
  );
};

export default Statistics;
