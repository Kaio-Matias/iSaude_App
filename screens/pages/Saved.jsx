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

const Saved = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('publications');

  const tabs = [
    { id: 'publications', label: 'Publicações' },
    { id: 'profile', label: 'Perfil' },
    { id: 'pulse', label: 'Pulse' },
  ];

  const posts = [
    {
      id: 1,
      author: {
        name: 'Dr. Welter Alencar',
        avatar: 'https://i.pravatar.cc/150?img=7',
        company: 'Hospital Saúde',
      },
      time: 'Há 3 Dias',
      content: 'Passando aqui para desejar um feliz dia do paciente para todos vocês.',
      content2: 'Vocês fazem parte da nossa família!',
      image: 'https://i.pravatar.cc/300?img=8',
      comments: '3k Comentários',
      shares: '32k Compartilhamentos',
      likes: ['Dr. Welter', 'e outros 234 pessoas'],
      isSaved: true,
      isLiked: true,
    },
    {
      id: 2,
      author: {
        name: 'Dr. Welter Alencar',
        avatar: 'https://i.pravatar.cc/150?img=7',
        company: 'Hospital Saúde',
      },
      time: 'Há 3 Dias',
      content: 'Passando aqui para desejar um feliz dia do paciente para todos vocês...',
      isSaved: true,
    },
  ];

  const comments = [
    {
      id: 1,
      author: {
        name: 'Jamile Correa',
        avatar: 'https://i.pravatar.cc/150?img=9',
      },
      content: 'Parabéns a todos nós! kkkkk',
      time: 'Há 3 Dias',
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
        {post.content2 && (
          <Text style={styles.postText}>{post.content2}</Text>
        )}
        
        {post.image && (
          <View style={styles.imageContainer}>
            <Image source={{ uri: post.image }} style={styles.postImage} />
            <View style={styles.imageDots}>
              <View style={[styles.dot, styles.dotActive]} />
              <View style={styles.dot} />
              <View style={styles.dot} />
            </View>
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
          <Icon name="heart" size={20} color={post.isLiked ? '#FF3B30' : '#666'} />
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
              <Image source={{ uri: post.author.avatar }} style={styles.likeAvatar} />
              <Image source={{ uri: 'https://i.pravatar.cc/150?img=10' }} style={styles.likeAvatar} />
              <Image source={{ uri: 'https://i.pravatar.cc/150?img=11' }} style={styles.likeAvatar} />
            </View>
            <Text style={styles.likesText}>{post.likes.join(' ')}</Text>
          </View>
        )}
      </View>

      {/* Comentários */}
      {post.id === 1 && comments.map((comment) => (
        <View key={comment.id} style={styles.commentSection}>
          <View style={styles.commentHeader}>
            <Image source={{ uri: comment.author.avatar }} style={styles.commentAvatar} />
            <View style={styles.commentInfo}>
              <Text style={styles.commentAuthor}>{comment.author.name}</Text>
              <Text style={styles.commentTime}>{comment.time}</Text>
            </View>
          </View>
          <Text style={styles.commentText}>{comment.content}</Text>
          <View style={styles.commentActions}>
            <TouchableOpacity style={styles.commentAction}>
              <Text style={styles.commentActionText}>Curtir</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.commentAction}>
              <Text style={styles.commentActionText}>Responder</Text>
            </TouchableOpacity>
          </View>
        </View>
      ))}
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
        <Text style={styles.headerTitle}>Salvos</Text>
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
    marginBottom: 8,
  },
  imageContainer: {
    position: 'relative',
    marginTop: 15,
  },
  postImage: {
    width: '100%',
    height: 300,
    borderRadius: 8,
  },
  imageDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 15,
    left: 0,
    right: 0,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#FFFFFF',
    width: 10,
    height: 10,
    borderRadius: 5,
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
  commentSection: {
    paddingHorizontal: 16,
    paddingTop: 15,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  commentHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  commentAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    marginRight: 12,
  },
  commentInfo: {
    flex: 1,
  },
  commentAuthor: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginBottom: 2,
  },
  commentTime: {
    fontSize: 12,
    color: '#999',
  },
  commentText: {
    fontSize: 14,
    color: '#000',
    lineHeight: 20,
    marginBottom: 8,
    marginLeft: 44,
  },
  commentActions: {
    flexDirection: 'row',
    marginLeft: 44,
  },
  commentAction: {
    marginRight: 20,
  },
  commentActionText: {
    fontSize: 12,
    color: '#666',
  },
});

export default Saved;
