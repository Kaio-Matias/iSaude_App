import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyProfile = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('publicacoes');

  // Dados mockados do usuário logado
  const user = {
    name: 'Carlos Magno',
    username: '@carlos.magno',
    avatar: 'https://i.pravatar.cc/150?img=12',
    bio: 'Clínica geral com 15 anos de experiência formada pela UNIFESP. Minha abordagem une medicina baseada em evidências a um atendimento humanizado, onde cada paciente é ouvido com atenção para construirmos juntos um plano de saúde preventivo e realista.',
    stats: {
      posts: 2,
      followers: 892,
      following: 4723
    }
  };

  const handleEditProfile = () => {
    navigation.navigate('EditProfile');
  };

  const handleShare = () => {
    // Implementar compartilhamento
    console.log('Compartilhar perfil');
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'publicacoes':
        return (
          <View style={styles.postsGrid}>
            {/* Grid de posts - placeholder */}
            {[1, 2].map((item) => (
              <View key={item} style={styles.postThumbnail}>
                <Image 
                  source={{ uri: `https://picsum.photos/200/200?random=${item}` }} 
                  style={styles.thumbnailImage}
                />
              </View>
            ))}
          </View>
        );
      case 'midias':
        return (
          <View style={styles.placeholderContent}>
            <Text style={styles.placeholderText}>Mídias em breve...</Text>
          </View>
        );
      case 'mencoes':
        return (
          <View style={styles.placeholderContent}>
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
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerUsername}>{user.username}</Text>
        <TouchableOpacity onPress={() => navigation.navigate('ProfileOptions')}>
          <Icon name="menu" size={24} color="#000" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Seção do Perfil */}
        <View style={styles.profileSection}>
          <View style={styles.profileImageContainer}>
            <Image source={{ uri: user.avatar }} style={styles.profileImage} />
            <TouchableOpacity style={styles.addStoryButton}>
              <Icon name="add" size={20} color="#fff" />
            </TouchableOpacity>
          </View>

          <View style={styles.profileStats}>
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

        {/* Informações do Usuário */}
        <View style={styles.userInfo}>
          <Text style={styles.userName}>{user.name}</Text>
          <Text style={styles.userBio} numberOfLines={3}>
            {user.bio}
            <Text style={styles.seeMore} onPress={() => navigation.navigate('EditBio')}> Ver mais</Text>
          </Text>
        </View>

        {/* Botões de Ação */}
        <View style={styles.actionButtons}>
          <TouchableOpacity style={styles.editButton} onPress={handleEditProfile}>
            <Text style={styles.editButtonText}>Editar Perfil</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.shareButton} onPress={handleShare}>
            <Text style={styles.shareButtonText}>Compartilhar</Text>
          </TouchableOpacity>
        </View>

        {/* Abas de Navegação */}
        <View style={styles.tabContainer}>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'publicacoes' && styles.activeTab]}
            onPress={() => setActiveTab('publicacoes')}
          >
            <Text style={[styles.tabText, activeTab === 'publicacoes' && styles.activeTabText]}>
              Publicações
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'midias' && styles.activeTab]}
            onPress={() => setActiveTab('midias')}
          >
            <Text style={[styles.tabText, activeTab === 'midias' && styles.activeTabText]}>
              Mídias
            </Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={[styles.tab, activeTab === 'mencoes' && styles.activeTab]}
            onPress={() => setActiveTab('mencoes')}
          >
            <Text style={[styles.tabText, activeTab === 'mencoes' && styles.activeTabText]}>
              Menções
            </Text>
          </TouchableOpacity>
        </View>

        {/* Conteúdo das Abas */}
        <View style={styles.tabContent}>
          {renderTabContent()}
        </View>
      </ScrollView>

      {/* Floating Action Button */}
      <TouchableOpacity 
        style={styles.fab}
        onPress={() => navigation.navigate('CreatePost')}
      >
        <Icon name="add" size={30} color="#fff" />
      </TouchableOpacity>
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  backButton: {
    padding: 5,
  },
  headerUsername: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: 'center',
  },
  profileImageContainer: {
    position: 'relative',
  },
  profileImage: {
    width: 87,
    height: 85,
    borderRadius: 40,
    borderWidth: 3.5,
    borderColor: '#4267F6',
  },
  addStoryButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    width: 30,
    height: 30,
    borderRadius: 15,
    backgroundColor: '#4267F6',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#fff',
  },
  profileStats: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 20,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
    marginTop: 2,
  },
  userInfo: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 5,
  },
  userBio: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  seeMore: {
    color: '#4267F6',
    fontWeight: '500',
    textDecorationLine: 'underline',
  },
  actionButtons: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    paddingBottom: 20,
    gap: 10,
  },
  editButton: {
    flex: 1,
    backgroundColor: '#4267F6',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  editButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '600',
  },
  shareButton: {
    flex: 1,
    backgroundColor: '#fff',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  shareButtonText: {
    color: '#4267F6',
    fontSize: 14,
    fontWeight: '600',
  },
  tabContainer: {
    flexDirection: 'row',
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  tab: {
    flex: 1,
    paddingVertical: 15,
    alignItems: 'center',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#4267F6',
  },
  tabText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#4267F6',
    fontWeight: '600',
  },
  tabContent: {
    flex: 1,
    paddingTop: 20,
  },
  postsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 20,
    gap: 2,
  },
  postThumbnail: {
    width: '48%',
    aspectRatio: 1,
    marginBottom: 2,
  },
  thumbnailImage: {
    width: '100%',
    height: '100%',
    borderRadius: 8,
  },
  placeholderContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 50,
  },
  placeholderText: {
    fontSize: 16,
    color: '#666',
  },
  fab: {
    position: 'absolute',
    bottom: 120,
    right: 20,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#4267F6',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

export default MyProfile;
