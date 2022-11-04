import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/home';
import Explore from '@screens/explore';
import {RoutesScreen} from '@routes/index';
import Favorites from '@screens/favorites';
import Profile from '@screens/profile';
import PlaceDetails from '@screens/place-details';
import Login from '@screens/login';
import BottomNavigationCase from '@components/bottom-navigation-case';
import useLoginContext from '@hooks/useLoginContext';

const {Navigator, Screen} = createNativeStackNavigator();

const AppNavigator = () => {
  const loginContext = useLoginContext();

  const isLogin = loginContext.state;

  return isLogin ? (
    <>
      <Navigator screenOptions={{headerShown: false}}>
        <Screen name={RoutesScreen.HOME} component={Home} />
        <Screen name={RoutesScreen.EXPLORE} component={Explore} />
        <Screen name={RoutesScreen.FAVORITES} component={Favorites} />
        <Screen name={RoutesScreen.PROFILE} component={Profile} />
        <Screen name={RoutesScreen.PLACE_DETAILS} component={PlaceDetails} />
      </Navigator>
      <BottomNavigationCase />
    </>
  ) : (
    <Login />
  );
};

export default AppNavigator;
