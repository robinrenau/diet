import React, {useEffect, useState} from 'react';

import {
    View,
    StyleSheet,
    FlatList

} from 'react-native';
import AlimentItem from '../components/AlimentItem';
import {SearchBar} from 'react-native-elements';


export default AddAliment = () => {
    const [textInputValue, setTextInputValue] = useState('');
    const [aliments, setAliments] = useState([]);
    const getAliments = async () => {
        let response = await fetch(
            'https://trackapi.nutritionix.com/v2/search/instant/?query=sandwich', {
                method : 'GET',
                headers: {
                    'x-app-id' : '47ab5f38',
                    'x-app-key' : '0d3791cbe4d65eb19faa480b366986b5',
                }
            }
        );
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse) {
            setAliments(jsonResponse.common);
        }
    };

    useEffect(() => {
        getAliments()
    }, []);
    return (
        <View style={styles.backgroundAppli}>
            <View>
                <SearchBar
                    placeholder="Cherche un aliment ici"
                    onChangeText={setTextInputValue}
                    value={textInputValue}
                    lightTheme
                />
            </View>
            <View>
                <FlatList
                    data={aliments}
                    renderItem={({ item }) => <AlimentItem aliment={item} index={item.index}/>}
                    keyExtractor={item => 'key' + item.food_name}
                />
            </View>
        </View>
    )
};
const styles = StyleSheet.create({

    backgroundAppli: {
        backgroundColor: '#F0F8FD',
    },
});
