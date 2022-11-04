import React, {FC} from 'react';
import {StackActions, useNavigation} from '@react-navigation/native';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {RoutesScreen} from '@routes/index';
import IconSVG from '@icons/index';

const BottomNavigationCase: FC = () => {
  const navigation = useNavigation();

  const [selectedIndex, setSelectedIndex] = React.useState(0);

  const orderRoutes = [
    RoutesScreen.HOME,
    RoutesScreen.EXPLORE,
    RoutesScreen.FAVORITES,
    RoutesScreen.PROFILE,
  ];

  const handleSelectPage = (index: number) => {
    setSelectedIndex(index);

    const pushAction = StackActions.push(orderRoutes[index]);

    navigation.dispatch(pushAction);
  };

  return (
    <BottomNavigation
      selectedIndex={selectedIndex}
      onSelect={index => handleSelectPage(index)}>
      <BottomNavigationTab
        icon={styles => IconSVG(styles, 'home-outline')}
        title="Inicio"
      />
      <BottomNavigationTab
        icon={styles => IconSVG(styles, 'map-outline')}
        title="Explorar"
      />
      <BottomNavigationTab
        icon={styles => IconSVG(styles, 'heart-outline')}
        title="Favoritos"
      />
      <BottomNavigationTab
        icon={styles => IconSVG(styles, 'person-outline')}
        title="Perfil"
      />
    </BottomNavigation>
  );
};

export default BottomNavigationCase;
