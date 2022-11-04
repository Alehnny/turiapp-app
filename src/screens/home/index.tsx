import React, {FC} from 'react';
import {SafeAreaView} from 'react-native';
import {Divider, Layout, List, styled, Text} from '@ui-kitten/components';
import {TopNavigationCase} from '@components/top-navigation-case';
import ItemRecommended from '@components/item-recommended';
import styles from './styles';
import InputSearch from '@components/input-search';
import SliderCardImage from '@components/slider-card-image';
import {tourisPlacesData} from '@data/tourist-places-data';

const Home: FC = () => {
  const dataRecomended = tourisPlacesData.places
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 3);

  const dataSlider = tourisPlacesData.places
    .sort(() => (Math.random() > 0.5 ? 1 : -1))
    .slice(0, 6);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigationCase title="Inicio" alignment="center" />
      <Divider />
      <Layout style={styles.layout}>
        <Text category="h4" style={styles.title}>
          ¿A donde quieres ir?
        </Text>
        <Text appearance="hint" style={styles.subTitle}>
          ¡Explora los mejores lugares de Guatemala!
        </Text>
        <InputSearch />
        <SliderCardImage pages={dataSlider} />
        <Text category="s1" style={styles.subTitleRecommended}>
          Lugares recomendados
        </Text>
        <Divider />
        <List
          showsVerticalScrollIndicator={false}
          data={dataRecomended}
          renderItem={ItemRecommended}
        />
      </Layout>
    </SafeAreaView>
  );
};

export default Home;
