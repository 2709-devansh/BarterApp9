import React from 'react';
import { AppTabNavigator } from './AppTabNavigator';
import { createDrawerNavigator } from 'react-navigation-drawer';
import CustomSideBarMenu from './CustomSideBarMenu';
import ProfileSettingsScreen from '../Screens/ProfileSettingsScreen';
import MyBartersScreen from '../Screens/MyBartersScreen';
import NotificationsScreen from '../Screens/NotificationsScreen';

export const AppDrawerNavigator = createDrawerNavigator(
  { 
    Home: {
      screen: AppTabNavigator,
    },

    Settings: {
      screen: ProfileSettingsScreen,
    },

    MyBarters: {
      screen: MyBartersScreen,
    },

    Notifications:{
      screen:NotificationsScreen
    }
  },

  {
    contentComponent: CustomSideBarMenu,
  },

  {
    initialRouteName: 'Home',
  }
);
