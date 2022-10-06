import React, {Dispatch, SetStateAction} from 'react';
import {Alert} from 'react-native';
import styled from '@emotion/native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Container} from './container';
import {CartQuantity} from './cart-quantity';
import {Typography} from './typography';

export interface ICartProps {
  quantity: number;
  update: Dispatch<SetStateAction<number>>;
}

export const Cart: React.FC<ICartProps> = ({quantity, update}) => {
  const insets = useSafeAreaInsets();

  return (
    <CartContainer style={{paddingBottom: Math.max(insets.bottom, 20)}}>
      <BuyButton
        onPress={() => Alert.alert('', 'WiP button')}
        underlayColor="white">
        <Typography color="white">Buy Now</Typography>
      </BuyButton>

      <CartQuantity quantity={quantity} update={update} />
    </CartContainer>
  );
};

const CartContainer = styled(Container)({
  backgroundColor: 'white',
  flexDirection: 'row-reverse',
  borderTopLeftRadius: 16,
  paddingTop: 16,
  borderTopRightRadius: 16,
});

const BuyButton = styled.TouchableHighlight({
  backgroundColor: '#73548F',
  paddingVertical: 12,
  paddingHorizontal: 24,
  borderRadius: 1000,
  maxHeight: 51,
  flex: 2,
  alignItems: 'center',
});
