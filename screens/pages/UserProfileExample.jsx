import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { UserProfileCard } from '../components/UserProfileCard';
import { useProfileNavigation } from '../utils/profileNavigation';

// Dados de exemplo de usuários
const mockUsers = [
  {
    id: '1',
    name: 'Dra. Maria Glenda',
    username: 'dra.mariaglen',
    profileImage: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=150&h=150&fit=crop&crop=face',
    isVerified: true,
    specialty: 'Clínica Geral',
    bio: 'Clínica geral com 15 anos de experiência formada pela UNIFESP. Minha abordagem une medicina baseada em evidências com atendimento humanizado.',
    website: 'https://dramariaglen.com',
    stats: {
      publications: 124,
      followers: '23k',
      following: 2196,
    },
  },
  {
    id: '2',
    name: 'Luana Paiva',
    username: 'luana.paiva',
    profileImage: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=150&h=150&fit=crop&crop=face',
    isVerified: true,
    specialty: 'Clínica Geral',
    bio: 'Clínica geral com 15 anos de experiência formada pela UNIFESP. Minha abordagem une medicina baseada em evidências com atendimento humanizado.',
    stats: {
      publications: 3,
      followers: 4785,
      following: 483,
    },
  },
  {
    id: '3',
    name: 'Dr. João Silva',
    username: 'joao.silva',
    profileImage: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=150&h=150&fit=crop&crop=face',
    isVerified: false,
    specialty: 'Cardiologia',
    bio: 'Cardiologista especializado em prevenção e tratamento de doenças cardiovasculares.',
    stats: {
      publications: 45,
      followers: 1200,
      following: 890,
    },
  },
];

const UserProfileExampleContent = () => {
  const navigation = useNavigation();
  const { navigateToProfile } = useProfileNavigation();
  const [selectedUser, setSelectedUser] = useState(null);

  const handleProfilePress = (user) => {
    navigateToProfile(user);
  };

  const handleFollowPress = (user) => {
    Alert.alert('Seguir', `Seguindo ${user.name}`);
  };

  const handleRequestFollowPress = (user) => {
    Alert.alert('Solicitar Seguir', `Solicitação enviada para ${user.name}`);
  };

  const blockedUsers = getBlockedUsers();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Ionicons name="arrow-back" size={24} color="#007AFF" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Exemplo de Perfis</Text>
        <View style={styles.placeholder} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Perfis de Usuários</Text>
          <Text style={styles.sectionDescription}>
            Clique na foto/nome para interagir ou nos 3 pontos para ver opções
          </Text>
        </View>

        {mockUsers.map((user) => (
          <UserProfileCard
            key={user.id}
            user={user}
            onProfilePress={handleProfilePress}
            onActionPress={
              user.username === 'luana.paiva' 
                ? () => handleRequestFollowPress(user)
                : () => handleFollowPress(user)
            }
            actionButtonText={
              user.username === 'luana.paiva' ? 'Pedir para Seguir' : 'Seguir'
            }
          />
        ))}

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Usuários Bloqueados</Text>
          <Text style={styles.sectionDescription}>
            Verifique a funcionalidade de bloqueio nos perfis
          </Text>
        </View>

        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>Funcionalidades Implementadas:</Text>
          <View style={styles.infoItem}>
            <Ionicons name="checkmark-circle" size={16} color="#34C759" />
            <Text style={styles.infoText}>Clique na foto/nome do usuário</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="checkmark-circle" size={16} color="#34C759" />
            <Text style={styles.infoText}>Menu de opções (3 pontos)</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="checkmark-circle" size={16} color="#34C759" />
            <Text style={styles.infoText}>Bloquear usuário com confirmação</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="checkmark-circle" size={16} color="#34C759" />
            <Text style={styles.infoText}>Estado visual de usuário bloqueado</Text>
          </View>
          <View style={styles.infoItem}>
            <Ionicons name="checkmark-circle" size={16} color="#34C759" />
            <Text style={styles.infoText}>Desbloquear usuário</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const UserProfileExample = () => {
  return <UserProfileExampleContent />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  backButton: {
    padding: 8,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1C1C1E',
  },
  placeholder: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  section: {
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1E',
    marginBottom: 4,
  },
  sectionDescription: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 16,
  },
  infoSection: {
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 16,
    marginTop: 16,
    marginBottom: 32,
  },
  infoTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    marginBottom: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  infoText: {
    fontSize: 14,
    color: '#1C1C1E',
    marginLeft: 8,
  },
});

export default UserProfileExample;
