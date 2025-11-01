import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  TextInput,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const HealthInfo = () => {
  const navigation = useNavigation();
  const [healthData, setHealthData] = useState({
    height: '1.75',
    weight: '70',
    bloodPressure: {
      systolic: '12',
      diastolic: '08',
    },
    hasChronicDiseases: 'Sim',
    chronicDiseases: ['Diabetes'],
    hasAllergies: 'Sim',
    allergies: ['Glúten'],
    hasSurgeries: 'Sim',
    surgeries: ['Glúten'], // Placeholder, deveria ser tipo de cirurgia
  });

  const handleSaveInfo = () => {
    // Aqui você pode implementar a lógica para salvar as informações
    console.log('Informações salvas:', healthData);
    navigation.goBack();
  };

  const updateField = (field, value) => {
    setHealthData(prev => ({
      ...prev,
      [field]: value,
    }));
  };

  const updateBloodPressure = (type, value) => {
    setHealthData(prev => ({
      ...prev,
      bloodPressure: {
        ...prev.bloodPressure,
        [type]: value,
      },
    }));
  };

  const renderSection = (title, description, children) => (
    <View style={styles.section}>
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>{title}</Text>
        <Icon name="chevron-down" size={20} color="#666" />
      </View>
      <Text style={styles.sectionDescription}>{description}</Text>
      {children}
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Icon name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Minhas Informações de Saúde</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Dados Básicos */}
        {renderSection(
          'Dados Básicos',
          'Forneça informações básicas sobre você para auxiliar em seus exames.',
          <View style={styles.fieldsContainer}>
            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Qual sua Altura?</Text>
              <TextInput
                style={styles.inputField}
                value={healthData.height}
                onChangeText={(value) => updateField('height', value)}
                placeholder="Ex. 1.75"
                placeholderTextColor="#8E8E93"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Qual seu Peso?</Text>
              <TextInput
                style={styles.inputField}
                value={healthData.weight}
                onChangeText={(value) => updateField('weight', value)}
                placeholder="Ex. 70"
                placeholderTextColor="#8E8E93"
                keyboardType="numeric"
              />
            </View>

            <View style={styles.fieldContainer}>
              <Text style={styles.fieldLabel}>Qual sua Pressão Arterial média?</Text>
              <View style={styles.bloodPressureContainer}>
                <TextInput
                  style={styles.bloodPressureInput}
                  value={healthData.bloodPressure.systolic}
                  onChangeText={(value) => updateBloodPressure('systolic', value)}
                  placeholder="12"
                  placeholderTextColor="#8E8E93"
                  keyboardType="numeric"
                />
                <Text style={styles.bloodPressureSeparator}>/</Text>
                <TextInput
                  style={styles.bloodPressureInput}
                  value={healthData.bloodPressure.diastolic}
                  onChangeText={(value) => updateBloodPressure('diastolic', value)}
                  placeholder="08"
                  placeholderTextColor="#8E8E93"
                  keyboardType="numeric"
                />
                <Text style={styles.bloodPressureUnit}>mmHg</Text>
              </View>
            </View>
          </View>
        )}

        {/* Doenças Crônicas */}
        {renderSection(
          'Doenças Crônicas',
          'Forneça informações sobre doenças crônicas que você possa possuir, como diabetes, hipertensão, hiv entre outras...',
          <View style={styles.fieldsContainer}>
            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.hasChronicDiseases}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.chronicDiseases.join(', ')}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <Text style={styles.fieldInstruction}>
              É possível selecionar mais de uma doença.
            </Text>
          </View>
        )}

        {/* Alergias */}
        {renderSection(
          'Alergias',
          'Forneça informações sobre alergias que você possa possuir, como alimentar, poeira, pelo de animais entre outras...',
          <View style={styles.fieldsContainer}>
            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.hasAllergies}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.allergies.join(', ')}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <Text style={styles.fieldInstruction}>
              É possível selecionar mais de uma alergia.
            </Text>
          </View>
        )}

        {/* Cirurgias */}
        {renderSection(
          'Cirurgias',
          'Forneça informações sobre alergias que você possa possuir, como alimentar, poeira, pelo de animais entre outras...',
          <View style={styles.fieldsContainer}>
            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.hasSurgeries}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.surgeries.join(', ')}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>

            <Text style={styles.fieldInstruction}>
              É possível selecionar mais de uma cirurgia.
            </Text>
          </View>
        )}
      </ScrollView>

      {/* Botão de Salvar */}
      <TouchableOpacity style={styles.saveButton} onPress={handleSaveInfo}>
        <Text style={styles.saveButtonText}>Salvar Informações</Text>
      </TouchableOpacity>
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
  backButton: {
    padding: 5,
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
  section: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  sectionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 20,
  },
  fieldsContainer: {
    gap: 15,
  },
  fieldContainer: {
    gap: 8,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  inputField: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    color: '#000',
  },
  bloodPressureContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  bloodPressureInput: {
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    fontSize: 16,
    color: '#000',
    width: 60,
    textAlign: 'center',
  },
  bloodPressureSeparator: {
    fontSize: 18,
    color: '#666',
    fontWeight: '500',
  },
  bloodPressureUnit: {
    fontSize: 14,
    color: '#666',
    marginLeft: 5,
  },
  selectableField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 15,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  selectableFieldText: {
    fontSize: 16,
    color: '#000',
  },
  fieldInstruction: {
    fontSize: 12,
    color: '#666',
    fontStyle: 'italic',
    marginTop: 5,
  },
  saveButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default HealthInfo;
