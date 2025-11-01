import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  SafeAreaView,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { fontes } from '../styles/styles';

const BlockedProfile = ({ username }) => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerUsername}>{username}</Text>
        <View style={styles.headerSpacer} />
      </View>

      {/* Conteúdo do perfil bloqueado */}
      <View style={styles.content}>
        <View style={styles.blockedIcon}>
          <Ionicons name="person-remove" size={64} color="#FF4757" />
        </View>
        
        <Text style={styles.blockedTitle}>Perfil Bloqueado</Text>
        
        <Text style={styles.blockedDescription}>
          Você bloqueou este usuário. Não é possível ver suas publicações, flashs ou interagir com o perfil.
        </Text>

        <TouchableOpacity 
          style={styles.unblockButton}
          onPress={() => {
            // Aqui você pode implementar a lógica para desbloquear
            navigation.navigate('Settings', { tab: 'blocked' });
          }}
        >
          <Text style={styles.unblockButtonText}>Desbloquear Usuário</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  blockedIcon: {
    marginBottom: 24,
  },
  blockedTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 16,
    textAlign: 'center',
    fontFamily: fontes.InteloBold,
  },
  blockedDescription: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 32,
  },
  unblockButton: {
    backgroundColor: '#4576F2',
    paddingHorizontal: 24,
    paddingVertical: 12,
    borderRadius: 8,
  },
  unblockButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: fontes.InteloBold,
  },
});

export default BlockedProfile;
