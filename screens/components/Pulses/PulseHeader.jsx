import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';

// Ícones
import PulseIcon from '../../../assets/pulsesIcons/pulses.svg';
import ADD from '../../../assets/pulsesIcons/ADD.svg'

const { width } = Dimensions.get('window');

const PulseHeader = () => {
  const navigation = useNavigation();

  const handleBack = () => {
    navigation.goBack();
  };

  const handleAdd = () => {
    console.log('Adicionar novo pulse');
  };

  return (
    <View style={styles.header}>
      {/* Botão voltar + título */}
      <View style={styles.leftSection}>
        <TouchableOpacity onPress={handleBack} style={styles.backButton}>
          <Text style={styles.backArrow}>‹</Text>
        </TouchableOpacity>

        <View style={styles.titleContainer}>
          <PulseIcon width={36} height={36} />
          <Text style={styles.title}>Pulses</Text>
        </View>
      </View>

      {/* Botão adicionar */}
      <TouchableOpacity onPress={handleAdd} >
        <ADD width={60} height={60} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 50,
    paddingBottom: 16,
    backgroundColor: 'transparent', // fundo totalmente transparente
  },
  leftSection: { flexDirection: 'row', alignItems: 'center' },
  backButton: { marginRight: 12 },
  backArrow: { fontSize: 32, color: '#fff', fontWeight: '300' },
  titleContainer: { flexDirection: 'row', alignItems: 'center' },
  title: { fontSize: 20, fontWeight: '600', color: '#fff', marginLeft: 8 },
  addButton: {
    width: 44,
    height: 44,
    backgroundColor: '#fff',
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addIcon: { fontSize: 26, color: '#000', fontWeight: 'bold' },
});

export default PulseHeader;
