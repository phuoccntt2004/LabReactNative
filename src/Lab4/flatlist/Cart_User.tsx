import React from 'react';
import { FlatList, ImageSourcePropType } from 'react-native';
import IMAGES from '../../assets/Images';
import ItemList_User from './ItemList_User';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Cart_User = () => {
    const data = [
        {
            name: 'Ten 1',
            position: 'Địa chỉ 1',
            photo: IMAGES.Avatar as ImageSourcePropType
        },
        {
            name: 'Ten 2',
            position: 'Địa chỉ 2',
            photo: IMAGES.Avatar1 as ImageSourcePropType
        },
        {
            name: 'Ten 3',
            position: 'Địa chỉ 3',
            photo: IMAGES.Avatar2 as ImageSourcePropType
        },
        {
            name: 'Ten 4',
            position: 'Địa chỉ 4',
            photo: IMAGES.Avatar as ImageSourcePropType
        },
        {
            name: 'Ten 5',
            position: 'Địa chỉ 5',
            photo: IMAGES.Avatar1 as ImageSourcePropType
        },
        {
            name: 'Ten 6',
            position: 'Địa chỉ 6',
            photo: IMAGES.Avatar2 as ImageSourcePropType
        },
        {
            name: 'Ten 7',
            position: 'Địa chỉ 7',
            photo: IMAGES.Avatar1 as ImageSourcePropType
        },
        {
            name: 'Ten 8',
            position: 'Địa chỉ 8',
            photo: IMAGES.Avatar as ImageSourcePropType
        },
        {
            name: 'Ten 9',
            position: 'Địa chỉ 9',
            photo: IMAGES.Avatar2 as ImageSourcePropType
        },
        {
            name: 'Ten 10',
            position: 'Địa chỉ 10',
            photo: IMAGES.Avatar1 as ImageSourcePropType
        },
        {
            name: 'Ten 11',
            position: 'Địa chỉ 11',
            photo: IMAGES.Avatar as ImageSourcePropType
        },
        {
            name: 'Ten 12',
            position: 'Địa chỉ 12',
            photo: IMAGES.Avatar2 as ImageSourcePropType
        },
        {
            name: 'Ten 13',
            position: 'Địa chỉ 13',
            photo: IMAGES.Avatar as ImageSourcePropType
        },
        {
            name: 'Ten 14',
            position: 'Địa chỉ 14',
            photo: IMAGES.Avatar1 as ImageSourcePropType
        },
        {
            name: 'Ten 15',
            position: 'Địa chỉ 15',
            photo: IMAGES.Avatar2 as ImageSourcePropType
        },
    ]
    return (
        <GestureHandlerRootView>
            <FlatList
                data={data}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => <ItemList_User dulieu={item} />} />
        </GestureHandlerRootView>
    )
}

export default Cart_User;