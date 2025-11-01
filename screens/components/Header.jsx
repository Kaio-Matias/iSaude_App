import React from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

//icones
import IconsTitle from '../../assets/header/Icon.svg';
import Sino from '../../assets/header/Notification.svg';

const Header = () => {
  const navigation = useNavigation();

  const handleProfilePress = () => {
    navigation.navigate('ProfileOptions');
  };

  return (
    <View style={styles.container}>
      
      <IconsTitle width={150} height={40} />

      <View style={styles.rightContainer}>

        <TouchableOpacity 
          style={styles.notificationButton}
          onPress={() => navigation.navigate('Notifications')}
        >
          <Sino width={24} height={24} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleProfilePress}>
          <Image
            source={{ 
              uri: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop'
            }} 
            style={styles.avatar}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 120,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',  
    paddingBottom: 15,       
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
  },
  rightContainer: {
    flexDirection: 'row',
    alignItems: 'center', 
  },
  notificationButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  avatar: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
});

export default Header;