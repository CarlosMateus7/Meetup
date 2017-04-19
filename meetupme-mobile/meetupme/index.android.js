import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  ActivityIndicator
} from 'react-native';

import { fetchMeetups } from './constants/api';

export default class meetupme extends Component {
static defaultProps = {
  fetchMeetups
}

state = {
  loading: false,
  meetups: []
}

async componentDiMount(){
  this.setState({ loading: true });
  const data = await this.props.fetchMeetups();
  setTimeout(() => this.setState({ loading: false, meetups: data.meetups }),2000);
}

  render() {
    if(this.state.loading){
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" />
        </View>
      )
    }
    return (
      <View style={styles.container}>
        <Text>Meetup</Text>
         {this.state.meetups.map((meetup,i) => (
           <Text key = {i}>{meetup.title}</Text>
         ))}   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  }
});

AppRegistry.registerComponent('meetupme', () => meetupme);
