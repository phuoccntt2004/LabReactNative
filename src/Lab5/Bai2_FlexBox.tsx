import React from 'react';
import { StatusBar, ImageBackground, View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { PlayfairDisplay, fonsPoppins } from '../assets/fonts';
import COLORS from '../assets/Colors';

const Bai2_FlexBox = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
      <ImageBackground
        source={{ uri: 'https://photo2.tinhte.vn/data/attachment-files/2023/05/6435517_347034318_1394824158021952_1349929404625216487_n.jpg' }}
        style={styles.backgroundImage}
        resizeMode="cover"
      >
        <View style={styles.container}>
          <Text style={styles.text}>Đấu La Đại Lục</Text>
          <Text style = {styles.title}>Kiếp trước là thiên tài sau khi chế tạo ám khí cao nhất của đường môn:
            Phật Nộ Liên Hoa. Xuyên việt mang theo võ công cùng với ám khí Đường Môn
            đến thế giới không có võ công cùng ám khí siêu đẳng như thế, chuyện gì sẽ xảy ra tiếp theo?
          </Text>
          <TouchableOpacity style={styles.styleButton}>
            <Text style={styles.styleTextButton}>Xem Phim</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 30,
  },
  text: {
    fontSize: 40,
    color: COLORS.RED,
    fontFamily: PlayfairDisplay.italic,
    marginBottom: 15,
  },
  title: {
    fontSize: 15,
    color: COLORS.WHITE,
    fontWeight: 'bold'
  },
  styleButton: {
    width: 130,
    padding: 10,
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    marginTop: 10
  },
  styleTextButton: {
    color: COLORS.HEX_BLACK,
    fontFamily: fonsPoppins.medium,
    fontSize: 20,
    textAlign: 'center'
  },
});

export default Bai2_FlexBox;
