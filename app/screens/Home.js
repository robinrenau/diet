import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import {
    SafeAreaView,
    StyleSheet,
    TouchableOpacity,
    View,
    FlatList,
    Text,
    ScrollView,
} from 'react-native';


const DATA = [
    {
        id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
        title: 'Jus d\'orange',
    },
    {
        id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Céréales',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29d72',
        title: 'Lait',
    },
];

const Item = ({title}) => (
    <View style={styles.alimentContainer}>
        <Icon style={styles.logoHome} name="user" size={30}/>
        <Text style={styles.alimentTitle}>{title}</Text>
        <TouchableOpacity style={styles.buttonCircleDelete}>
            <Text style={styles.buttonIconDelete}>X</Text>
        </TouchableOpacity>
    </View>
);


export default Home = ({navigation}) => {
    const renderItem = ({item}) => (
        <Item title={item.title}/>
    );
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
                                <FlatList
                                    data={DATA}
                                    renderItem={renderItem}
                                    keyExtractor={item => item.id}
                                />

                            </View>
                        </View>
                        <View style={styles.globalContainer}>
                            <View style={styles.container}>
                                <Text style={styles.titleMeal}>Déjeuner </Text>
                                <TouchableOpacity style={styles.buttonCircleAdd} onPress={() => navigation.navigate('AddAliment')}>
                                    <Text style={styles.buttonIconAdd}>+</Text>
                                </TouchableOpacity>

                            </View>
                            <View>
                                <Text>Vous n'avez pas encore ajouté d'aliments pour ce repas</Text>

                            </View>
                        </View>
                        <View style={styles.globalContainer}>
                            <View style={styles.container}>
                                <Text style={styles.titleMeal}>Dîner</Text>
                                <TouchableOpacity style={styles.buttonCircleAdd} onPress={() => navigation.navigate('AddAliment')}>
                                    <Text style={styles.buttonIconAdd}>+</Text>
                                </TouchableOpacity>

                            </View>
                            <View>

                                <Text>Vous n'avez pas encore ajouté d'aliments pour ce repas</Text>

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

    alimentTitle: {
        margin: 13,
        color: '#219BFE',
        fontSize: 18,
    },

    buttonCircleDelete: {
        alignItems: 'center',
        justifyContent: 'center',

    },
    logoHome :{
        color :"#219BFE",
        margin:6,
    },
    buttonIconDelete: {
        color: '#219BFE',
        fontSize: 20,
        fontWeight: "bold"
    },

    alimentContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
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


