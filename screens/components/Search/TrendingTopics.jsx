// components/TrendingTopics.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';

export const TrendingTopics = ({ topics, onTopicPress }) => {
  const defaultTopics = [
    { 
      name: '#nutricionistas', 
      count: '26K publicações',
      image: 'https://images.unsplash.com/photo-1490818387583-1baba5e638af?q=80&w=400&auto=format&fit=crop'
    },
    { 
      name: '#SaúdeporAmor', 
      count: '12K publicações',
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=400&auto=format&fit=crop'
    },
    { 
      name: '#psicologos', 
      count: '8K publicações',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?q=80&w=400&auto=format&fit=crop'
    },
    { 
      name: '#amor', 
      count: '3K publicações',
      image: 'https://images.unsplash.com/photo-1518199266791-5375a83190b7?q=80&w=400&auto=format&fit=crop'
    },
  ];

  const topicsToRender = topics || defaultTopics;

  return (
    <View style={styles.trendingContainer}>
      <Text style={styles.trendingTitle}>Assuntos em alta</Text>
      {topicsToRender.map((topic, index) => (
        <TouchableOpacity 
          key={index} 
          style={styles.topicItem}
          onPress={() => onTopicPress && onTopicPress(topic)}
        >
          <Image 
            source={{ uri: topic.image }} 
            style={styles.topicImage}
          />
          <View style={styles.topicContent}>
            <Text style={styles.topicName}>{topic.name}</Text>
            <Text style={styles.topicCount}>{topic.count}</Text>
          </View>
          <TouchableOpacity style={styles.viewButton}>
            <Text style={styles.viewPublications}>Ver</Text>
          </TouchableOpacity>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  trendingContainer: {
    marginTop: 12,
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    paddingVertical: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  trendingTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 12,
    paddingHorizontal: 16,
    color: '#1C1C1E',
  },
  topicItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 0.5,
    borderBottomColor: '#E5E5EA',
  },
  topicImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 12,
  },
  topicContent: {
    flex: 1,
  },
  topicName: {
    fontWeight: '600',
    fontSize: 16,
    color: '#1C1C1E',
    marginBottom: 2,
  },
  topicCount: {
    fontSize: 13,
    color: '#8E8E93',
  },
  viewButton: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    backgroundColor: '#F2F2F7',
  },
  viewPublications: {
    fontSize: 14,
    color: '#007AFF',
    fontWeight: '500',
  },
});