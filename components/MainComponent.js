import React, { Component } from 'react';
import Home from './HomeComponent';
import { View } from 'react-native';
import { createStackNavigator } from 'react-navigation';

const GalleryNavigator = createStackNavigator(
    {
        Gallery: { screen: Gallery },
        CampsiteInfo: { screen: CampsiteInfo }
    }, 
    {
        initialRouteName: 'Gallery',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#5637DD'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
                color: '#fff'
            }
        }
    }
);

class Main extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <View>
                <GalleryNavigator />
            </View>
        );
    }
}


export default Main;