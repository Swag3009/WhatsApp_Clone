import React from 'react';
import { View, Text } from 'react-native';

export default function TestScreen1 (){
    return(
        <View style = {{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Text style = {{
                fontSize: 20,
            }}>TestScreen1</Text>
        </View>
    );
}