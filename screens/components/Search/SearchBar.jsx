// components/SearchBar.js
import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

export const SearchBar = ({ 
  placeholder = "Busque por pessoas, assuntos e muito mais...",
  onChangeText,
  value 
}) => (
  <View style={styles.searchBarContainer}>
    <TextInput
      placeholder={placeholder}
      style={styles.searchInput}
      placeholderTextColor="#a0a0a0"
      onChangeText={onChangeText}
      value={value}
    />
  </View>
);

const styles = StyleSheet.create({
  searchBarContainer: {
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: 'white',
  },
  searchInput: {
    backgroundColor: '#F2F2F7',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
});