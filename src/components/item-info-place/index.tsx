import IconSVG from '@icons/index';
import {Button, Icon, Layout, ListItem, Text} from '@ui-kitten/components';
import {RenderProp} from '@ui-kitten/components/devsupport';
import React, {FC} from 'react';
import {Image, ImageProps, View, ViewProps} from 'react-native';
import {IItemInfoPlace} from './interfaces';
import styles from './styles';

const ItemInfoPlace: FC<IItemInfoPlace> = ({
  item: {title, ubication, rating, image},
  type,
}) => {
  const descriptionRender = () => (
    <View>
      {ubication && (
        <View style={styles.row}>
          <Text appearance="hint" category="c2">{ubication}</Text>
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

  const saveButton: RenderProp<ViewProps> = () => (
    <Button
      appearance="ghost"
      status="danger"
      accessoryLeft={style => IconSVG(style, 'heart')}
    />
  );

  const visitedButton: RenderProp<ViewProps> = () => (
    <Button
      appearance="ghost"
      status="info"
      accessoryLeft={style => IconSVG(style, 'pin-outline')}
    />
  );

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
      accessoryRight={type === 'favorite' ? saveButton : visitedButton}
    />
  );
};

export default ItemInfoPlace;
