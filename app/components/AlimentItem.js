import React from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, Image,
} from 'react-native';

export default AlimentItem = ({aliment, photo}) => {
    return (
        <View style={styles.globalContainer}>
            <Text style={styles.titleAdd}>{aliment.food_name} </Text>
            <TouchableOpacity style={styles.buttonCircleAdd}>
                <Text style={styles.buttonIconAdd}>+</Text>
            </TouchableOpacity>
        </View>
    )
};

const styles = StyleSheet.create({

    globalContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,

    },

    titleAdd : {
        margin: 13,
        color: '#219BFE',
        fontSize: 18,
    },
    buttonCircleAdd: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 35,
        height: 35,
        backgroundColor: '#219BFE',
        borderRadius: 50,
        marginTop : 8

    },

    buttonIconAdd: {
        color: '#FFFFFF',
        fontSize: 30,


    },

});
