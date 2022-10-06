import React from 'react';
import {FlatList, ListRenderItem, StyleSheet, ViewStyle} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

import LIST_DATA from '../../utils/fake-data';
import ListItem from './components/item';
import {RootStackParamList} from '../../stack';

export interface IListItem {
  id: string;
  name: string;
  description: string;
  price: string;
  salePrice: any;
  brand: string;
}

const ListScreen: React.FC<
  NativeStackScreenProps<RootStackParamList, 'ListScreen'>
> = () => {
  const renderItem: ListRenderItem<IListItem> = ({item}) => (
    <ListItem item={item} />
  );

  return (
    <SafeAreaView edges={['bottom']}>
      <FlatList
        contentContainerStyle={styles.container}
        data={LIST_DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

interface IStyles {
  container: ViewStyle;
}

const styles = StyleSheet.create<IStyles>({
  container: {
    paddingHorizontal: 16,
  },
});

export default ListScreen;
