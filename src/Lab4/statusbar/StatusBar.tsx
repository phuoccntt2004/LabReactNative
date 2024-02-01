import React, { useState } from 'react';
import { StatusBar, StatusBarStyle } from 'react-native';
import { GestureHandlerRootView, RefreshControl, ScrollView } from 'react-native-gesture-handler';

const StatusBar_Lab4 = () => {
    const [barStyle, setBar] = useState<StatusBarStyle>('light-content');
    const [reFreshing, setRefresh] = useState(false);

    const EventRefresh = () => {
        setBar('dark-content')
        setRefresh(true)
        setTimeout(() => {
            setRefresh(false)
        }, 2000);
    };

    return (
        <GestureHandlerRootView style = {{flex : 1}}>
            <ScrollView
                refreshControl={
                    <RefreshControl refreshing={reFreshing} onRefresh={EventRefresh} />
                }>
                <StatusBar
                    barStyle={barStyle}
                    translucent
                    backgroundColor={'transparent'}
                />
            </ScrollView>
        </GestureHandlerRootView>
    )
}

export default StatusBar_Lab4;
