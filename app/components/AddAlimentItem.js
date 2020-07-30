import React from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';


export default AddAlimentItem = ({aliment, meal}) => {
    const navigation = useNavigation();
    return (
        <View style={styles.globalContainer}>
            <Image
                style={{width: 50, height: 50, borderRadius:50}}
                source={{uri: aliment.photo.thumb }}
            />
            <Text style={styles.titleAdd}>{aliment.food_name} </Text>
            <TouchableOpacity
                style={styles.buttonCircleAdd}
                onPress={() => navigation.navigate('Home',
                    {
                        food_name: aliment.food_name,
                        meal,
                        photo:aliment.photo
                    }
                )}
            >
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

    tinyLogo: {
        width: 50,
        height: 50,
    },

});
