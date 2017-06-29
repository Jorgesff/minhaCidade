/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import {HomeNavigator} from './Src/Pages/Home';

const minhaCidade = StackNavigator({
  Main: { screen: HomeNavigator },
});


AppRegistry.registerComponent('minhaCidade', () => minhaCidade);
