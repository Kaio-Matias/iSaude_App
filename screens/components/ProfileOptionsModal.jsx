import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal,
  SafeAreaView
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fontes } from '../styles/styles';

const ProfileOptionsModal = ({ visible, onClose, username, onAboutAccount, onReport, onBlockUser }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="slide"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <TouchableOpacity style={styles.backdrop} onPress={onClose} />
        
        <View style={styles.modalContainer}>
          {/* Handle para arrastar */}
          <View style={styles.handle} />
          
          {/* Informações do perfil */}
          <View style={styles.profileInfo}>
            <Text style={styles.profileName}>Dra. Maria Glenda</Text>
            <Text style={styles.profileUsername}>{username}</Text>
          </View>

          {/* Opções */}
          <View style={styles.optionsContainer}>
            <TouchableOpacity 
              style={styles.optionItem}
              onPress={onAboutAccount}
            >
              <View style={styles.optionIcon}>
                <Ionicons name="at" size={20} color="#4576F2" />
              </View>
              <Text style={styles.optionText}>Sobre esta Conta</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.optionItem}
              onPress={onReport}
            >
              <View style={styles.optionIcon}>
                <Ionicons name="warning" size={20} color="#4576F2" />
              </View>
              <Text style={styles.optionText}>Denunciar</Text>
              <Ionicons name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.optionItem}
              onPress={onBlockUser}
            >
              <View style={[styles.optionIcon, styles.blockIcon]}>
                <Ionicons name="person-remove" size={20} color="#FF4757" />
              </View>
              <Text style={[styles.optionText, styles.blockText]}>Bloquear Usuário</Text>
              <Ionicons name="chevron-forward" size={20} color="#FF4757" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  backdrop: {
    flex: 1,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 12,
    paddingBottom: 40,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 20,
  },
  profileInfo: {
    paddingHorizontal: 20,
    paddingBottom: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
    marginBottom: 4,
  },
  profileUsername: {
    fontSize: 14,
    color: '#666',
  },
  optionsContainer: {
    paddingTop: 10,
  },
  optionItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 16,
    backgroundColor: '#FFFFFF',
  },
  optionIcon: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  blockIcon: {
    backgroundColor: '#FFEBEE',
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  blockText: {
    color: '#FF4757',
  },
});

export default ProfileOptionsModal;
