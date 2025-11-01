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

const Notifications = () => {
  const navigation = useNavigation();
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'Todas' },
    { id: 'mentions', label: 'Menções' },
    { id: 'comments', label: 'Comentários' },
    { id: 'followers', label: 'Seguidores' },
    { id: 'likes', label: 'Curtidas' },
  ];

  const notifications = [
    {
      id: 1,
      type: 'like',
      user: {
        name: 'João Silva',
        avatar: 'https://i.pravatar.cc/150?img=12',
      },
      action: 'curtiu sua publicação',
      time: 'Há 2 minutos',
      postImage: 'https://i.pravatar.cc/150?img=13',
    },
    {
      id: 2,
      type: 'comment',
      user: {
        name: 'Maria Santos',
        avatar: 'https://i.pravatar.cc/150?img=14',
      },
      action: 'comentou: "Muito bom!"',
      time: 'Há 5 minutos',
      postImage: 'https://i.pravatar.cc/150?img=15',
    },
    {
      id: 3,
      type: 'follow',
      user: {
        name: 'Pedro Costa',
        avatar: 'https://i.pravatar.cc/150?img=16',
      },
      action: 'começou a seguir você',
      time: 'Há 10 minutos',
    },
    {
      id: 4,
      type: 'mention',
      user: {
        name: 'Ana Oliveira',
        avatar: 'https://i.pravatar.cc/150?img=17',
      },
      action: 'mencionou você em um comentário',
      time: 'Há 15 minutos',
      postImage: 'https://i.pravatar.cc/150?img=18',
    },
  ];

  const getNotificationIcon = (type) => {
    const icons = {
      like: { name: 'heart', color: '#FF3B30' },
      comment: { name: 'chatbubble', color: '#4267F6' },
      follow: { name: 'person-add', color: '#34C759' },
      mention: { name: 'at', color: '#FF9500' },
    };
    return icons[type] || { name: 'notifications', color: '#666' };
  };

  const renderNotification = (notification) => {
    const icon = getNotificationIcon(notification.type);
    
    return (
      <TouchableOpacity key={notification.id} style={styles.notificationItem}>
        <Image source={{ uri: notification.user.avatar }} style={styles.userAvatar} />
        
        <View style={styles.notificationContent}>
          <View style={styles.notificationText}>
            <Text style={styles.userName}>{notification.user.name}</Text>
            <Text style={styles.actionText}> {notification.action}</Text>
          </View>
          <Text style={styles.timeText}>{notification.time}</Text>
        </View>

        <View style={styles.notificationRight}>
          <Icon name={icon.name} size={20} color={icon.color} />
          {notification.postImage && (
            <Image source={{ uri: notification.postImage }} style={styles.postImage} />
          )}
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Notificações</Text>
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
        {notifications.map(renderNotification)}
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
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F7',
    marginHorizontal: 20,
    marginVertical: 15,
    borderRadius: 8,
    padding: 4,
    justifyContent: 'space-between',
  },
  tabButton: {
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 6,
    alignItems: 'center',
    minWidth: 80,
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
  notificationItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  userAvatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 15,
  },
  notificationContent: {
    flex: 1,
  },
  notificationText: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 4,
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
  },
  actionText: {
    fontSize: 14,
    color: '#666',
  },
  timeText: {
    fontSize: 12,
    color: '#999',
  },
  notificationRight: {
    alignItems: 'center',
    marginLeft: 15,
  },
  postImage: {
    width: 40,
    height: 40,
    borderRadius: 8,
    marginTop: 8,
  },
});

export default Notifications;
