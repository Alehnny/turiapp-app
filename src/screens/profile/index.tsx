import React, {FC} from 'react';
import {SafeAreaView, View, Image} from 'react-native';
import {Button, Divider, Layout, ListItem, Text} from '@ui-kitten/components';
import {TopNavigationCase} from '@components/top-navigation-case';
import styles from './styles';
import IconSVG from '@icons/index';
import useUserContext from '@hooks/useUserContext';

const Profile: FC = () => {
  const user = useUserContext();

  return (
    <SafeAreaView style={{flex: 1}}>
      <TopNavigationCase title="Perfil" alignment="center" />
      <Divider />
      <Layout style={styles.layout}>
        <View style={styles.imgAvatarContainer}>
          <Image
            style={styles.img}
            resizeMode="cover"
            source={require('../../imgs/avatar-female.png')}
          />
        </View>
        <View>
          <Text category="h4" style={styles.textCenter}>
            {user.state.fullName}
          </Text>
          <Text category="h6" style={styles.textCenter} appearance="hint">
            {user.state.userName}
          </Text>
          <Text category="h6" style={styles.textCenter} appearance="hint">
            {user.state.email}
          </Text>
        </View>
      </Layout>
      <Layout style={{flex: 1, paddingHorizontal: 10}}>
        <View>
          <Text category="h6">Tus detalles</Text>
        </View>
        <View>
          <ListItem
            title="Editar perfil"
            accessoryLeft={style => IconSVG(style, 'person')}
            accessoryRight={() => (
              <Button
                appearance="ghost"
                status="primary"
                accessoryLeft={style => IconSVG(style, 'chevron-right-outline')}
              />
            )}
          />
          <ListItem
            title="Cambiar contraseña"
            accessoryLeft={style => IconSVG(style, 'lock')}
            accessoryRight={() => (
              <Button
                appearance="ghost"
                status="primary"
                accessoryLeft={style => IconSVG(style, 'chevron-right-outline')}
              />
            )}
          />
        </View>
      </Layout>
    </SafeAreaView>
  );
};

export default Profile;
