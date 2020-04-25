import React from 'react';
import { FlatListProps, FlatList } from 'react-native';

import Product from '../../models/Product';

type ProductFlatListProps = FlatListProps<Product>;

const ProductFlatList: React.FC<ProductFlatListProps> = props => {
  return <FlatList {...props} />;
};

export default ProductFlatList;
