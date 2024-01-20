import { ImageSourcePropType, StatusBar, StatusBarStyle } from 'react-native'
import React, {  useState } from 'react'
import { FlatList, GestureHandlerRootView, RefreshControl, ScrollView } from 'react-native-gesture-handler'
import IMAGES from '../../assets/Images'
import FlatListStyle from '../components/FlatList/FlatListStyle'
import COLORS from '../../assets/Colors'


const Lab4 = () => {
    const [barStyle,setBar]= useState<StatusBarStyle>('light-content')
    const [reFreshing,setRefresh]= useState(false)
    const data=[
        {
            name:'Ten 1',
            position:'Địa chỉ 1',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 2',
            position:'Địa chỉ 2',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 3',
            position:'Địa chỉ 3',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 4',
            position:'Địa chỉ 4',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 5',
            position:'Địa chỉ 5',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 6',
            position:'Địa chỉ 6',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 7',
            position:'Địa chỉ 7',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 8',
            position:'Địa chỉ 8',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 9',
            position:'Địa chỉ 9',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 10',
            position:'Địa chỉ 10',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 11',
            position:'Địa chỉ 11',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 12',
            position:'Địa chỉ 12',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 13',
            position:'Địa chỉ 13',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 14',
            position:'Địa chỉ 14',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
        {
            name:'Ten 15',
            position:'Địa chỉ 15',
            photo:IMAGES.AVATAR as ImageSourcePropType
        },
    ]
    const EventRefresh= ()=>{
        setBar('dark-content')
        setRefresh(true)
        setTimeout(()=>{
            setRefresh(false)
        },2000)
    }
  return (
    <GestureHandlerRootView>
      <ScrollView 
        refreshControl={
            <RefreshControl refreshing={reFreshing} onRefresh={EventRefresh}/>
        }>
        <StatusBar
            barStyle={barStyle}
            translucent
            backgroundColor={'transparent'}
            />
        <FlatList
            data={data}
            keyExtractor={(item)=>item.name}
            renderItem={({item})=> <FlatListStyle dulieu={item}/> }/>
      </ScrollView>
    </GestureHandlerRootView>
  )
}

export default Lab4