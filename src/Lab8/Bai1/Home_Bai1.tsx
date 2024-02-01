import React, { useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, FlatList, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';
import axios from 'axios';
import COLORS from '../../assets/Colors';
import { TextInput as PaperTextInput } from 'react-native-paper';

interface User {
  id: number;
  username: string;
  date: string;
}

const YourComponent: React.FC = ({ navigation }: any) => {
  const [users, setUsers] = useState<User[]>([]);
  const [selectedUserId, setSelectedUserId] = useState<number | null>(null);
  const [isEditModalVisible, setEditModalVisible] = useState(false);
  const [editedUsername, setEditedUsername] = useState('');
  const [editedDate, setEditedDate] = useState('');

  const [selectedUser, setSelectedUser] = useState<User | null>(null); // Thêm state để lưu trữ thông tin của người dùng đang được chỉnh sửa

  const onGetUserList = async () => {
    try {
      const response = await axios.get('http://192.168.1.209:3000/user');
      setUsers(response.data);
    } catch (error) {
      console.error('Error fetching user list:', error);
    }
  };

  const onDeleteUser = async (userId: number) => {
    try {
      await axios.delete(`http://192.168.1.209:3000/user/${userId}`);
      onGetUserList();
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };

  const onEditUser = (userId: number) => {
    const userToEdit = users.find(user => user.id === userId);
    if (userToEdit) {
      setSelectedUserId(userToEdit.id)
      setSelectedUser(userToEdit);
      setEditedUsername(userToEdit.username);
      setEditedDate(userToEdit.date);
      setEditModalVisible(true);
    }
  };

  const onUpdateUser = async () => {
    try {
      if (!selectedUser) {
        console.error('No user to update');
        return;
      }
      const response = await axios.put(`http://192.168.1.209:3000/user/${selectedUserId}`, {
        username: editedUsername,
        date: editedDate || selectedUser.date,
      });

      const updatedDate = response.data.date || selectedUser.date;

      setUsers((prevUsers) => {
        const updatedUsers = [...prevUsers];
        const updatedUserIndex = updatedUsers.findIndex((user) => user.id === selectedUserId);

        if (updatedUserIndex !== -1) {
          updatedUsers[updatedUserIndex] = {
            ...response.data,
            date: updatedDate,
          };
        }

        return updatedUsers;
      });

      setEditModalVisible(false);
      setEditedUsername('');
      setEditedDate('');
      setSelectedUser(null);
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      onGetUserList();
    }, [])
  );

  const onCreateAccount = () => {
    // Chuyển tới màn hình "Thêm tài khoản"
    navigation.navigate('AddAccountScreen');
  };

  const renderItem = ({ item }: { item: User }) => (
    <View style={styles.item}>
      <View style={styles.userInfo}>
        <Text style={styles.username}>{item.username}</Text>
        <Text style={styles.date}>{item.date}</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={{ ...styles.buttonModal, backgroundColor: '#0099FF' }} onPress={() => onEditUser(item.id)} >
          <Text style={styles.text}>Sửa Thông Tin</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ ...styles.buttonModal, backgroundColor: '#FF0000' }} onPress={() => onDeleteUser(item.id)} >
          <Text style={styles.text}>Xóa</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View>
      <TouchableOpacity style={{ ...styles.buttonModal, backgroundColor: '#00CC00', marginBottom: 10, marginTop: 10 }} onPress={onCreateAccount}>
        <Text style={styles.text}>Tạo Tài Khoản</Text>
      </TouchableOpacity>
      <FlatList
        data={users}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <Modal visible={isEditModalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <Text style={{ color: COLORS.DARK_BLUE, fontSize: 35, fontWeight: '500', marginBottom: 30, textAlign: 'center' }}>Cập Nhật Tài Khoản</Text>
          <PaperTextInput
            label="Tên người dùng"
            style={styles.textInput}
            theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
            value={editedUsername}
            onChangeText={setEditedUsername}
          />
          <PaperTextInput
            label="Ngày Sinh"
            style={styles.textInput}
            theme={{ colors: { primary: COLORS.HEX_ORANGE } }}
            value={editedDate}
            onChangeText={setEditedDate}
          />
          <TouchableOpacity style={{ ...styles.buttonModal, backgroundColor: COLORS.HEX_ORANGE, marginTop: 20 }} onPress={onUpdateUser} >
            <Text style={styles.text}>Cập Nhật</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ ...styles.buttonModal, backgroundColor: COLORS.GRAY, marginTop: 20 }} onPress={() => setEditModalVisible(false)} >
            <Text style={styles.text}>Đóng</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(204, 204, 204, 0.5)',
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  userInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  date: {
    fontSize: 16,
    color: '#666',
  },
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonModal: {
    borderRadius: 10,
    padding: 10
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: COLORS.WHITE,
    borderRadius: 10,
    padding: 30,
  },
  textInput: {
    marginBottom: 10,
    backgroundColor: COLORS.WHITE,
    borderWidth: 2,  // Độ rộng của đường viền
    borderColor: COLORS.HEX_ORANGE,
  },
  text: {
    color: COLORS.WHITE,
    fontWeight: 'bold',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default YourComponent;
