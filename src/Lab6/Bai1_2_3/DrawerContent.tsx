import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import COLORS from '../../assets/Colors';
import { Avatar, Caption, Drawer, Title } from 'react-native-paper';
import Icon from 'react-native-vector-icons/Ionicons';
import IMAGES from '../../assets/Images';

const DrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={IMAGES.Avatar1}
                                size={50}
                            />
                            <View style={{ flexDirection: 'column', marginLeft: 15 }}>
                                <Title style={styles.title}>Nguyễn Tiến Phước</Title>
                                <Caption style={styles.caption}>phuoccntt2004@gmail.com</Caption>
                            </View>
                        </View>
                    </View>
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem
                            icon={({ color, size }) => {
                                return <Icon name="home"
                                color={color}
                                size={size} />;
                            }}
                            label="Home" 
                            onPress={function (): void {
                                props.navigation.navigate('Home');
                            }}
                            activeBackgroundColor="yellow" // Màu nền khi mục đang hoạt động
                            inactiveBackgroundColor="#ffffcc"  />
                        <DrawerItem
                            icon={({ color, size }) => {
                                return <Icon name="receipt-sharp"
                                color={color}
                                size={size} />;
                            }}
                            label="Article" 
                            onPress={function (): void {
                                props.navigation.navigate('Article');
                            }}
                            activeBackgroundColor="yellow" // Màu nền khi mục đang hoạt động
                            inactiveBackgroundColor="#ffffcc"   />
                        <DrawerItem
                            icon={({ color, size }) => {
                                return <Icon name="chatbubbles-sharp"
                                color={color}
                                size={size} />; 
                            }}
                            label="Chat" 
                            onPress={function (): void {
                                props.navigation.navigate('Chat');
                            }} 
                            activeBackgroundColor="yellow" // Màu nền khi mục đang hoạt động
                            inactiveBackgroundColor="#ffffcc"  
                            />
                        <DrawerItem
                            icon={({ color, size }) => {
                                return <Icon name="settings-sharp"
                                color={color}
                                size={size} />;
                            }}
                            label="Setting" 
                            onPress={function (): void {
                                props.navigation.navigate('Setting');
                            }} 
                            activeBackgroundColor="yellow" // Màu nền khi mục đang hoạt động
                            inactiveBackgroundColor="#ffffcc" 
                            />            
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => {
                        return <Icon name="log-out-outline"
                            color={color}
                            size={size} />;
                    }}
                    label="Sign Out" onPress={function (): void {

                    }} 
                    activeBackgroundColor="yellow" // Màu nền khi mục đang hoạt động
                    inactiveBackgroundColor="#ffffcc" />
            </Drawer.Section>
        </View>
    );
};

const styles = StyleSheet.create({
    drawerContent: {
        flex: 1
    },
    userInfoSection: {
        paddingLeft: 20
    },
    title: {
        fontSize: 16,
        marginTop: 3,
        fontWeight: 'bold'
    },
    caption: {
        fontSize: 14,
        lineHeight: 14
    },
    row: {
        marginTop: 20,
        flexDirection: 'row',
        alignItems: 'center'
    },
    section: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 15
    },
    drawerSection: {
        marginTop: 15
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: COLORS.WHITE_SMOKE,
        borderTopWidth: 1
    },
});

export default DrawerContent;