import React from 'react';
import { StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
    children: any,
    localStyles?: StyleProp<ViewStyle>
}

const RowComponent = (props: Props) => {
    const {children, localStyles} = props;
    return(
        <View style = {[
            localStyles,
            styles.tabBarContainer,
            {
            flexDirection: 'row',
            padding: 8
        }]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    tabBarContainer: {
        borderRadius: 10
    }
})

export default RowComponent;