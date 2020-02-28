import React, { Component } from 'react';
import Home from './HomeComponent';
import { View, ScrollView, StyleSheet } from 'react-native';
import { createStackNavigator } from 'react-navigation';
import { Image, Tile, SocialIcon, Divider } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import SafeAreaView from 'react-native-safe-area-view';

const HomeNavigator = createStackNavigator(
    {
        Home: { screen: Home },
        Gallery: { screen: Gallery }
    }, 
    {
        initialRouteName: 'Home',
        navigationOptions: {
            headerStyle: {
                backgroundColor: 'black'
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

    render() {
        return (
            <React.Fragment>
             <Animatable.View animation='fadeInRightBig' duration={2000}>
             <ScrollView >
             <View>
                <HomeNavigator />
            </View>
                 <Image
                     source={require('./images/pbmimg1.jpg')}
                     style={styles.container}
                     resizeMode='center'>
                     <SocialIcon 
                         type='instagram'
                         style={styles.iconStack1}
                         onPress={() => Linking.openURL('http://instagram.com')}
                     />
                     <SocialIcon
                         style={styles.iconStack1}
                         type='facebook'
                         onPress={() => Linking.openURL('http://facebook.com')}
                     />
                     <Divider
                         style={{ backgroundColor: 'black', height: 3 }} />
                 </Image>
                 <Tile
                     imageSrc={require('./images/miaPic2.jpg')}
                     title='Gallery'
                     style={styles.tile}
                     featured
                     onPress={() => <Gal/>}
                 />
                 <Tile
                     imageSrc={require('./images/miaPic6.jpg')}
                     style={styles.tile}
                     title='Reservations'
                     featured
                 />
                 <Tile
                     imageSrc={require('./images/miaPic2.jpg')}
                     style={styles.tile}
                     title='About Mia'
                     featured
                 />
             </ScrollView>
         </Animatable.View>
         </React.Fragment>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 550,
        flex: 1,
        paddingTop: 2
    },
    tile: {
        borderBottomColor: 'white',
        borderWidth: 1,
        borderRadius: 75,
        alignSelf: 'center',
    },
    iconStack1: {
        flex: 0,
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    iconStack2: {
        alignSelf: 'flex-start'
    }
});


export default Main;