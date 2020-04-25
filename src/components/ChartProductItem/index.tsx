import React, { useCallback } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useCart, Product } from '../../hooks/cart';

import formatValue from '../../utils/formatValue';

import {
  Container,
  ProductImage,
  ProductTitleContainer,
  ProductTitle,
  ProductPriceContainer,
  ProductSinglePrice,
  TotalContainer,
  ProductPrice,
  ProductQuantity,
  ActionContainer,
  ActionButton,
} from './styles';

interface ChartProductItemProps {
  data: Product;
}

const ChartProductItem: React.FC<ChartProductItemProps> = ({ data: item }) => {
  const { increment, decrement } = useCart();

  const handleIncrement = useCallback(
    async (id: string): Promise<void> => increment(id),
    [increment],
  );

  const handleDecrement = useCallback(
    async (id: string): Promise<void> => decrement(id),
    [decrement],
  );

  return (
    <Container>
      <ProductImage source={{ uri: item.image_url }} />
      <ProductTitleContainer>
        <ProductTitle>{item.title}</ProductTitle>
        <ProductPriceContainer>
          <ProductSinglePrice>{formatValue(item.price)}</ProductSinglePrice>

          <TotalContainer>
            <ProductQuantity>{`${item.quantity}x`}</ProductQuantity>

            <ProductPrice>
              {formatValue(item.price * item.quantity)}
            </ProductPrice>
          </TotalContainer>
        </ProductPriceContainer>
      </ProductTitleContainer>
      <ActionContainer>
        <ActionButton
          testID={`increment-${item.id}`}
          onPress={() => handleIncrement(item.id)}
        >
          <FeatherIcon name="plus" color="#E83F5B" size={16} />
        </ActionButton>
        <ActionButton
          testID={`decrement-${item.id}`}
          onPress={() => handleDecrement(item.id)}
        >
          <FeatherIcon name="minus" color="#E83F5B" size={16} />
        </ActionButton>
      </ActionContainer>
    </Container>
  );
};

export default ChartProductItem;
