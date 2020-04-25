import React from 'react';
import { FlatListProps, FlatList } from 'react-native';

import { Product } from '../../hooks/cart';

type ChartProductFlatListProps = FlatListProps<Product>;

const ChartProductFlatList: React.FC<ChartProductFlatListProps> = props => {
  return <FlatList {...props} />;
};

export default ChartProductFlatList;
