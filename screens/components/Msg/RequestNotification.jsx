import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const RequestNotification = ({ count = 1 }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.notificationText}>
        Você possui {count} nova{count > 1 ? 's' : ''} solicitação{count > 1 ? 'ões' : ''} de mensagem
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  notificationText: {
    fontSize: 14,
    color: '#8E8E93',
    textAlign: 'center',
  },
});
