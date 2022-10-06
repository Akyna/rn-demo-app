import React from 'react';
import {StyleSheet, TextStyle} from 'react-native';
import styled from '@emotion/native';

import {Typography} from './typography';
import {ICartProps} from './cart';

export const CartQuantity: React.FC<ICartProps> = ({quantity, update}) => {
  return (
    <QuantityContainer>
      <React.Fragment>
        <QuantityButton
          onPress={() => update(quantity + 1)}
          underlayColor="#EDEBF2">
          <Typography color="#522973">+</Typography>
        </QuantityButton>

        <Typography style={styles.quantity}>{quantity}</Typography>

        <QuantityButton
          onPress={() => update(quantity + 1)}
          underlayColor="#EDEBF2">
          <Typography color="#522973">-</Typography>
        </QuantityButton>
      </React.Fragment>
    </QuantityContainer>
  );
};

interface IStyles {
  quantity: TextStyle;
}

const styles = StyleSheet.create<IStyles>({
  quantity: {
    textAlign: 'center',
    flex: 1,
  },
});

const QuantityButton = styled.TouchableHighlight({
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: 100,
  width: 40,
  height: 40,
});

const QuantityContainer = styled.TouchableHighlight({
  borderWidth: 1,
  borderColor: '#EDEBF2',
  marginRight: 10,
  flex: 4,
  paddingVertical: 0,
  paddingHorizontal: 5,
  borderRadius: 1000,
  maxHeight: 51,
  alignItems: 'center',
  flexDirection: 'row',
});
