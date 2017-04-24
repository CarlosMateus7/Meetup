import Colors from './constants/Colors';
import { HomeScreen } from './src/screens';
import React, { Component } from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import { cashedFonts } from './helpers';

import {
  AppRegistry
} from 'react-native';

EStyleSheet.build(Colors);

class meetupme extends React.Component {
  state = {
    fontLoaded: false
  }

  componentDiMount(){
    this._loadAssetsAsync();
  }

  async _loadAssetsAsync(){
    const fontAssets = cashedFonts([
      {
        montserrat: require('./assets/fonts/MontSerrat-Regular.ttf')
      },
      {
        montserrat: require('./assets/fonts/MontSerrat-Bold.ttf')
      },
      {
        montserrat: require('./assets/fonts/MontSerrat-Light.ttf')
      },
      {
        montserrat: require('./assets/fonts/MontSerrat-Medium.ttf')
      }
    ]);

    await Promise.all(fontAssets);

    this.setState ({ fontLoaded: true});
  }
  render() {
    if (!this.state.fontLoaded) {
      return <Component.AppLoading />
    }
    return <HomeScreen />;
  }
}

AppRegistry.registerComponent('meetupme', () => meetupme);
