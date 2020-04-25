import React, {
  createContext,
  useState,
  useCallback,
  useContext,
  useEffect,
} from 'react';

import AsyncStorage from '@react-native-community/async-storage';

export interface Product {
  id: string;
  title: string;
  image_url: string;
  price: number;
  quantity: number;
}

interface CartContext {
  products: Product[];
  addToCart(item: Omit<Product, 'quantity'>): void;
  increment(id: string): void;
  decrement(id: string): void;
}

const CartContext = createContext<CartContext | null>(null);

const CartProvider: React.FC = ({ children }) => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    async function loadProducts(): Promise<void> {
      const data = await AsyncStorage.getItem('@goMarketplace:Chart');

      if (!data) {
        setProducts([]);
        return;
      }

      setProducts(JSON.parse(data));
    }

    loadProducts();
  }, []);

  const addToCart = useCallback(
    async (product: Product) => {
      const items = [...products];

      if (product) {
        const productIndex = items.findIndex(p => p.id === product.id);
        if (productIndex === -1) {
          items.push({ ...product, quantity: 1 });
        } else {
          items[productIndex].quantity += 1;
        }

        setProducts(items);
      }

      await AsyncStorage.setItem(
        '@goMarketplace:Chart',
        JSON.stringify(products),
      );
    },
    [products],
  );

  const increment = useCallback(
    async id => {
      const items = [...products];

      const productIndex = items.findIndex(product => product.id === id);
      if (productIndex !== -1) {
        const product = items[productIndex];
        product.quantity += 1;

        setProducts(items);
      }

      await AsyncStorage.setItem('@goMarketplace:Chart', JSON.stringify(items));
    },
    [products],
  );

  const decrement = useCallback(
    async id => {
      const items = [...products];

      const productIndex = items.findIndex(product => product.id === id);
      if (productIndex !== -1) {
        const product = items[productIndex];
        product.quantity -= 1;

        if (product.quantity <= 0) {
          items.splice(productIndex, 1);
        }

        setProducts(items);
      }

      await AsyncStorage.setItem('@goMarketplace:Chart', JSON.stringify(items));
    },
    [products],
  );

  const value = React.useMemo(
    () => ({ addToCart, increment, decrement, products }),
    [products, addToCart, increment, decrement],
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

function useCart(): CartContext {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error(`useCart must be used within a CartProvider`);
  }

  return context;
}

export { CartProvider, useCart };
