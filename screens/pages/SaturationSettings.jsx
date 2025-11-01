import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const SaturationSettings = () => {
  const navigation = useNavigation();
  const [selectedSaturation, setSelectedSaturation] = useState('standard');

  const saturationOptions = [
    { id: 'standard', name: 'Saturação Padrão', icon: 'color-palette' },
    { id: 'high', name: 'Saturação Alta', icon: 'color-palette' },
    { id: 'low', name: 'Saturação Baixa', icon: 'color-palette' },
    { id: 'monochrome', name: 'Saturação Monocromática', icon: 'color-palette' },
  ];

  const handleSaturationSelect = (saturationId) => {
    setSelectedSaturation(saturationId);
  };

  const renderInfoField = (icon, label, value, isSelected = false) => (
    <TouchableOpacity
      style={styles.infoField}
      onPress={() => handleSaturationSelect(value)}
    >
      <View style={styles.fieldLeft}>
        <Icon name={icon} size={20} color="#4267F6" />
        <View style={styles.fieldContent}>
          <Text style={styles.fieldLabel}>{label}</Text>
        </View>
      </View>
      <View style={styles.radioButton}>
        {isSelected && (
          <View style={styles.radioButtonSelected} />
        )}
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Saturação</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Card principal */}
        <View style={styles.mainCard}>
          {saturationOptions.map((option) => (
            <View key={option.id} style={styles.infoField}>
              <View style={styles.fieldLeft}>
                <Icon name={option.icon} size={20} color="#4267F6" />
                <View style={styles.fieldContent}>
                  <Text style={styles.fieldLabel}>{option.name}</Text>
                </View>
              </View>
              <TouchableOpacity onPress={() => handleSaturationSelect(option.id)}>
                <View style={styles.radioButton}>
                  {selectedSaturation === option.id && (
                    <View style={styles.radioButtonSelected} />
                  )}
                </View>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  headerRight: {
    width: 24,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  mainCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  infoField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  fieldLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  fieldContent: {
    marginLeft: 15,
    flex: 1,
  },
  fieldLabel: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  radioButton: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#4267F6',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radioButtonSelected: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#4267F6',
  },
});

export default SaturationSettings;


