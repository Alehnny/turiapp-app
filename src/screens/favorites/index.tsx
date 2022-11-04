import React, {FC} from 'react';
import {SafeAreaView, View, ViewProps} from 'react-native';
import {
  Button,
  Divider,
  Layout,
  List,
  ListItem,
  Text,
  ViewPager,
} from '@ui-kitten/components';
import {TopNavigationCase} from '@components/top-navigation-case';
import styles from './styles';
import IconSVG from '@icons/index';
import ItemRecommended from '@components/item-recommended';
import ItemInfoPlace from '@components/item-info-place';
import {RenderProp} from '@ui-kitten/components/devsupport';
import { tourisPlacesData } from '@data/tourist-places-data';

const Favorites: FC = () => {
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const shouldLoadComponent = (index: number) => index === selectedIndex;

  const dataFavorites = tourisPlacesData.places
  .sort(() => (Math.random() > 0.5 ? 1 : -1))
  .slice(0, 10);

  const dataVisited = tourisPlacesData.places
  .sort(() => (Math.random() > 0.5 ? 1 : -1))
  .slice(0, 6);

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigationCase title="Favoritos" alignment="center" />
      <Divider />
      <Layout>
        <Text category="h4" style={styles.title}>
          Tus lugares favoritos
        </Text>
        <Text appearance="hint" style={styles.subTitle}>
          ¡Sigue explorando Guatemala!
        </Text>
        <View style={styles.containerButtoms}>
          <Button
            onPress={() => setSelectedIndex(0)}
            size="small"
            style={styles.tynyButtom}
            accessoryLeft={style => IconSVG(style, 'heart-outline')}
            appearance={selectedIndex === 0 ? 'filled' : 'outline'}
            status="danger">
            Favoritos
          </Button>
          <Button
            onPress={() => setSelectedIndex(1)}
            size="small"
            style={styles.tynyButtom}
            accessoryLeft={style => IconSVG(style, 'pin-outline')}
            appearance={selectedIndex === 1 ? 'filled' : 'outline'}
            status="info">
            Visitados
          </Button>
        </View>
      </Layout>
      <Layout style={styles.layout}>
        <ViewPager
          selectedIndex={selectedIndex}
          shouldLoadComponent={shouldLoadComponent}
          onSelect={index => setSelectedIndex(index)}>
          <Layout level="1" style={styles.tab}>
            <List
              showsVerticalScrollIndicator={false}
              data={dataFavorites}
              renderItem={({index, item}) => <ItemInfoPlace item={item} index={index} type='favorite' />}
            />
          </Layout>
          <Layout level="1" style={styles.tab}>
            <List
              showsVerticalScrollIndicator={false}
              data={dataVisited}
              renderItem={({index, item}) => <ItemInfoPlace item={item} index={index} type='visited' />}
            />
          </Layout>
        </ViewPager>
      </Layout>
    </SafeAreaView>
  );
};

export default Favorites;
