import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { fontes } from '../styles/styles';

const UserProfile = ({ route }) => {
  const navigation = useNavigation();
  const [isSaved, setIsSaved] = useState(false);
  const [activeTab, setActiveTab] = useState('publicacoes');
  
  // Dados mockados do usuário
  const user = {
    name: 'Dra. Maria Glenda',
    username: '@dra.mariaglen',
    avatar: 'https://i.pravatar.cc/150?img=3',
    bio: 'Clínica geral com 15 anos de experiência formada pela UNIFESP. Minha abordagem une medicina baseada em evidências com atendimento humanizado.',
    website: 'https://dramariaglen.com',
    specialty: 'Clínica Geral',
    isVerified: true,
    isFollowing: true,
    stats: {
      posts: 124,
      followers: '23k',
      following: '2.196'
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleOptions = () => {
    navigation.navigate('ProfileOptions', { username: user.username });
  };

  const handleProfessionalProfile = () => {
    navigation.navigate('ProfessionalProfile', { user });
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'publicacoes':
        return (
          <View style={styles.postsGrid}>
            {/* Grid de posts - placeholder */}
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <View key={item} style={styles.postThumbnail}>
                <Image 
                  source={{ uri: `https://picsum.photos/200/200?random=${item}` }} 
                  style={styles.thumbnailImage}
                />
              </View>
            ))}
          </View>
        );
      case 'pulses':
        return (
          <View style={styles.pulsesContent}>
            <Text style={styles.placeholderText}>Pulses em breve...</Text>
          </View>
        );
      case 'mencoes':
        return (
          <View style={styles.mentionsContent}>
            <Text style={styles.placeholderText}>Menções em breve...</Text>
          </View>
        );
      default:
        return null;
    }
  };

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
        <Text style={styles.headerUsername}>{user.username}</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity 
            style={[styles.saveButton, isSaved && styles.saveButtonActive]}
            onPress={handleSave}
          >
            <Ionicons 
              name="bookmark" 
              size={20} 
              color={isSaved ? "#FFFFFF" : "#4576F2"} 
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionsButton}
            onPress={handleOptions}
          >
            <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Informações do Perfil */}
        <View style={styles.profileSection}>
          <View style={styles.profileHeader}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <View style={styles.statsContainer}>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.stats.posts}</Text>
                <Text style={styles.statLabel}>Publicações</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.stats.followers}</Text>
                <Text style={styles.statLabel}>Seguidores</Text>
              </View>
              <View style={styles.statItem}>
                <Text style={styles.statNumber}>{user.stats.following}</Text>
                <Text style={styles.statLabel}>Seguindo</Text>
              </View>
            </View>
          </View>

          <View style={styles.profileInfo}>
            <View style={styles.nameContainer}>
              <Text style={styles.name}>{user.name}</Text>
              {user.isVerified && (
                <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
              )}
            </View>
            
            <View style={styles.specialtyTag}>
              <Ionicons name="medical" size={16} color="#4576F2" />
              <Text style={styles.specialtyText}>{user.specialty}</Text>
            </View>

            <Text style={styles.bio}>
              {user.bio}
              <Text style={styles.seeMore}> Ver mais</Text>
            </Text>

            <TouchableOpacity style={styles.websiteLink}>
              <Text style={styles.websiteText}>{user.website}</Text>
            </TouchableOpacity>
          </View>

          {/* Botões de Ação */}
          <View style={styles.actionButtons}>
            <TouchableOpacity style={styles.followingButton}>
              <Text style={styles.followingText}>Seguindo</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.professionalButton}
              onPress={handleProfessionalProfile}
            >
              <Text style={styles.professionalText}>Perfil Profissional</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Tabs de Navegação */}
        <View style={styles.tabsContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'publicacoes' && styles.activeTab]}
            onPress={() => setActiveTab('publicacoes')}
          >
            <Ionicons 
              name="grid" 
              size={20} 
              color={activeTab === 'publicacoes' ? '#4576F2' : '#666'} 
            />
            <Text style={[styles.tabText, activeTab === 'publicacoes' && styles.activeTabText]}>
              Publicações
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'pulses' && styles.activeTab]}
            onPress={() => setActiveTab('pulses')}
          >
            <Ionicons 
              name="heart" 
              size={20} 
              color={activeTab === 'pulses' ? '#4576F2' : '#666'} 
            />
            <Text style={[styles.tabText, activeTab === 'pulses' && styles.activeTabText]}>
              Pulses
            </Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'mencoes' && styles.activeTab]}
            onPress={() => setActiveTab('mencoes')}
          >
            <Ionicons 
              name="people" 
              size={20} 
              color={activeTab === 'mencoes' ? '#4576F2' : '#666'} 
            />
            <Text style={[styles.tabText, activeTab === 'mencoes' && styles.activeTabText]}>
              Menções
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conteúdo das Tabs */}
        {renderTabContent()}
      </ScrollView>
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
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  saveButtonActive: {
    backgroundColor: '#4576F2',
  },
  optionsButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileHeader: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 20,
  },
  statsContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  profileInfo: {
    marginBottom: 20,
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
    marginRight: 8,
  },
  specialtyTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    alignSelf: 'flex-start',
    marginBottom: 12,
  },
  specialtyText: {
    fontSize: 14,
    color: '#4576F2',
    marginLeft: 6,
    fontWeight: '500',
  },
  bio: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 8,
  },
  seeMore: {
    color: '#4576F2',
    fontWeight: '500',
  },
  websiteLink: {
    marginBottom: 16,
  },
  websiteText: {
    fontSize: 14,
    color: '#4576F2',
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  followingButton: {
    flex: 1,
    backgroundColor: '#F0F2F5',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  followingText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  professionalButton: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  professionalText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  tabsContainer: {
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  tab: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    gap: 6,
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4576F2',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#4576F2',
    fontWeight: 'bold',
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 1,
  },
  postThumbnail: {
    width: '33.33%',
    aspectRatio: 1,
    padding: 1,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    borderRadius: 4,
  },
  pulsesContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  mentionsContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 60,
  },
  placeholderText: {
    fontSize: 16,
    color: '#999',
  },
});

export default UserProfile;
