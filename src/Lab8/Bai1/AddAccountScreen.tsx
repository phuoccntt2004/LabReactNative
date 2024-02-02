import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { TextInput as PaperTextInput } from 'react-native-paper';
import axios from 'axios';
import COLORS from '../../assets/Colors';

const AddAccountScreen: React.FC = ({ navigation }: any) => {
    const [newUsername, setNewUsername] = useState('');
    const [newDate, setNewDate] = useState('');

    const onCreateAccount = async () => {
        try {
            const response = await axios.post('http://172.16.49.174:3000/user', {
                username: newUsername,
                date: newDate,
            });

            if (response.status === 201) {
                Alert.alert('Thông báo', 'Tạo tài khoản thành công');
                navigation.goBack();
            } else {
                Alert.alert('Thông báo', 'Có lỗi xảy ra. Vui lòng thử lại.');
            }
        } catch (error) {
            console.error('Error creating user:', error);
            Alert.alert('Thông báo', 'Có lỗi xảy ra. Vui lòng thử lại.');
        }
    };

    return (
        <View style = {styles.container}>
            <Text style={{ color: '#FFCC00', fontSize: 35, fontWeight: '500', marginBottom: 30, textAlign: 'center' }}>Thêm Tài Khoản</Text>
            <PaperTextInput
                label="Tên người dùng"
                style={styles.textInput}
                theme={{ colors: { primary: '#FFCC00' } }}
                value={newUsername}
                onChangeText={setNewUsername}
            />
            <PaperTextInput
                label="Ngày Sinh"
                style={styles.textInput}
                theme={{ colors: { primary: '#FFCC00' } }}
                value={newDate}
                onChangeText={setNewDate}
            />
            <TouchableOpacity style={{ ...styles.buttonModal, backgroundColor:'#FFCC00', marginTop: 20 }} onPress={onCreateAccount} >
                <Text style={styles.text}>Tạo Tài Khoản</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        flex: 1,
        justifyContent: 'center'
    },
    buttonModal: {
        borderRadius: 10,
        padding: 10,
    },
    text: {
        color: COLORS.WHITE,
        fontWeight: 'bold',
        fontSize: 20,
        textAlign: 'center'
    },
    textInput: {
        marginBottom: 10,
        backgroundColor: COLORS.WHITE,
        borderWidth: 2,  // Độ rộng của đường viền
        borderColor: '#FFCC00',
    },
});

export default AddAccountScreen;
