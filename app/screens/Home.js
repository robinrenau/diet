import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-community/async-storage';
import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    Text, FlatList, ScrollView,

} from 'react-native';
import AddAliment from './AddAliment';

import TodayAlimentItem from '../components/TodayAlimentItem';
import Icon from 'react-native-vector-icons/Ionicons';


export default Home = ({navigation, route}) => {
    const [foodListB, setfoodListB] = useState([]);
    const [foodListL, setfoodListL] = useState([]);
    const [foodListD, setfoodListD] = useState([]);

    const restoreDataFromAsyncStorage = async () => {
        try {
            const localStorageListD = await AsyncStorage.getItem('dinner');
            return localStorageListD != null ? setfoodListD(JSON.parse(localStorageListD)) : null;
        } catch (error) {
        }
    };
    const restoreDataFromAsyncStorage2 = async () => {
        try {
            const localStorageListL = await AsyncStorage.getItem('lunch');
            return localStorageListL != null ? setfoodListL(JSON.parse(localStorageListL)) : null;
        } catch (error) {

        }
    };
    const restoreDataFromAsyncStorage3 = async () => {
        try {
            const localStorageListB = await AsyncStorage.getItem('breakfast');
            return localStorageListB != null ? setfoodListB(JSON.parse(localStorageListB)) : null;
        } catch (error) {
        }
    };

    useEffect(() => {
        restoreDataFromAsyncStorage();
        restoreDataFromAsyncStorage2();
        restoreDataFromAsyncStorage3();
    }, []);

    useEffect(() => {
            if (route.params) {
                let newState;

                switch (route.params.meal) {
                    case 'breakfast':
                        newState = [...foodListB,
                            {
                                id: route.params.id,
                                title: route.params.food_name,
                                meal: route.params.meal,
                                photo: route.params.photo.thumb,
                            },
                        ];
                        setfoodListB(newState);
                        AsyncStorage.setItem('breakfast', JSON.stringify(newState));
                        break;

                    case 'lunch':
                        newState = [...foodListL, {
                            id: route.params.id,
                            title: route.params.food_name,
                            meal: route.params.meal,
                            photo: route.params.photo.thumb,
                        }];
                        setfoodListL(newState);
                        AsyncStorage.setItem('lunch', JSON.stringify(newState));
                        break;
                    case 'dinner':
                        newState = [...foodListD, {
                            id: route.params.id,
                            title: route.params.food_name,
                            meal: route.params.meal,
                            photo: route.params.photo.thumb,
                        }];
                        setfoodListD(newState);
                        AsyncStorage.setItem('dinner', JSON.stringify(newState));
                        break;
                    default:
                        break;

                }
            }

        }, [route.params],
    );

    return (

        <>
            <SafeAreaView>
                <ScrollView>
                        <View>
                            <Text style={styles.globalTitle}>Aujourd'hui</Text>
                        </View>
                        <View style={styles.globalContainer}>
                            <View style={styles.container}>
                                <Text style={styles.titleMeal}> Petit Déjeuner </Text>
                                <TouchableOpacity
                                                  onPress={() => navigation.navigate('AddAliment', {meal: 'breakfast'})}>
                                    <Icon
                                        name={'add-circle'}
                                        color="#219BFE"
                                        size={35}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>
                                {foodListB.length > 0 ? <FlatList
                                    data={foodListB}
                                    renderItem={({item}) => <TodayAlimentItem aliment={item}/>}
                                    keyExtractor={item => 'key' + Math.random(item.food_name)}
                                /> : <Text style={styles.alimentTitle}> Vous n'avez pas ajouté d'aliments pour ce repas</Text>}

                            </View>
                        </View>
                        <View style={styles.globalContainer}>
                            <View style={styles.container}>
                                <Text style={styles.titleMeal}>Déjeuner </Text>
                                <TouchableOpacity
                                                  onPress={() => navigation.navigate('AddAliment', {meal: 'lunch'})}>
                                    <Icon
                                        name={'add-circle'}
                                        color="#219BFE"
                                        size={35}
                                    />
                                </TouchableOpacity>

                            </View>
                            <View>{foodListL.length > 0 ? <FlatList
                                data={foodListL}
                                renderItem={({item}) => <TodayAlimentItem aliment={item} />}
                                keyExtractor={item => 'key' + Math.random(item.food_name)}
                            /> : <Text style={styles.alimentTitle}> Vous n'avez pas ajouté d'aliments pour ce repas</Text>}
                            </View>
                        </View>
                        <View style={styles.globalContainer}>
                            <View style={styles.container}>
                                <Text style={styles.titleMeal}>Dîner</Text>
                                <TouchableOpacity
                                                  onPress={() => navigation.navigate('AddAliment', {meal: 'dinner'})}>
                                    <Icon
                                        name={'add-circle'}
                                        color="#219BFE"
                                        size={35}
                                    />
                                </TouchableOpacity>
                            </View>
                            <View>{foodListD.length > 0 ? <FlatList
                                data={foodListD}
                                renderItem={({item}) => <TodayAlimentItem aliment={item}/>}
                                keyExtractor={item => 'key' + Math.random(item.food_name)}
                            /> : <Text style={styles.alimentTitle}> Vous n'avez pas ajouté d'aliments pour ce repas</Text>}

                            </View>
                        </View>
                        <View style={styles.globalContainer}>
                            <View style={styles.container}>
                                <Text style={styles.titleMeal}> Résumé </Text>
                            </View>
                        </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

const styles = StyleSheet.create({


    globalTitle: {
        color: '#219BFE',
        fontSize: 30,
        textAlign: 'center',
        margin: 20,
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
    alimentTitle: {
        margin: 13,
        color: '#219BFE',
        fontSize: 14,
    },
    titleMeal: {
        fontSize: 20,
        fontWeight: '600',
        color: '#219BFE',

    },


});



