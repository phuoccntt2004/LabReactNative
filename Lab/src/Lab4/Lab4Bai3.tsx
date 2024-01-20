import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import TextButton from '../components/textButton/TextButton'
import TextInputStyle from '../components/TextInput/TextInputStyle'
import IMAGES from '../../assets/Images'
import ButtonStyle from '../components/Button/ButtonStyle'
import COLORS from '../../assets/Colors'

const Lab4Bai3 = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.logoImage} source={IMAGES.LogoLogin} />
      <Text style={styles.titleLogin}>Welcome to Lungo !!</Text>
      <Text style={styles.desLogin}>Login to Continue</Text>
      <TextInputStyle placeholder='Email Address'  />
      <TextInputStyle placeholder='Password' password={true}  />
      <ButtonStyle styleButton={{marginTop:45}}  textName='Sign In'/>
      <ButtonStyle 
        styleButton={{backgroundColor:'white', marginBottom:25}} 
        styleText={{color:'black'}} 
        icon={true} 
        textName='Sign in with Google'/>
      <TextButton TextValues='Don’t have account? Click' TextClick='Register' />
      <TextButton TextValues='Forget Password? Click' TextClick='Reset'/>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
      flex:1,
      backgroundColor:COLORS.BLACK,
      justifyContent:'center',
      alignItems:'center'

  },
  logoImage:{
      width: 142,
      height:142,

  },
  titleLogin:{
      color:'white',
      fontSize:16
  },
  desLogin:{
      color:'gray',
      fontSize:12,
      marginBottom:30
  },
})

export default Lab4Bai3