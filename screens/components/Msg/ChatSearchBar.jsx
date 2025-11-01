import React from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text } from 'react-native';

export const ChatSearchBar = ({ 
  value,
  onChangeText,
  onClose,
  onUp,
  onDown,
  onCalendar
}) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="buscar na conversa"
        style={styles.searchInput}
        placeholderTextColor="#8E8E93"
        value={value}
        onChangeText={onChangeText}
      />
      <View style={styles.actions}>
        <TouchableOpacity onPress={onUp} style={styles.actionButton}>
          <Text style={styles.actionIcon}>↑</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDown} style={styles.actionButton}>
          <Text style={styles.actionIcon}>↓</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onCalendar} style={styles.actionButton}>
          <Text style={styles.actionIcon}>📅</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onClose} style={styles.actionButton}>
          <Text style={styles.actionIcon}>✕</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: 'white',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  searchInput: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 8,
    fontSize: 16,
    marginRight: 8,
  },
  actions: {
    flexDirection: 'row',
  },
  actionButton: {
    marginLeft: 8,
    padding: 4,
  },
  actionIcon: {
    fontSize: 16,
    color: '#007AFF',
  },
});
