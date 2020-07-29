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
    const [foodListB, setfoodListB] = useState([]);
    const [foodListL, setfoodListL] = useState([]);
    const [foodListD, setfoodListD] = useState([]);

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
                            },
                        ];
                        setfoodListB(newState);
                        break;
                    case 'lunch':
                        newState = [...foodListL, {
                            id: route.params.id,
                            title: route.params.food_name,
                            meal: route.params.meal,
                        }];
                        setfoodListL(newState);
                        break;
                    case 'dinner':
                        newState = [...foodListD, {
                            id: route.params.id,
                            title: route.params.food_name,
                            meal: route.params.meal,
                        }];
                        setfoodListD(newState);
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
                <View>
                    <View>
                        <Text style={styles.globalTitle}>Aujourd'hui</Text>
                    </View>
                    <View style={styles.globalContainer}>
                        <View style={styles.container}>
                            <Text style={styles.titleMeal}> Petit Déjeuner </Text>
                            <TouchableOpacity style={styles.buttonCircleAdd}
                                              onPress={() => navigation.navigate('AddAliment', {meal: 'breakfast'})}>
                                <Text style={styles.buttonIconAdd}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            {foodListB.length > 0 ? <FlatList
                                data={foodListB}
                                renderItem={({item}) => <TodayAlimentItem aliment={item}/>}
                                keyExtractor={item => 'key' + Math.random(item.food_name)}
                            /> : <Text> Pas d'aliment selectionné</Text>}

                        </View>
                    </View>
                    <View style={styles.globalContainer}>
                        <View style={styles.container}>
                            <Text style={styles.titleMeal}>Déjeuner </Text>
                            <TouchableOpacity style={styles.buttonCircleAdd}
                                              onPress={() => navigation.navigate('AddAliment', {meal: 'lunch'})}>
                                <Text style={styles.buttonIconAdd}>+</Text>
                            </TouchableOpacity>

                        </View>
                        <View>{foodListL.length > 0 ? <FlatList
                            data={foodListL}
                            renderItem={({item}) => <TodayAlimentItem aliment={item}/>}
                            keyExtractor={item => 'key' + Math.random(item.food_name)}
                        /> : <Text> Pas d'aliment selectionné</Text>}


                        </View>
                    </View>
                    <View style={styles.globalContainer}>
                        <View style={styles.container}>
                            <Text style={styles.titleMeal}>Dîner</Text>
                            <TouchableOpacity style={styles.buttonCircleAdd}
                                              onPress={() => navigation.navigate('AddAliment', {meal: 'dinner'})}>
                                <Text style={styles.buttonIconAdd}>+</Text>
                            </TouchableOpacity>
                        </View>
                        <View>{foodListD.length > 0 ? <FlatList
                            data={foodListD}
                            renderItem={({item}) => <TodayAlimentItem aliment={item}/>}
                            keyExtractor={item => 'key' + Math.random(item.food_name)}
                        /> : <Text> Pas d'aliment selectionné</Text>}

                        </View>
                    </View>
                </View>
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

    buttonCircleAdd: {

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
        paddingBottom: 2,
    },


});



