import React from 'react';
import {StyleSheet, ViewStyle} from 'react-native';
import styled from '@emotion/native';

import {Typography} from './typography';

export interface IDetailsLineProps {
  label: string;
  children: string;
}

export const DetailsLine: React.FC<IDetailsLineProps> = ({label, children}) => {
  return (
    <DetailsLineContainer>
      <Typography fontSize={14} style={styles.label} weight="medium">
        {label}
      </Typography>

      <DetailsLineContent>{children}</DetailsLineContent>
    </DetailsLineContainer>
  );
};

interface IStyles {
  label: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  label: {
    marginRight: 16,
  },
});

const DetailsLineContainer = styled.View({
  marginVertical: 5,
  flexDirection: 'row',
});

const DetailsLineContent = styled(Typography)({
  flex: 1,
  textAlign: 'right',
});

DetailsLineContent.defaultProps = {
  fontSize: 14,
};
