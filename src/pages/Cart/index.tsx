import React, { useMemo } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import formatValue from '../../utils/formatValue';

import { useCart } from '../../hooks/cart';

import ChartProductItem from '../../components/ChartProductItem';

import {
  Container,
  ProductContainer,
  ProductList,
  TotalProductsContainer,
  TotalProductsText,
  SubtotalValue,
} from './styles';

const Cart: React.FC = () => {
  const { products } = useCart();

  const cartTotal = useMemo(() => {
    const total = products.reduce(
      (acc, item) => item.price * item.quantity + acc,
      0,
    );

    return formatValue(total);
  }, [products]);

  const totalItensInCart = useMemo(() => {
    return products.reduce((acc, item) => item.quantity + acc, 0);
  }, [products]);

  return (
    <Container>
      <ProductContainer>
        <ProductList
          data={products}
          keyExtractor={item => item.id}
          ListFooterComponent={<View />}
          ListFooterComponentStyle={{
            height: 80,
          }}
          renderItem={({ item }) => (
            <ChartProductItem key={item.id} data={item} />
          )}
        />
      </ProductContainer>
      <TotalProductsContainer>
        <FeatherIcon name="shopping-cart" color="#fff" size={24} />
        <TotalProductsText>{`${totalItensInCart} itens`}</TotalProductsText>
        <SubtotalValue>{cartTotal}</SubtotalValue>
      </TotalProductsContainer>
    </Container>
  );
};

export default Cart;
