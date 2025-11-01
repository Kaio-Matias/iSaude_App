import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const MyLikes = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('publications');

  const tabs = [
    { id: 'publications', label: 'Publicações' },
    { id: 'media', label: 'Mídia' },
    { id: 'saved', label: 'Salvos' },
  ];

  const posts = [
    {
      id: 1,
      author: {
        name: 'Jorge Zikanay',
        avatar: 'https://i.pravatar.cc/150?img=1',
        company: 'Academia FitHarmony',
      },
      time: 'Há 3 dias',
      content: 'Demonstração rápida de 3 exercícios para aliviar dor nas costas no home office.',
      image: 'https://i.pravatar.cc/300?img=2',
      comments: '8k Comentários',
      shares: '30k Compartilhamentos',
      likes: ['@joana.pinheiro', 'e outros 25k pessoas'],
      isSaved: false,
    },
    {
      id: 2,
      author: {
        name: 'Ana Paula Nutri',
        avatar: 'https://i.pravatar.cc/150?img=3',
        verified: true,
      },
      time: 'Há 21 horas',
      content: '5 ALIMENTOS QUE FORTALECEM SUA IMUNIDADE 💪',
      list: [
        'Laranja (Vitamina C) + Kiwi (Antioxidantes)',
        'Castanhas (Zinco) + Iogurte (Probióticos)',
      ],
      isSaved: true,
    },
  ];

  const renderPost = (post) => (
    <View key={post.id} style={styles.postCard}>
      {/* Header do post */}
      <View style={styles.postHeader}>
        <View style={styles.authorInfo}>
          <Image source={{ uri: post.author.avatar }} style={styles.authorAvatar} />
          <View style={styles.authorDetails}>
            <Text style={styles.authorName}>{post.author.name}</Text>
            {post.author.company && (
              <Text style={styles.authorCompany}>{post.author.company}</Text>
            )}
            <Text style={styles.postTime}>{post.time}</Text>
          </View>
        </View>
        <View style={styles.postActions}>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="bookmark" size={20} color={post.isSaved ? '#4267F6' : '#666'} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.actionButton}>
            <Icon name="ellipsis-vertical" size={20} color="#666" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Conteúdo do post */}
      <View style={styles.postContent}>
        <Text style={styles.postText}>{post.content}</Text>
        
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}
        
        {post.list && (
          <View style={styles.postList}>
            {post.list.map((item, index) => (
              <Text key={index} style={styles.listItem}>
                {index + 1}. {item}
              </Text>
            ))}
            <TouchableOpacity>
              <Text style={styles.seeMoreLink}>Ver mais</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>

      {/* Métricas e ações */}
      {post.comments && (
        <View style={styles.postMetrics}>
          <Text style={styles.metricsText}>{post.comments}</Text>
          <Text style={styles.metricsText}>{post.shares}</Text>
        </View>
      )}

      {/* Botões de ação */}
      <View style={styles.postActions}>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="heart" size={20} color="#FF3B30" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="chatbubble-outline" size={20} color="#666" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Icon name="paper-plane-outline" size={20} color="#666" />
        </TouchableOpacity>
        
        {post.likes && (
          <View style={styles.likesInfo}>
            <View style={styles.likesAvatars}>
              <Image source={{ uri: 'https://i.pravatar.cc/150?img=4' }} style={styles.likeAvatar} />
              <Image source={{ uri: 'https://i.pravatar.cc/150?img=5' }} style={styles.likeAvatar} />
              <Image source={{ uri: 'https://i.pravatar.cc/150?img=6' }} style={styles.likeAvatar} />
            </View>
            <Text style={styles.likesText}>{post.likes.join(' ')}</Text>
          </View>
        )}
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Minhas Curtidas</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Tabs */}
      <View style={styles.tabsContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab.id}
            style={[
              styles.tabButton,
              activeTab === tab.id && styles.tabButtonActive
            ]}
            onPress={() => setActiveTab(tab.id)}
          >
            <Text style={[
              styles.tabButtonText,
              activeTab === tab.id && styles.tabButtonTextActive
            ]}>
              {tab.label}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {posts.map(renderPost)}
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
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  headerRight: {
    width: 24,
  },
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F7',
    marginHorizontal: 16,
    marginVertical: 15,
    borderRadius: 8,
    padding: 4,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
  },
  tabButtonActive: {
    backgroundColor: '#4267F6',
  },
  tabButtonText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  tabButtonTextActive: {
    color: '#FFFFFF',
  },
  content: {
    flex: 1,
  },
  postCard: {
    backgroundColor: '#FFFFFF',
    marginBottom: 15,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  authorInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  authorAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 12,
  },
  authorDetails: {
    flex: 1,
  },
  authorName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  authorCompany: {
    fontSize: 14,
    color: '#666',
    marginBottom: 2,
  },
  postTime: {
    fontSize: 12,
    color: '#999',
  },
  postActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actionButton: {
    padding: 8,
    marginLeft: 8,
  },
  postContent: {
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  postText: {
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
    marginBottom: 15,
  },
  postImage: {
    width: '100%',
    height: 200,
    borderRadius: 8,
    marginBottom: 15,
  },
  postList: {
    marginBottom: 15,
  },
  listItem: {
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
    marginBottom: 8,
  },
  seeMoreLink: {
    fontSize: 14,
    color: '#4267F6',
    textDecorationLine: 'underline',
  },
  postMetrics: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 15,
  },
  metricsText: {
    fontSize: 14,
    color: '#666',
    marginRight: 20,
  },
  likesInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  likesAvatars: {
    flexDirection: 'row',
    marginRight: 8,
  },
  likeAvatar: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginLeft: -5,
    borderWidth: 1,
    borderColor: '#FFFFFF',
  },
  likesText: {
    fontSize: 12,
    color: '#666',
  },
});

export default MyLikes;
