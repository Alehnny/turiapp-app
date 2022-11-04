import IconSVG from '@icons/index';
import {Icon, Layout, ListItem, Text} from '@ui-kitten/components';
import React, {FC} from 'react';
import {Image, ImageProps, View} from 'react-native';
import {IItemRecommended} from './interfaces';
import styles from './styles';

const ItemRecommended: FC<IItemRecommended> = ({
  item: {title, ubication, rating, image},
}) => {
  const descriptionRender = () => (
    <View>
      {ubication && (
        <View style={styles.row}>
          <Icon style={styles.icon} fill="#3366FF" name="pin-outline" />
          <Text status="primary" category="p2">{ubication}</Text>
        </View>
      )}

      {rating && (
        <View style={styles.row}>
          <Icon style={styles.icon} fill="#FFDD02" name="star" />
          <Text appearance="hint" category="p2">
            {rating}
          </Text>
        </View>
      )}
    </View>
  );

  const titleRender = () => <Text category="s1">{title}</Text>;

  const imageRender = () => {
    return (
      <Image
        style={styles.tinyLogo}
        source={{
          uri: image,
        }}
      />
    );
  };

  return (
    <ListItem
      title={titleRender}
      description={descriptionRender}
      accessoryLeft={imageRender}
    />
  );
};

export default ItemRecommended;
