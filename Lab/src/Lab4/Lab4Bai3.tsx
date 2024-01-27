import { View, Text, StyleSheet, Image, Pressable, KeyboardAvoidingView, Platform } from 'react-native'
import React from 'react'
import IMAGES from '../../assets/Images'
import COLORS from '../../assets/Colors'
import { TouchableOpacity } from 'react-native-gesture-handler'
import CheckBox from '@react-native-community/checkbox'
import { TextInput as PaperTextInput } from 'react-native-paper';
import KeyboardAvoidingViewWrapper from '../components/KeyboardAvoidingWrapper'
import { useNavigation } from '@react-navigation/native'
const Lab4Bai3 = () => {
    const navigation = useNavigation() as any
    const ClickLab5 = ()=>{
        navigation.navigate('Lab5')
    }
  return (
    <KeyboardAvoidingViewWrapper>
      <View style={styles.container}>
        <Text style={{ fontSize: 25, color: COLORS.HEX_ORANGE, fontWeight: 'bold', marginTop: 40}}>Hi WelCome Back!</Text>
        <Text style={{ color: COLORS.HEX_ORANGE, fontWeight: 'bold' }}>Hello again have you been missed!</Text>
              <View style={styles.image}>
                  <Image
                  style={{width:189,height:189}} 
                  source={IMAGES.LogoLogin} />
              </View>
              <View style={{ alignItems: 'center' }}>
                  <Text style={styles.content}>Đăng nhập</Text>
              </View>
              <View>
                  <PaperTextInput
                      label="Tên người dùng"
                      style={styles.textInput}
                      theme={{ colors: { primary: COLORS.ORANGE } }}
                      left={<PaperTextInput.Icon icon="account" color={COLORS.ORANGE} />}
                  />
                
                  <PaperTextInput
                      label="Mật khẩu"
                      style={styles.textInput}
                      theme={{ colors: { primary: COLORS.ORANGE } }}
                      secureTextEntry
                      left={<PaperTextInput.Icon icon="lock" color={COLORS.ORANGE} />}
                      right={<PaperTextInput.Icon icon="eye" />}
                  />
              </View>
              <View style={[styles.viewRemember, { justifyContent: 'space-between', marginTop: 20 }]}>
                  <View style={styles.viewRemember}>
                      <CheckBox
                          disabled={false}
                      />
                      <Text style={{ fontSize: 16, color: COLORS.BLUE }}>Ghi nhớ tài khoản</Text>
                  </View>
                  <Text style={{ color: COLORS.ORANGE, fontSize: 16 }}>Quên mật khẩu?</Text>
              </View>
              <View style={{ alignItems: 'center', marginTop: 20 }}>
                  <Pressable style={styles.buttonLogin} onPress={ClickLab5} >
                      <Text style={styles.textButton}>Lab 5</Text>
                  </Pressable>
              </View>
              <View style={styles.view}>
                  <View style={styles.view_child} />
                  <Text style={{
                      marginHorizontal: 5, fontSize: 16, fontWeight: 'bold',
                  }}>
                      Đăng nhập với
                  </Text>
                  <View style={styles.view_child} />
              </View>
              <View style={[styles.viewRemember, { justifyContent: 'space-between', marginTop: 20 }]}>
                  <Pressable style={styles.buttonSocial}>
                      <Image source={IMAGES.FbIcon} style={styles.imageSocial} />
                      <Text style={{ color: COLORS.BLUE, fontWeight: 'bold', fontSize: 16 }}>FaceBook</Text>
                  </Pressable>
                  <Pressable style={styles.buttonSocial}>
                      <Image source={IMAGES.GgIcon} style={styles.imageSocial} />
                      <Text style={{ color: COLORS.BLUE, fontWeight: 'bold', fontSize: 16 }}>Google</Text>
                  </Pressable>
              </View>
              <View style={[styles.viewRemember, { marginTop: 20, justifyContent: 'center' }]}>
                  <Text style={{ fontSize: 16, color: COLORS.BLUE }}>Bạn chưa có tài khoản?</Text>
                  <TouchableOpacity >
                      <Text style={{ color: COLORS.ORANGE, fontSize: 16 }}>  Đăng ký</Text>
                  </TouchableOpacity>
              </View>
      </View>
    </KeyboardAvoidingViewWrapper>
  )
}
const styles = StyleSheet.create({
  container: {
      marginStart: 10,
      marginEnd: 10
  },
  image: {
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20
  },
  content: {
      color: COLORS.BLUE,
      fontSize: 40,
      fontWeight: 'bold',
      marginTop: 20,
      marginBottom: 20
  },
  textInput: {
      marginBottom: 10,
      backgroundColor: COLORS.WHITE,
      borderWidth: 2,  // Độ rộng của đường viền
      borderColor: COLORS.ORANGE,
  },
  viewRemember: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  buttonLogin: {
      height: 48,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.ORANGE,
      borderRadius: 10
  },
  textButton: {
      color: COLORS.WHITE,
      fontWeight: 'bold',
      fontSize: 20
  },
  view: {
      flexDirection: 'row',
      width: '100%',
      height: 'auto',
      marginTop: 25,
      alignItems: 'center',
  },
  view_child: {
      flex: 2,
      height: 1,
      backgroundColor: COLORS.GRAY,
  },
  imageSocial: {
      width: 28,
      height: 28,
      marginEnd: 10
  },
  buttonSocial: {
      flexDirection: 'row',
      width: 174,
      height: 48,
      backgroundColor: COLORS.WHITE,
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
  }
})

export default Lab4Bai3