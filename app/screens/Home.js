import React, {useEffect, useState} from 'react';

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text, FlatList,

} from 'react-native';
import AddAliment from './AddAliment';

import TodayAlimentItem from '../components/TodayAlimentItem';


export default Home = ({navigation, route}) => {
    const renderItem = ({item}) => (
        <Item title={item.title}/>
    );
    const [meal, setMeal] = useState(null);
    const [foodList, setfoodList] = useState([]);

    useEffect(() => {
        if (route.params) {
            let newState;
            newState = [...foodList, {
                id: route.params.id,
                title: route.params.food_name,
            }];
            setfoodList(newState);
        }
    }, [route.params]);


    return (
        <>

            <SafeAreaView style={styles.backgroundAppli}>
                <View>
                    <View>
                        <Text style={styles.globalTitle}>Aujourd'hui</Text>
                    </View>
                    <View style={styles.globalContainer}>
                        <View style={styles.container}>
                            <Text style={styles.titleMeal}> Petit Déjeuner </Text>
                            <TouchableOpacity style={styles.buttonCircleAdd}
                                              onPress={() => navigation.navigate('AddAliment')}>
                                <Text style={styles.buttonIconAdd}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>Vous n'avez pas encore ajouté d'aliments pour ce repas</Text>
                        </View>
                    </View>
                    <View style={styles.globalContainer}>
                        <View style={styles.container}>
                            <Text style={styles.titleMeal}>Déjeuner </Text>
                            <TouchableOpacity style={styles.buttonCircleAdd}
                                              onPress={() => navigation.navigate('AddAliment')}>
                                <Text style={styles.buttonIconAdd}>+</Text>
                            </TouchableOpacity>

                        </View>
                        <View>
                            <FlatList
                                data={foodList}
                                renderItem={({ item }) => <TodayAlimentItem aliment={item} />}
                                keyExtractor={item => 'key' + item.food_name}
                            />

                        </View>
                    </View>
                    <View style={styles.globalContainer}>
                        <View style={styles.container}>
                            <Text style={styles.titleMeal}>Dîner</Text>
                            <TouchableOpacity style={styles.buttonCircleAdd}
                                              onPress={() => navigation.navigate('AddAliment')}>
                                <Text style={styles.buttonIconAdd}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>{route.params ? route.params.food_name : 'vous n\'avez pas encore ajouté d\'aliments pour ce repas'} </Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({

    backgroundAppli: {
        backgroundColor: '#F0F8FD',
    },


    globalTitle: {
        color: '#219BFE',
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
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

    globalContainer: {
        margin: 15,
        backgroundColor: '#FFFFFF',

    },

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#BDE0FE',
        padding: 10,

    },

    titleMeal: {
        fontSize: 20,
        fontWeight: '600',
        color: '#219BFE',

    },

    buttonIconAdd: {
        color: '#FFFFFF',
        fontSize: 30,

    },


});



