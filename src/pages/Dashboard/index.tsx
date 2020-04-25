import React, { useState, useEffect } from 'react';
import { View } from 'react-native';

import Product from '../../models/Product';

import api from '../../services/api';

import FloatingCart from '../../components/FloatingCart';
import ProductItem from '../../components/ProductItem';

import { Container, ProductContainer, ProductList } from './styles';

const Dashboard: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const response = await api.get<Product[]>('products');

      setProducts(response.data);
    }

    loadProducts();
  }, []);

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
          renderItem={({ item }) => <ProductItem key={item.id} data={item} />}
        />
      </ProductContainer>
      <FloatingCart />
    </Container>
  );
};

export default Dashboard;
