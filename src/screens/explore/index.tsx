import React, {FC, useState} from 'react';
import {FlatList, SafeAreaView, View} from 'react-native';
import {Divider, Icon, Layout, List, Text} from '@ui-kitten/components';
import {TopNavigationCase} from '@components/top-navigation-case';
import InputSearch from '@components/input-search';
import styles from './styles';
import CardImage from '@components/card-image';
import {tourisPlacesData} from '@data/tourist-places-data';

const Explore: FC = () => {
  const dataDep = tourisPlacesData.places
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 6);

  const dataSlider = tourisPlacesData.places
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 10);

  const itemSectionLarge = ({item}: any) => {
    return (
      <View style={styles.itemSectionLarge}>
        <CardImage {...item} />
      </View>
    );
  };

  const itemSection = ({item}: any) => {
    return (
      <View style={styles.itemSection}>
        <CardImage {...item} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigationCase title="Explorar" alignment="center" />
      <Divider />
      <Layout style={styles.layout} level="1">
        <Text category="h3" style={styles.title}>
          Es tiempo de explorar Guatemala
        </Text>
        <InputSearch />
        <View style={styles.row}>
          <Text category="h6">Departamentos</Text>
          <Icon style={styles.icon} fill="#3FA8FF" name="globe-outline" />
        </View>
        <FlatList
          style={styles.section}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataDep}
          renderItem={itemSectionLarge}
        />
        <View style={styles.row}>
          <Text category="h6">Lugares populares</Text>
          <Icon style={styles.icon} fill="#FFDD02" name="star-outline" />
        </View>
        <FlatList
          style={styles.section}
          horizontal
          showsHorizontalScrollIndicator={false}
          data={dataSlider}
          renderItem={itemSection}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default Explore;
