import React, { Component } from 'react';
import Expo, { AppLoading } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors';
import { fontAssets } from './helpers';
import Root from './src/Root';

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
      //return <AppLoading />;
    }
    return <Root />;
  }
}

Expo.registerRootComponent(meetupme);
