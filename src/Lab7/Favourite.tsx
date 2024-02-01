import React from 'react';
import { Text, View } from 'react-native';
import COLORS from '../assets/Colors';

const Favourite = () => {
    return (
        <View style={{ flex: 1, justifyContent: 'center' , alignItems: 'center'}}>
            <Text style={{ color: COLORS.DARK_BLUE, fontSize: 18, fontWeight: 'bold' }}>Favourite Screen</Text>
        </View>
    )
}

export default Favourite;