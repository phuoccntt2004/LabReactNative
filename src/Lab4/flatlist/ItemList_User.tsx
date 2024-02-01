import { View, Text, Image, StyleSheet, ImageSourcePropType } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import COLORS from '../../assets/Colors'

interface ContactType{
    dulieu:{
        name:string,
        position:string,
        photo:ImageSourcePropType
    }
}

const FlatListStyle:React.FC<ContactType> = (props) => {
    const {dulieu}=props
  return (
    <View style={{padding:10,backgroundColor:COLORS.GRAY}}>
      <View style={styles.container}>
        <Image style={{width:40,height:40}} source={dulieu.photo}/>
        <View style={{justifyContent:'center',alignItems:'center'}}>
          <Text>{dulieu.name}</Text>
          <Text>{dulieu.position}</Text>
        </View>
        <TouchableOpacity>
            <Text style = {{color: COLORS.GREEN}}>Call</Text>
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
    backgroundColor:COLORS.WHITE,
    padding: 20,
    borderRadius: 10
  },
})

export default FlatListStyle