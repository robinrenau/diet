import React from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";


export default TodayAlimentItem = ({aliment}) => {

    return (
        <View style={styles.alimentContainer}>
            <Image
                style={{width: 50, height: 50, borderRadius:50}}
                source={{uri: aliment.photo }}
            />
            <Text
                style={styles.alimentTitle}>{aliment.title}</Text>
            <TouchableOpacity style={styles.buttonCircleDelete}

            >
                <Icon
                    name={'close-circle-outline'}
                    color="#219BFE"
                    size={25}
                />
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


});
