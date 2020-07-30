import React from 'react';
import {
    View,
    Text,
    StyleSheet, TouchableOpacity, Image,
} from 'react-native';
import {useNavigation} from '@react-navigation/core';
import Icon from 'react-native-vector-icons/Ionicons';


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

                onPress={() => navigation.navigate('Home',
                    {
                        food_name: aliment.food_name,
                        meal,
                        photo:aliment.photo
                    }
                )}
            >
                <Icon
                    name={'add-circle'}
                    color="#219BFE"
                    size={35}
                />
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


    tinyLogo: {
        width: 50,
        height: 50,
    },

});
