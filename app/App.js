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
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="AddAliment" component={AddAlimentScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
};
