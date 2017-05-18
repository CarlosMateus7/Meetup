import React, { Component } from 'react';
import Expo, { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { HomeScreen } from './src/screens';
import { fontAssets } from './helpers';

EStyleSheet.build(Colors);

class meetupme extends React.Component {
  state = {
    fontLoaded: false
  }

  componentDiMount(){
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync(){
    await Promise.all(fontAssets);

    this.setState ({ fontLoaded: true});
  }

  render() {
    if (!this.state.fontLoaded) {
      return <Components.AppLoading />;
    }
    return <HomeScreen />;
  }
}

Expo.registerRootComponent(meetupme);
