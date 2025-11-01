import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export function PermissionButtons({ onAllow, onDeny }) {
  return (
    <View style={styles.buttomContent}>
      <TouchableOpacity onPress={onAllow} style={styles.buttom}>
        <Text style={styles.buttonText}>Permitir</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={onDeny}>
        <Text style={styles.secondaryButtonText}>Deixar pra depois!</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  buttomContent: {
    width: '100%',
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 30,
    marginBottom: 70,
  },
  buttom: {
    width: 350,
    height: 50,
    backgroundColor: '#4576F2',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  secondaryButtonText: {
    color: '#4576F2',
    fontSize: 18,
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
