import React from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';


export default TodayAlimentItem = ({aliment}) => {

    return (
        <View style={styles.alimentContainer}>
            <Icon style={styles.logoHome} name="user" size={30}/>
            <Text
                style={styles.alimentTitle}>{aliment.title}</Text>
            <TouchableOpacity style={styles.buttonCircleDelete}>
                <Text style={styles.buttonIconDelete}>X</Text>
            </TouchableOpacity>
        </View>
    )


};

const styles = StyleSheet.create({

    alimentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },

    logoHome: {
        color: '#219BFE',
        margin: 6,
    },

    alimentTitle: {
        margin: 13,
        color: '#219BFE',
        fontSize: 18,
    },
    buttonCircleDelete: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    buttonIconDelete: {
        color: '#219BFE',
        fontSize: 20,
        fontWeight: 'bold',
    },

});
