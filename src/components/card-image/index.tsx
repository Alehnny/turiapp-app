import {Icon, Text} from '@ui-kitten/components';
import React, {FC} from 'react';
import {View, ImageBackground} from 'react-native';
import {ICardImage} from './interfaces';
import styles from './styles';

const CardImage: FC<ICardImage> = ({title, ubication, image, id}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        source={{
          uri: image,
        }}>
        <View style={styles.background}>
          <Text appearance="alternative" category='p1'>{title}</Text>
          <View style={styles.row}>
            <Icon style={styles.icon} fill="#ffff" name="pin-outline" />
            <Text appearance="alternative" category='c2'>{ubication}</Text>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

export default CardImage;
