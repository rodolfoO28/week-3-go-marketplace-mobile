import styled from 'styled-components/native';

export const Container = styled.View`
  background: #fff;
  padding: 15px 10px;
  border-radius: 5px;
  margin: 5px;
  flex-direction: row;
`;

export const ProductImage = styled.Image`
  height: 92px;
  width: 92px;
`;

export const ProductTitleContainer = styled.View`
  font-size: 16px;
  margin-left: 5px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPriceContainer = styled.View`
  flex-direction: column;
`;

export const TotalContainer = styled.View`
  flex-direction: row;
  margin-top: 8px;
`;

export const ProductSinglePrice = styled.Text`
  font-size: 12px;
  color: #a0a0b3;
  margin-top: 8px;
`;

export const ProductPrice = styled.Text`
  font-weight: bold;
  margin-top: 5px;

  font-size: 16px;
  color: #e83f5b;
`;

export const ProductQuantity = styled.Text`
  font-weight: bold;
  margin-top: 5px;
  margin-right: 10px;

  font-size: 16px;
  color: #e83f5b;
`;

export const ActionContainer = styled.View`
  align-self: flex-end;
  align-items: center;
  justify-content: space-between;

  margin-left: auto;
`;

export const ActionButton = styled.TouchableOpacity`
  background: rgba(232, 63, 91, 0.1);
  border-radius: 5px;
  padding: 12px;
  margin-bottom: 5px;
`;
