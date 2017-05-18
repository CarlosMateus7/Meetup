import React, {Component} from 'react';
import { View, Text} from 'react-native';
import Colors from '../../../constants/Colors';

class NotificationsScreen extends Component {
    render(){
        return (
            <View style = {{ flex: 1}}>
                <Text>Notifications</Text>
            </View>
        );
    }
}

export default NotificationsScreen;