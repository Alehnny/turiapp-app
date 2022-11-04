import React, {FC} from 'react';
import {View, ImageBackground} from 'react-native';
import {IItemGaleryImage} from './interfaces';
import styles from './styles';


const ItemGaleryImage: FC<IItemGaleryImage> = ({url}) => {
  return (
    <View style={styles.card}>
      <ImageBackground
        resizeMode="cover"
        style={styles.imageBackground}
        source={{
          uri: url,
        }}
      />
    </View>
  );
};

export default ItemGaleryImage;
