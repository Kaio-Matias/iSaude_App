import React, { useState } from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Icon from 'react-native-vector-icons/Feather'; // Usando Feather para os ícones
import { useNavigation } from '@react-navigation/native';
import { useBlockedUsers } from '../../contexts/BlockedUsersContext';
import ProfileOptionsModal from '../ProfileOptionsModal';
import BlockConfirmationModal from '../BlockConfirmationModal';
import { useProfileNavigation, extractUserData } from '../../utils/profileNavigation';

const PostHeader = ({ user, source, timestamp }) => {
  const navigation = useNavigation();
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const [isSaved, setIsSaved] = useState(false);
  const { isUserBlocked, blockUser } = useBlockedUsers();

  const handleOptionsPress = () => {
    setShowOptionsModal(true);
  };

  const { navigateToProfile } = useProfileNavigation();

  const handleProfilePress = () => {
    const userData = extractUserData({ user });
    navigateToProfile(userData);
  };

  const handleAboutAccount = () => {
    setShowOptionsModal(false);
    navigation.navigate('AboutAccount');
  };

  const handleReport = () => {
    Alert.alert('Denunciar', `Denunciar ${user.name}`);
    setShowOptionsModal(false);
  };

  const handleBlockUser = () => {
    setShowOptionsModal(false);
    setShowBlockModal(true);
  };

  const handleConfirmBlock = () => {
    blockUser(user.username || user.name);
    setShowBlockModal(false);
    Alert.alert('Usuário Bloqueado', `${user.username || user.name} foi bloqueado com sucesso.`);
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleProfilePress}>
        <Image source={{ uri: user.avatar }} style={styles.avatar} />
      </TouchableOpacity>
      <TouchableOpacity style={styles.userInfo} onPress={handleProfilePress}>
        <Text style={styles.userName}>{user.name}</Text>
        <View style={styles.metaInfo}>
          <Icon name="map-pin" size={14} color="#65676B" />
          <Text style={styles.sourceText}>{source} • {timestamp}</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.actions}>
        <TouchableOpacity onPress={handleSave}>
          <Icon 
            name="bookmark" 
            size={24} 
            color={isSaved ? "#4576F2" : "#65676B"} 
          />
        </TouchableOpacity>
        <TouchableOpacity style={{ marginLeft: 16 }} onPress={handleOptionsPress}>
          <Icon name="more-horizontal" size={24} color="#65676B" />
        </TouchableOpacity>
      </View>

      {/* Modais */}
      <ProfileOptionsModal
        visible={showOptionsModal}
        onClose={() => setShowOptionsModal(false)}
        onAboutAccount={handleAboutAccount}
        onReport={handleReport}
        onBlockUser={handleBlockUser}
        username={user.username || user.name}
      />

      <BlockConfirmationModal
        visible={showBlockModal}
        onClose={() => setShowBlockModal(false)}
        onConfirmBlock={handleConfirmBlock}
        username={user.username || user.name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    paddingTop: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  userInfo: {
    flex: 1,
    marginLeft: 10,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#050505',
  },
  metaInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  sourceText: {
    fontSize: 12,
    color: '#65676B',
    marginLeft: 5,
  },
  actions: {
    flexDirection: 'row',
  },
});

export default PostHeader;