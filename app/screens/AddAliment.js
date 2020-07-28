import React, {useEffect, useState} from 'react';

import {
    View,
    StyleSheet,
    FlatList, TextInput, Button,

} from 'react-native';
import AlimentItem from '../components/AlimentItem';




export default AddAliment = () => {
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
        <View style={styles.backgroundAppli}>
            <View style={styles.containerSearch} >

                <TextInput
                    style={{ height: 40, width:330, borderColor: 'gray', borderWidth: 1 }}
                    onChangeText={text => setTextInputValue(text)}
                    value={textInputValue}
                />
                <Button

                    onPress={() => getAliments()}
                    title="🔎"
                    color="#F0F8FD"
                />
            </View>
            <View>
                <FlatList
                    data={aliments}
                    renderItem={({ item }) => <AlimentItem aliment={item} />}
                    keyExtractor={item => 'key' + item.food_name}
                />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({


    containerSearch :{
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    }
});
