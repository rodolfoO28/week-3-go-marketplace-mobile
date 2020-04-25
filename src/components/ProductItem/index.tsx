import React, { useCallback } from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Product from '../../models/Product';

import { useCart } from '../../hooks/cart';

import formatValue from '../../utils/formatValue';

import {
  Container,
  ProductImage,
  ProductTitle,
  PriceContainer,
  ProductPrice,
  ProductButton,
} from './styles';

interface ProductItemProps {
  data: Product;
}

const ProductItem: React.FC<ProductItemProps> = ({ data: product }) => {
  const { addToCart } = useCart();

  const handleAddToCart = useCallback(
    async (item: Product): Promise<void> => {
      const { id, title, price, image_url } = item;

      await addToCart({
        id,
        title,
        price,
        image_url,
      });
    },
    [addToCart],
  );

  return (
    <Container>
      <ProductImage source={{ uri: product.image_url }} />
      <ProductTitle>{product.title}</ProductTitle>
      <PriceContainer>
        <ProductPrice>{formatValue(product.price)}</ProductPrice>
        <ProductButton
          testID={`add-to-cart-${product.id}`}
          onPress={() => handleAddToCart(product)}
        >
          <FeatherIcon size={20} name="plus" color="#C4C4C4" />
        </ProductButton>
      </PriceContainer>
    </Container>
  );
};

export default ProductItem;
