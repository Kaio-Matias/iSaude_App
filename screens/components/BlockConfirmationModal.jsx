import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  Modal
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fontes } from '../styles/styles';

const BlockConfirmationModal = ({ visible, onClose, username, onConfirmBlock }) => {
  return (
    <Modal
      visible={visible}
      transparent={true}
      animationType="fade"
      onRequestClose={onClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modalContainer}>
          {/* Handle para arrastar */}
          <View style={styles.handle} />
          
          {/* Título */}
          <Text style={styles.title}>
            Você tem certeza que deseja bloquear {username} ?
          </Text>

          {/* Descrição */}
          <Text style={styles.description}>
            O usuário não poderá ver suas publicações e flashs, nem aparecerá em suas buscas.
          </Text>

          {/* Informação sobre desfazer */}
          <Text style={styles.undoInfo}>
            É possível desfazer essa alteração em <Text style={styles.boldText}>Opções</Text> {'>'} <Text style={styles.boldText}>Bloqueados</Text>
          </Text>

          {/* Botões de ação */}
          <View style={styles.buttonsContainer}>
            <TouchableOpacity 
              style={styles.confirmButton}
              onPress={onConfirmBlock}
            >
              <Text style={styles.confirmButtonText}>Sim, Bloquear</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={styles.cancelButton}
              onPress={onClose}
            >
              <Text style={styles.cancelButtonText}>Voltar</Text>
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 400,
  },
  handle: {
    width: 40,
    height: 4,
    backgroundColor: '#E0E0E0',
    borderRadius: 2,
    alignSelf: 'center',
    marginBottom: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    textAlign: 'center',
    marginBottom: 16,
    fontFamily: fontes.InteloBold,
    lineHeight: 28,
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 16,
    lineHeight: 22,
  },
  undoInfo: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 32,
    lineHeight: 20,
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  buttonsContainer: {
    gap: 12,
  },
  confirmButton: {
    backgroundColor: '#FF4757',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
  },
  confirmButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: fontes.InteloBold,
  },
  cancelButton: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#FF4757',
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FF4757',
    fontFamily: fontes.InteloBold,
  },
});

export default BlockConfirmationModal;
