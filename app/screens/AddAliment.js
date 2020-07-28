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
            'https://restcountries.eu/rest/v2/all'
        );
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        if (jsonResponse) {
            setAliments(jsonResponse);
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
                />
            </View>
            <View>
                <FlatList
                    data={aliments}
                    renderItem={({item}) => <AlimentItem content={item.content} id={item.id} />}
                    keyExtractor={item => 'key' + item.id}
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
