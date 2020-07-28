import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from './screens/Home';
import AddAlimentScreen from './screens/AddAliment';

const Stack = createStackNavigator();

export default App = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Home" options={{ title: "Aujourd'hui" }} component={HomeScreen} />
                <Stack.Screen name="AddAliment" options={{ title: "Ajouter un aliment" }} component={AddAlimentScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
