import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Alert } from 'react-native';
import ProfileOptionsModal from '../ProfileOptionsModal';
import BlockConfirmationModal from '../BlockConfirmationModal';
import { useUserBlock } from '../UserBlockContext';

export const ChatHeader = ({ 
  contact, 
  onBack, 
  onSearch, 
  onOptions 
}) => {
  const [showOptionsModal, setShowOptionsModal] = useState(false);
  const [showBlockModal, setShowBlockModal] = useState(false);
  const { isUserBlocked, blockUser } = useUserBlock();
  
  const { name, profileImage, isVerified, id } = contact;

  const handleOptionsPress = () => {
    setShowOptionsModal(true);
  };

  const handleAboutAccount = () => {
    Alert.alert('Sobre a Conta', `Informações sobre ${name}`);
  };

  const handleReport = () => {
    Alert.alert('Denunciar', `Denunciar ${name}`);
  };

  const handleBlockUser = () => {
    setShowBlockModal(true);
  };

  const handleConfirmBlock = () => {
    blockUser(id);
    Alert.alert('Usuário Bloqueado', `${name} foi bloqueado com sucesso.`);
  };

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={onBack} style={styles.backButton}>
        <Text style={styles.backIcon}>←</Text>
      </TouchableOpacity>
      
      <Image 
        source={{ uri: profileImage }} 
        style={styles.profileImage}
      />
      
      <View style={styles.contactInfo}>
        <View style={styles.nameContainer}>
          <Text style={styles.contactName}>{name}</Text>
          {isVerified && (
            <View style={styles.verifiedBadge}>
              <Text style={styles.verifiedText}>✓</Text>
            </View>
          )}
        </View>
      </View>
      
      <View style={styles.actions}>
        <TouchableOpacity onPress={onSearch} style={styles.actionButton}>
          <Text style={styles.actionIcon}>🔍</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleOptionsPress} style={styles.actionButton}>
          <Text style={styles.actionIcon}>⋯</Text>
        </TouchableOpacity>
      </View>

      {/* Modais */}
      <ProfileOptionsModal
        visible={showOptionsModal}
        onClose={() => setShowOptionsModal(false)}
        onAboutAccount={handleAboutAccount}
        onReport={handleReport}
        onBlockUser={handleBlockUser}
        username={name}
      />

      <BlockConfirmationModal
        visible={showBlockModal}
        onClose={() => setShowBlockModal(false)}
        onConfirmBlock={handleConfirmBlock}
        username={name}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    paddingTop: 50,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  backButton: {
    marginRight: 12,
  },
  backIcon: {
    fontSize: 24,
    color: '#007AFF',
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  contactInfo: {
    flex: 1,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  contactName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  verifiedBadge: {
    backgroundColor: '#34C759',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  verifiedText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 16,
  },
  actionIcon: {
    fontSize: 20,
    color: '#007AFF',
  },
});
