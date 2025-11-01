import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const CallStatus = ({ status, time, isReceived = true }) => {
  const getStatusColor = () => {
    if (isReceived) return '#34C759'; // Green for received
    return '#FF3B30'; // Red for ended
  };

  const getStatusIcon = () => {
    if (isReceived) return '📞';
    return '📞❌';
  };

  return (
    <View style={[styles.container, { backgroundColor: getStatusColor() }]}>
      <View style={styles.content}>
        <Text style={styles.icon}>{getStatusIcon()}</Text>
        <Text style={styles.statusText}>
          {isReceived ? 'Chamada Recebida' : 'Chamada Finalizada'}
        </Text>
        <Text style={styles.timeText}>{time}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    fontSize: 20,
  },
  statusText: {
    flex: 1,
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
    marginLeft: 12,
  },
  timeText: {
    fontSize: 16,
    fontWeight: '500',
    color: 'white',
  },
});
