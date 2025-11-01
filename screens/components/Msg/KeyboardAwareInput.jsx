import React, { useState, useEffect } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text, Keyboard, Platform, Animated } from 'react-native';

export const KeyboardAwareInput = ({ 
  value, 
  onChangeText, 
  onSend, 
  onAttachment,
  placeholder = "Digite sua mensagem aqui"
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const [keyboardHeight] = useState(new Animated.Value(0));

  useEffect(() => {
    const keyboardWillShow = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillShow' : 'keyboardDidShow',
      (event) => {
        Animated.timing(keyboardHeight, {
          toValue: event.endCoordinates.height,
          duration: Platform.OS === 'ios' ? event.duration : 0,
          useNativeDriver: false,
        }).start();
      }
    );

    const keyboardWillHide = Keyboard.addListener(
      Platform.OS === 'ios' ? 'keyboardWillHide' : 'keyboardDidHide',
      () => {
        Animated.timing(keyboardHeight, {
          toValue: 0,
          duration: Platform.OS === 'ios' ? 250 : 0,
          useNativeDriver: false,
        }).start();
      }
    );

    return () => {
      keyboardWillShow.remove();
      keyboardWillHide.remove();
    };
  }, [keyboardHeight]);

  return (
    <Animated.View 
      style={[
        styles.container,
        {
          bottom: keyboardHeight,
        }
      ]}
    >
      <View style={styles.inputContainer}>
        <TouchableOpacity onPress={onAttachment} style={styles.attachmentButton}>
          <Text style={styles.attachmentIcon}>📎</Text>
        </TouchableOpacity>
        
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#8E8E93"
          value={value}
          onChangeText={onChangeText}
          multiline
          maxLength={1000}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          returnKeyType="default"
          blurOnSubmit={false}
        />
        
        <TouchableOpacity 
          onPress={onSend} 
          style={[styles.sendButton, value.trim() ? styles.sendButtonActive : styles.sendButtonInactive]}
          disabled={!value.trim()}
        >
          <Text style={styles.sendIcon}>📤</Text>
        </TouchableOpacity>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    borderTopWidth: 1,
    borderTopColor: '#e0e0e0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 8,
    paddingBottom: 16,
    backgroundColor: 'white',
  },
  attachmentButton: {
    marginRight: 12,
    padding: 8,
  },
  attachmentIcon: {
    fontSize: 20,
    color: '#007AFF',
  },
  input: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    maxHeight: 100,
    minHeight: 40,
  },
  sendButton: {
    marginLeft: 12,
    padding: 8,
    borderRadius: 20,
  },
  sendButtonActive: {
    backgroundColor: '#007AFF',
  },
  sendButtonInactive: {
    backgroundColor: '#E5E5EA',
  },
  sendIcon: {
    fontSize: 20,
    color: 'white',
  },
});
