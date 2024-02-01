import React from 'react';
import { Text, View } from 'react-native';
import COLORS from '../assets/Colors';

const Direct = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
            <Text style={{ color: COLORS.DARK_BLUE, fontSize: 18, fontWeight: 'bold' }}>Direct Screen</Text>
        </View>
    )
}

export default Direct;