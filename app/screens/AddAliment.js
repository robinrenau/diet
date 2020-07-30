import React, {useEffect, useState} from 'react';

import {
    View,
    StyleSheet,
    FlatList, TouchableOpacity, Text,

} from 'react-native';
import AddAlimentItem from '../components/AddAlimentItem';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome';
import { Fumi } from 'react-native-textinput-effects';





export default AddAliment = ({route}) => {
    const [textInputValue, setTextInputValue] = React.useState('');
    const [aliments, setAliments] = useState([]);
    const getAliments = async () => {
        let response = await fetch(
            'https://trackapi.nutritionix.com/v2/search/instant/?query='+textInputValue, {
                method : 'GET',
                headers: {
                    'x-app-id' : '47ab5f38',
                    'x-app-key' : '0d3791cbe4d65eb19faa480b366986b5',
                }
            }
        );


        let jsonResponse = await response.json();


        if (jsonResponse) {
            setAliments(jsonResponse.common);
        }
    };

    useEffect(() => {
        getAliments()
    }, []);


    return (
        <View >
            <View style={styles.containerSearch} >
                <Fumi style={styles.inputSty}
                    label={'Cherche un aliment'}
                    iconClass={FontAwesomeIcon}
                    iconName={'cutlery'}
                    iconColor={'#219BFE'}
                    iconSize={20}
                    iconWidth={40}
                    inputPadding={16}
                    value={textInputValue}
                    onChangeText={text => setTextInputValue(text)}

                />
                <TouchableOpacity
                    onPress={() => getAliments()}
                >
                    <Text style={styles.loopSty}>🔎</Text>
                </TouchableOpacity>
            </View>
            <View>
                <FlatList
                    data={aliments}
                    renderItem={({ item }) => <AddAlimentItem aliment={item} meal={route.params.meal} />}
                    keyExtractor={item => 'key' + Math.random(item.food_name)}
                />
            </View>
        </View>
    )

};

const styles = StyleSheet.create({
    loopSty:{

        fontSize:25,
        marginTop:10

    },
    inputSty:{
        width:330
    },
    containerSearch :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    }
});
