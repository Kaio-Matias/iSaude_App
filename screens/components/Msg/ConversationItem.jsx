import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { useProfileNavigation, extractUserData } from '../../utils/profileNavigation';

export const ConversationItem = ({ 
  conversation, 
  onPress 
}) => {
  const { navigateToProfile } = useProfileNavigation();
  
  const {
    id,
    name,
    profileImage,
    lastMessage,
    timestamp,
    unreadCount,
    isVerified,
    status,
    isActiveCall
  } = conversation;

  const handleProfilePress = () => {
    const userData = extractUserData(conversation);
    navigateToProfile(userData);
  };

  return (
    <TouchableOpacity style={styles.conversationItem} onPress={() => onPress(conversation)}>
      <TouchableOpacity onPress={handleProfilePress}>
        <Image 
          source={{ uri: profileImage }} 
          style={styles.profileImage}
        />
      </TouchableOpacity>
      
              <View style={styles.contentContainer}>
          <View style={styles.headerRow}>
            <TouchableOpacity onPress={handleProfilePress}>
              <Text style={styles.name}>{name}</Text>
            </TouchableOpacity>
            {isVerified && (
              <View style={styles.verifiedBadge}>
                <Text style={styles.verifiedText}>✓</Text>
              </View>
            )}
            <Text style={styles.timestamp}>{timestamp}</Text>
          </View>
        
        <View style={styles.messageRow}>
          {isActiveCall ? (
            <Text style={styles.activeCallText}>{status}</Text>
          ) : (
            <Text style={styles.lastMessage} numberOfLines={1}>
              {lastMessage}
            </Text>
          )}
          
          {unreadCount > 0 && (
            <View style={styles.unreadBadge}>
              <Text style={styles.unreadCount}>{unreadCount}</Text>
            </View>
          )}
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  conversationItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  name: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1C1C1E',
    flex: 1,
  },
  verifiedBadge: {
    backgroundColor: '#34C759',
    borderRadius: 8,
    width: 16,
    height: 16,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 8,
  },
  verifiedText: {
    color: 'white',
    fontSize: 10,
    fontWeight: 'bold',
  },
  timestamp: {
    fontSize: 12,
    color: '#8E8E93',
  },
  messageRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lastMessage: {
    fontSize: 14,
    color: '#8E8E93',
    flex: 1,
  },
  activeCallText: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
    flex: 1,
  },
  unreadBadge: {
    backgroundColor: '#007AFF',
    borderRadius: 10,
    minWidth: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft: 8,
  },
  unreadCount: {
    color: 'white',
    fontSize: 12,
    fontWeight: '600',
  },
});
