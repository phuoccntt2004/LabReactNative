import {Image, StyleProp, StyleSheet, Text, TextStyle, ViewStyle } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-gesture-handler'
import IMAGES from '../../../assets/Images';


interface propsButton{
    textName?: string;
    onPress?:  () => void;
    styleButton?: StyleProp<TextStyle>;
    styleText?: StyleProp<TextStyle>;
    icon?:boolean;
}
const ButtonStyle:React.FC<propsButton> = (props) => {
    const {textName,onPress,styleButton,icon,styleText}=props
    const ArraystyleButton: StyleProp<ViewStyle> = [styles.buttonStyle, styleButton];
    const ArraystyleText: StyleProp<TextStyle> = [styles.textStyle, styleText];
  return (
    <TouchableOpacity style={ArraystyleButton} onPress={onPress}>
      {icon && (
        <Image source={IMAGES.ICONGG}/>
      ) }
      <Text style={ArraystyleText}>{textName}</Text>
    </TouchableOpacity>
  )
}
const styles =StyleSheet.create({
    buttonStyle:{
      paddingHorizontal:20,
      width:348,
      height:57,
      backgroundColor:"#D17842",
      borderRadius:20,
      alignItems:'center',
      marginTop:15,
      flexDirection:'row'
    },
    textStyle:{
      width:300,
      color:'white',
      fontSize:14,
      textAlign:'center'
    }
})
export default ButtonStyle