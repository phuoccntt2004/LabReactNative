import React, { useState } from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { TextInput as PaperTextInput } from 'react-native-paper';
import COLORS from '../../assets/Colors';

interface HomeScreen {
  navigation: StackNavigationProp<any>;
}

const HomeScreen: React.FC<HomeScreen> = (props) => {
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const { navigation } = props;

  const goToDetails = () => {
    navigation.navigate('Details', { name, id });
  };

  return (
    <View style = {styles.container}>
      <PaperTextInput
        label="Nhập Tên người dùng"
        style={styles.textInput}
        theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
        left={<PaperTextInput.Icon icon="account" color={COLORS.HEX_ORANGE} />}
        value={name}
        onChangeText={(text) => setName(text)}
      />
      <PaperTextInput
        label="Nhập Id người dùng"
        style={styles.textInput}
        theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
        left={<PaperTextInput.Icon icon="account" color={COLORS.HEX_ORANGE} />}
        value={id}
        onChangeText={(number) => setId(number)}
      />
      <Button title="Go to Details" onPress={goToDetails} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 15
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: COLORS.WHITE,
    borderWidth: 2,  // Độ rộng của đường viền
    borderColor: COLORS.HEX_ORANGE,
}
})

export default HomeScreen;

