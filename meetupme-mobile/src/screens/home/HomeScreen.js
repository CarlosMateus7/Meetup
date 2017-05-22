import React, { Component } from 'react';
import { View, Text } from 'react-native';
//import { FontAwaesome} from '@expo/vector-icons';
import { connect } from 'react-redux';
import { LoadingScreen } from '../../commons';
import { MyMeetupsList } from './components';
import Colors from '../../../constants/Colors';
import styles from './styles/HomeScreen';
import { fetchMyMeetups } from './actions';

@connect(
  state => ({
    myMeetups: state.home.myMeetups
  }),
  { fetchMyMeetups }
  )
class HomeScreen extends Component {


  /**static navigationOptions = {
    header: {
      style: { backgroundColor: Colors.redColor}
    }
     tabBar: {
       icon: ({tintColor}) => (
         <FontAwaesome
           name = "home"
           size = {25}
           color = {tintColor}
         />
       )
     }*
   }**/

  componentDiMount() {
    this.props.fetchMyMeetups();
  }

  render() {
    const {
      myMeetups: {
        isFetched,
        data,
        error
      }
    } = this.props;
    if (!isFetched) {
      return <LoadingScreen />;
    }else if (error.on){
      return(
        <View>
          <Text> {error.message}</Text>
        </View>
      );
    }
    return (
      <View style={styles.root}>
        <View style={styles.topContainer}>
          <Text>HomeScreen</Text>
        </View>
        <View style={styles.bottomContainer}>
          <MyMeetupsList meetups={data} />
        </View>
      </View>
    );
  }
}

export default HomeScreen;
