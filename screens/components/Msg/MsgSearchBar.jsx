import React from 'react';
import { View, TextInput, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

export const MsgSearchBar = ({ 
  placeholder = "busque por contatos, mensagens e mais...",
  onChangeText,
  value 
}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.keyboardAvoidingView}
    >
      <View style={styles.searchBarContainer}>
        <TextInput
          placeholder={placeholder}
          style={styles.searchInput}
          placeholderTextColor="#a0a0a0"
          onChangeText={onChangeText}
          value={value}
          returnKeyType="search"
          blurOnSubmit={false}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  keyboardAvoidingView: {
    backgroundColor: 'white',
  },
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
