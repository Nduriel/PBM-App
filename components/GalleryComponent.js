import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import { Tile, ScrollView } from 'react-native-elements'



class RenderGallery extends Component {
    constructor(props) {
        super(props);
    }

    static navigationOptions = {
        title: 'Gallery'
    }

    render() {
        return (
            <ScrollView>
            <Tile
                imageSrc={require('./images/miaPic7.jpg')}
                title='Gallery'
                style={styles.tile}
                featured
            />
            <Tile
                imageSrc={require('./images/miaPic5.jpg')}
                style={styles.tile}
                title='Reservations'
                featured
            />
            <Tile
                imageSrc={require('./images/miaPic3.jpg')}
                style={styles.tile}
                title='About Mia'
                featured
            />
            </ScrollView>
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
        textAlign: 'center',
        flexDirection: 'column',
        justifyContent: 'space-around',
        borderBottomColor: 'green',
        alignSelf: 'center',
    },
    iconStack1: {
        alignSelf: 'flex-end',
    },
    iconStack2: {
        alignSelf: 'flex-start'
    }
});

export default RenderGallery;