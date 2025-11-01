import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const EmptyConversations = ({ 
  title = "Vamos iniciar uma conversa?",
  description = "Este é um lugar reservado para trocas significativas sobre sua saúde e se conectar com outras pessoas."
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.illustrationContainer}>
        {/* Smartphone illustration */}
        <View style={styles.smartphone}>
          <View style={styles.screen}>
            <View style={styles.chatBubble1} />
            <View style={styles.chatBubble2} />
            <View style={styles.chatBubble3} />
          </View>
        </View>
        
        {/* People illustrations */}
        <View style={styles.person1}>
          <View style={styles.head1} />
          <View style={styles.body1} />
          <View style={styles.phone1} />
        </View>
        
        <View style={styles.person2}>
          <View style={styles.head2} />
          <View style={styles.body2} />
          <View style={styles.phone2} />
        </View>
      </View>
      
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 32,
    backgroundColor: 'white',
  },
  illustrationContainer: {
    width: 200,
    height: 200,
    marginBottom: 32,
    position: 'relative',
  },
  smartphone: {
    position: 'absolute',
    top: 50,
    left: 50,
    width: 100,
    height: 120,
    backgroundColor: '#E3F2FD',
    borderRadius: 20,
    borderWidth: 3,
    borderColor: '#BBDEFB',
  },
  screen: {
    flex: 1,
    margin: 8,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    padding: 8,
  },
  chatBubble1: {
    width: 30,
    height: 20,
    backgroundColor: '#007AFF',
    borderRadius: 10,
    marginBottom: 4,
  },
  chatBubble2: {
    width: 25,
    height: 15,
    backgroundColor: '#E5E5EA',
    borderRadius: 8,
    marginBottom: 4,
    alignSelf: 'flex-end',
  },
  chatBubble3: {
    width: 35,
    height: 18,
    backgroundColor: '#007AFF',
    borderRadius: 9,
  },
  person1: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  head1: {
    width: 20,
    height: 20,
    backgroundColor: '#FFB74D',
    borderRadius: 10,
  },
  body1: {
    width: 16,
    height: 30,
    backgroundColor: '#007AFF',
    borderRadius: 8,
    marginTop: 2,
  },
  phone1: {
    position: 'absolute',
    right: -8,
    top: 15,
    width: 8,
    height: 12,
    backgroundColor: '#424242',
    borderRadius: 2,
  },
  person2: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  head2: {
    width: 18,
    height: 18,
    backgroundColor: '#A1887F',
    borderRadius: 9,
  },
  body2: {
    width: 14,
    height: 25,
    backgroundColor: '#424242',
    borderRadius: 7,
    marginTop: 2,
  },
  phone2: {
    position: 'absolute',
    left: -6,
    top: 12,
    width: 6,
    height: 10,
    backgroundColor: '#424242',
    borderRadius: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1C1C1E',
    textAlign: 'center',
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: '#8E8E93',
    textAlign: 'center',
    lineHeight: 24,
  },
});
