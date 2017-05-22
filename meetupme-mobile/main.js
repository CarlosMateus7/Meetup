import React, { Component } from 'react';
import Expo, { AppLoading } from 'expo';
import { Provider } from 'react-redux';
import EStyleSheet from 'react-native-extended-stylesheet';

import Root from './src/Root';

import Colors from './constants/Colors';
import { fontAssets } from './helpers';
import store from './src/redux/store';


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
    return (
      <Provider store = {store}>  
        <Root />
      </Provider>
    );
  }
}

Expo.registerRootComponent(meetupme);
