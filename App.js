import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import home_screen from './config/home_screen'
import open from './config/open'

const AppNavigator = createStackNavigator({
  home_screen: {
    screen: home_screen,
  }, open: {
    screen: open,
  },
}, 
{
    initialRouteName: 'home_screen',
    
    defaultNavigationOptions: {
     header:null
  }});

export default createAppContainer(AppNavigator);