import React, { useState } from 'react';
import COLORS from '../../assets/Colors';
import { Image, KeyboardAvoidingView, Platform, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import IMAGES from '../../assets/Images';
import { TextInput as PaperTextInput } from 'react-native-paper';
import CheckBox from '@react-native-community/checkbox';

interface IntroScreenProps {
    navigation: StackNavigationProp<any>;
}

const LoginScreen: React.FC<IntroScreenProps> = props => {
    const { navigation } = props;

    const [toggleCheckBox, setToggleCheckBox] = useState(false);

    const checkboxColors = {
        true: COLORS.HEX_ORANGE,  // Màu khi CheckBox được chọn
        false: COLORS.HEX_ORANGE,   // Màu khi CheckBox không được chọn
    };

    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [usernameError, setUsernameError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);


    const isEmpty = (text: String) => {
        if (text === '') return true
    }

    const handleUsernameChange = (text: string) => {
        setUserName(text);
        if (isEmpty(text)) {
            setUsernameError('Vui lòng nhập tên người dùng');
        } else {
            setUsernameError('');
        }
    };

    const handlePasswordChange = (text: string) => {
        setPassword(text);
        if (isEmpty(text)) {
            setPasswordError('Vui lòng nhập mật khẩu');
        } else {
            setPasswordError('');
        }
    };

    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };


    const LoginClick = async () => {
        if (isEmpty(username) || isEmpty(password)) {
            // Hiển thị thông báo lỗi
            if (isEmpty(username)) {
                setUsernameError('Vui lòng nhập tên người dùng');
            }
            if (isEmpty(password)) {
                setPasswordError('Vui lòng nhập mật khẩu');
            }
        } else {
            // Chuyển trang nếu không có lỗi
            navigation.navigate('Home_Lab4');
        }
    }

    return (
        <KeyboardAvoidingView
            style={{ flex: 1, backgroundColor: COLORS.HEX_BLACK }}
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.HEX_BLACK }}>
                <ScrollView>
                    <View style={styles.container}>
                        <Text style={{ fontSize: 25, color: COLORS.HEX_ORANGE, fontWeight: 'bold', marginTop: 40}}>Hi WelCome Back!</Text>
                        <Text style={{ color: COLORS.HEX_ORANGE, fontWeight: 'bold' }}>Hello again have you been missed!</Text>
                        <View style={styles.image}>
                            <Image source={IMAGES.LogoLogin} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.content}>Đăng nhập</Text>
                        </View>
                        <View>
                            <PaperTextInput
                                label="Tên người dùng"
                                style={styles.textInput}
                                theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
                                left={<PaperTextInput.Icon icon="account" color={COLORS.HEX_ORANGE} />}
                                value={username}
                                onChangeText={handleUsernameChange}
                                error={!!usernameError}
                            />
                            {usernameError ? <Text style={styles.errorText}>{usernameError}</Text> : null}
                            <PaperTextInput
                                label="Mật khẩu"
                                style={styles.textInput}
                                theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
                                secureTextEntry={!showPassword}
                                left={<PaperTextInput.Icon icon="lock" color={COLORS.HEX_ORANGE} />}
                                right={
                                    <PaperTextInput.Icon
                                        icon={showPassword ? 'eye-off' : 'eye'}
                                        onPress={togglePasswordVisibility}
                                        color={COLORS.HEX_ORANGE}
                                    />
                                }
                                value={password}
                                onChangeText={handlePasswordChange}
                                error={!!passwordError}
                            />
                            {passwordError ? <Text style={styles.errorText}>{passwordError}</Text> : null}
                        </View>
                        <View style={[styles.viewRemember, { justifyContent: 'space-between', marginTop: 20 }]}>
                            <View style={styles.viewRemember}>
                                <CheckBox
                                    tintColors={checkboxColors}
                                    disabled={false}
                                    value={toggleCheckBox}
                                    onValueChange={(newValue) => setToggleCheckBox(newValue)}
                                />
                                <Text style={{ fontSize: 16, color: COLORS.WHITE }}>Ghi nhớ tài khoản</Text>
                            </View>
                            <Text style={{ color: COLORS.HEX_ORANGE, fontSize: 16 }}>Quên mật khẩu?</Text>
                        </View>
                        <View style={{ alignItems: 'center', marginTop: 20 }}>
                            <Pressable style={styles.buttonLogin} onPress={LoginClick}>
                                <Text style={styles.textButton}>ĐĂNG NHẬP</Text>
                            </Pressable>
                        </View>
                        <View style={styles.view}>
                            <View style={styles.view_child} />
                            <Text style={{
                                marginHorizontal: 5, fontSize: 16, fontWeight: 'bold', color: COLORS.WHITE
                            }}>
                                Đăng nhập với
                            </Text>
                            <View style={styles.view_child} />
                        </View>
                        <View style={[styles.viewRemember, { justifyContent: 'space-between', marginTop: 20 }]}>
                            <Pressable style={styles.buttonSocial}>
                                <Image source={IMAGES.FbIcon} style={styles.imageSocial} />
                                <Text style={{ color: COLORS.HEX_BLUE_GRAY, fontWeight: 'bold', fontSize: 16 }}>FaceBook</Text>
                            </Pressable>
                            <Pressable style={styles.buttonSocial}>
                                <Image source={IMAGES.GgIcon} style={styles.imageSocial} />
                                <Text style={{ color: COLORS.HEX_BLUE_GRAY, fontWeight: 'bold', fontSize: 16 }}>Google</Text>
                            </Pressable>
                        </View>
                        <View style={[styles.viewRemember, { marginTop: 20, justifyContent: 'center' }]}>
                            <Text style={{ fontSize: 16, color: COLORS.WHITE }}>Bạn chưa có tài khoản?</Text>
                            <TouchableOpacity onPress={() => { navigation.navigate('Home_Lab4'); }}>
                                <Text style={{ color: COLORS.HEX_ORANGE, fontSize: 16 }}>  Đăng ký</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    container: {
        marginStart: 10,
        marginEnd: 10,
    },
    image: {
        height: 200,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    content: {
        color: COLORS.WHITE,
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 20,
        marginBottom: 40
    },
    textInput: {
        marginBottom: 10,
        backgroundColor: COLORS.WHITE,
        borderWidth: 2,  // Độ rộng của đường viền
        borderColor: COLORS.HEX_ORANGE,
    },
    errorText: {
        color: COLORS.RED,
        fontSize: 14,
        marginBottom: 5,
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
        backgroundColor: COLORS.HEX_ORANGE,
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
        backgroundColor: COLORS.HEX_LIGHT_GREY,
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
export default LoginScreen;