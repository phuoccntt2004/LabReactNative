import React, { useState } from 'react';
import { View, Text, Alert, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Image } from 'react-native';
import COLORS from '../assets/Colors';
import IMAGES from '../assets/Images';

const Bai3 = () => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  const handleBackButton = () => {
    Alert.alert(
      'Thông báo',
      'Bạn đã tắt modal bằng nút back của thiết bị',
      [{ text: 'OK', onPress: () => setModalVisible(false) }]
    );
    return true; // Chặn sự kiện back mặc định
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style = {{...styles.button, backgroundColor: COLORS.GREEN_CYAN}} onPress={toggleModal} >
        <Text style = {styles.text}>Mở Modal</Text>
      </TouchableOpacity>

      <Modal
        isVisible={isModalVisible}
        onBackButtonPress={handleBackButton}
        onBackdropPress={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <Text>Hello Word!</Text>
          <Image source={IMAGES.React_Native}
          style={styles.image}/>
          <TouchableOpacity style = {styles.button} onPress={toggleModal} >
            <Text style = {styles.text}>Ẩn Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center' 
  },
  modalContainer: {
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 30,
    alignItems: 'center',
  },
  button: {
    backgroundColor: COLORS.HEX_AQUA,
    padding: 15,
    borderRadius: 10
  },
  text: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 20
  }, 
  image: {
    width: 180, 
    height: 150, 
    marginBottom: 10, 
    marginTop: 10
  }
})

export default Bai3;