import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { TabNavigator, TabBarBottom } from 'react-navigation';

import Colors from '../constants/Colors';

import HomeScreen from '../screens/HomeScreen';
import MapScreen from '../screens/MapScreen';
import ChatScreen from '../screens/ChatScreen';
import SettingsScreen from '../screens/SettingsScreen';

export default TabNavigator(
  {
    Home: {
      screen: HomeScreen,
    },
    Map: {
      screen: MapScreen,
    },
    Chat: {
      screen: ChatScreen,
    },
    Settings: {
      screen: SettingsScreen,
    },
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
            iconName =
              Platform.OS === 'ios'
                ? `ios-information-circle${focused ? '' : '-outline'}`
                : 'md-information-circle';
            break;
          case 'Map':
            iconName = Platform.OS === 'ios' ? `ios-map${focused ? '' : '-outline'}` : 'md-map';
            break;
          case 'Chat':
            iconName = Platform.OS === 'ios' ? `ios-chatboxes${focused ? '' : '-outline'}` : 'md-chatboxes';
            break;
          case 'Settings':
            iconName =
              Platform.OS === 'ios' ? `ios-options${focused ? '' : '-outline'}` : 'md-options';
        }
        return (
          <Ionicons
            name={iconName}
            size={28}
            style={{ marginBottom: -3 }}
            color={focused ? Colors.tabIconSelected : Colors.tabIconDefault}
          />
        );
      },
    }),
    tabBarComponent: TabBarBottom,
    tabBarPosition: 'bottom',
    animationEnabled: false,
    swipeEnabled: false,
  }
);
