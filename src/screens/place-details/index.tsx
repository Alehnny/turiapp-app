import React, {FC, useState} from 'react';
import {
  SafeAreaView,
  View,
  Image,
  ViewProps,
  ScrollView,
  FlatList,
} from 'react-native';
import {
  Avatar,
  Button,
  Divider,
  Icon,
  Layout,
  List,
  ListItem,
  Menu,
  MenuGroup,
  MenuItem,
  Text,
} from '@ui-kitten/components';
import {TopNavigationCase} from '@components/top-navigation-case';
import styles from './styles';
import IconSVG from '@icons/index';
import {IndexPath, RenderProp} from '@ui-kitten/components/devsupport';
import ItemGaleryImage from '@components/item-galery-image';

const PlaceDetails: FC = () => {
  const data = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baf',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63d',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72s',
      title: 'Third Item',
    },
  ];

  const titleRender = () => <Text category="s1">Titulo</Text>;

  const saveButton: RenderProp<ViewProps> = () => (
    <Button
      appearance="ghost"
      status="danger"
      accessoryLeft={style => IconSVG(style, 'heart')}
    />
  );

  const descriptionRender = () => (
    <View>
      <View style={styles.row}>
        <Text appearance="hint" category="c2">
          Ubicacion
        </Text>
      </View>

      <View style={styles.row}>
        <Icon style={styles.icon} fill="#FFDD02" name="star" />
        <Text appearance="hint" category="p2">
          4.5
        </Text>
      </View>
      <View style={styles.row}>
        <Button size="small" appearance='outline'>¿Lo has visitado?</Button>
      </View>
    </View>
  );

  const dd = {
    title: 'title',
    ubication: 'ddd',
    image:
      'https://upload.wikimedia.org/wikipedia/commons/8/85/Lago_de_Amatitl%C3%A1n_-_51367165519.jpg',
    id: 1,
  };

  const itemSectionLarge = () => {
    return (
      <View style={styles.itemSectionLarge}>
        <ItemGaleryImage url={dd.image} />
      </View>
    );
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigationCase title="" alignment="center" isShowBack />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Layout style={{flex: 0}}>
          <View style={styles.imageContainer}>
            <Image
              style={styles.image}
              resizeMode="cover"
              source={{
                uri: 'https://upload.wikimedia.org/wikipedia/commons/8/85/Lago_de_Amatitl%C3%A1n_-_51367165519.jpg',
              }}
            />
          </View>
          <ListItem
            title={titleRender}
            description={descriptionRender}
            accessoryRight={saveButton}
          />
        </Layout>
        <Divider />
        <Layout style={styles.section}>
          <View>
            <Text category="h6">Descripción</Text>
            <Text category="s2" appearance="hint">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.
            </Text>
          </View>
        </Layout>
        <Layout style={styles.section}>
          <View>
            <Text category="h6">Galeria</Text>
            <FlatList
              horizontal
              showsHorizontalScrollIndicator={false}
              data={data}
              renderItem={itemSectionLarge}
            />
          </View>
        </Layout>
        <Layout style={styles.section}>
          <Text category="h6" style={styles.moreInfoTitle}>
            Más información
          </Text>
          <Divider />
          <View style={styles.containerList}>
            <Text category="s1">Horarios</Text>
            <Text category="c2" appearance="hint" style={styles.listText}>
              - Más información
            </Text>
            <Text category="c2" appearance="hint" style={styles.listText}>
              - Más información
            </Text>
          </View>
          <View>
            <Text category="s1">Precios</Text>
            <Text category="c2" appearance="hint" style={styles.listText}>
              - Más información
            </Text>
            <Text category="c2" appearance="hint" style={styles.listText}>
              - Más información
            </Text>
          </View>
        </Layout>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlaceDetails;
