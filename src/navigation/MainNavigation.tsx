// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TopTabNavigation from './TopTabNavigation';

function HomeScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>Home Screen</Text>
        </View>
);
}

const Stack = createNativeStackNavigator();

function MainNavigation() {
return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TopTabNavigation} />
        </Stack.Navigator>
    </NavigationContainer>
);
}

export default MainNavigation;