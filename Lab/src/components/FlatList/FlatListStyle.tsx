import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '../../../assets/Colors'
import { ContactType } from '../../models/ContactType'

const FlatListStyle:React.FC<ContactType> = (props) => {
    const {dulieu}=props
  return (
    <View style={{padding:15,backgroundColor:COLORS.GRAY}}>
      <View style={styles.container}>
        <Image style={{width:40,height:40}} source={dulieu.photo}/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>{dulieu.name}</Text>
          <Text>{dulieu.position}</Text>
        </View>
        <TouchableOpacity>
            <Text>Call</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles =StyleSheet.create({
  container:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    padding:20,
    backgroundColor:COLORS.WHITE,
  },
})

export default FlatListStyle