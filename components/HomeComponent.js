import React, { Component } from 'react';
import RenderGallery from './GalleryComponent';
import { StyleSheet, ScrollView, Linking, Text, View, Platform } from 'react-native';
import { Image, Tile, SocialIcon, Divider } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';

class Home extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Home'
    }

    render() {
        return (
            <Animatable.View animation='fadeInRightBig' duration={2000}>
            <ScrollView >
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
                    onPress={() => RenderGallery.js}
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
        );
    }
}
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 500,
        flex: 1,
    },
    tile: {
        borderBottomColor: 'white',
        borderWidth: 1,
        borderRadius: 75,
        alignSelf: 'center',
    },
    iconStack1: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'flex-end',
    },
    iconStack2: {
        alignSelf: 'flex-start'
    }
});

export default Home;