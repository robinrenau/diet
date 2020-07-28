import React from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity,
} from 'react-native';

export default CountryItem = ({aliment}) => {
    return (
        <View style={styles.globalContainer}>
            <Text>nom de l'aliment rechercher</Text>
            <TouchableOpacity style={styles.buttonCircleAdd}>
                <Text style={styles.buttonIconAdd}>+</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

    globalContainer: {
        margin: 15,
        backgroundColor: '#FFFFFF',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,

    },
    buttonCircleAdd: {
        borderColor: 'rgba(0,0,0,0.2)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: '#219BFE',
        borderRadius: 50,
    },

    buttonIconAdd: {
        color: '#FFFFFF',
        fontSize: 30,

    },

});
