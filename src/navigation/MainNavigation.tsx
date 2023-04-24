import * as React from 'react';
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Colors from './../constants/Colors';
import TopTabNavigation from './TopTabNavigation';
import { Ionicons , MaterialCommunityIcons } from '@expo/vector-icons'; 


const Stack = createNativeStackNavigator();

export default function MainNavigation() {
    return (
        <NavigationContainer>
            <RootNavigator/>
        </NavigationContainer>
    );
}

function RootNavigator() {
    return (
        <Stack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: Colors.light.tint,
            },
            headerTitleAlign: 'left',
            headerTintColor: Colors.light.header,
            headerTitleStyle: {
                fontWeight: '500',
                fontSize: 21
            }
        }}>
            <Stack.Screen 
                name="Home" 
                component={TopTabNavigation} 
                options={{
                    title: "WhatsApp",
                    headerRight: () => (
                        <View style = {styles.headerIconContainer}>
                            <Ionicons name="md-search" size={22} color="white" />
                            <MaterialCommunityIcons name="dots-vertical" size={24} color="white" />
                        </View>
                    )
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    headerIconContainer: {
        flexDirection: 'row', 
        width: 65, 
        justifyContent: 'space-between',
        marginRight: 0
    }
})

