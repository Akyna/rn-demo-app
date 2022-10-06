import React, {memo} from 'react';
import {
  FlexStyle,
  ImageStyle,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import styled from '@emotion/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

import {getImage} from '../../../utils/image';
import {Typography} from '../../../components/typography';
import {RootStackParamList} from '../../../stack';
import {IListItem} from '../index';
import {Avatar} from '../../../components/avatar';

const THUMBNAIL_SIZE = 600;

export interface IListItemProps {
  item: IListItem;
}

const ListItem: React.FC<IListItemProps> = ({item}) => {
  const nav =
    useNavigation<
      NativeStackNavigationProp<RootStackParamList, 'ListScreen'>
    >();

  return (
    <ListItemContainer onPress={() => nav.navigate('ItemScreen', item)}>
      <Avatar
        style={styles.image}
        source={{uri: getImage(THUMBNAIL_SIZE, item.id)}}
      />

      <View style={styles.flex}>
        <Typography weight="medium">{item.name}</Typography>

        {item.salePrice ? (
          <Typography>
            <Typography style={styles.discounted}>SAR {item.price}</Typography>
            <Typography color="#DA2121">
              {`   SAR ${item.salePrice}`}
            </Typography>
          </Typography>
        ) : (
          <Typography>SAR {item.price}</Typography>
        )}

        <Typography fontSize={14} color="#545454">
          Brand: {item.name}
        </Typography>
      </View>
    </ListItemContainer>
  );
};

const ListItemContainer = styled.TouchableOpacity({
  paddingTop: 10,
  paddingBottom: 10,
  paddingHorizontal: 25,
  borderBottomColor: 'rgba(0,0, 0, 0.05)',
  borderBottomWidth: 1,
  flexDirection: 'row',
});

interface IStyles {
  flex: FlexStyle;
  image: ImageStyle;
  discounted: TextStyle;
  sale: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  flex: {
    flex: 1,
  },
  image: {
    marginTop: 8,
    marginRight: 16,
  },
  discounted: {
    textDecorationLine: 'line-through',
  },
  sale: {
    color: '#DA2121',
  },
});

export default memo(ListItem);
