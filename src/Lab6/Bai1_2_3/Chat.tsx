import React from 'react';
import { Text, View } from 'react-native';
import { PlayfairDisplay } from '../../assets/fonts';
import COLORS from '../../assets/Colors';

const Chat = () => {
    return (
        <View style = {{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style = {{fontFamily: PlayfairDisplay.regular, color: COLORS.DARK_BLUE, fontSize: 20}}>Chat Screen</Text>
        </View>
    )
}

export default Chat;