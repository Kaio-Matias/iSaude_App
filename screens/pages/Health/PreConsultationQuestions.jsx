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
  Image,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const PreConsultationQuestions = () => {
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

  const handleSend = () => {
    // Aqui você pode implementar a lógica para enviar as respostas
    console.log('Respostas enviadas:', healthData);
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
        <Text style={styles.headerTitle}>Perguntas Pré-Consulta</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Informações do Médico */}
        <View style={styles.doctorCard}>
          <Image source={{ uri: 'https://i.pravatar.cc/150?img=3' }} style={styles.doctorAvatar} />
          <View style={styles.doctorInfo}>
            <View style={styles.doctorNameContainer}>
              <Text style={styles.doctorName}>Dra. Maria Glenda</Text>
              <Icon name="checkmark-circle" size={16} color="#4CAF50" />
            </View>
            <Text style={styles.doctorSpecialty}>Clínico Geral</Text>
          </View>
          <View style={styles.consultationType}>
            <Text style={styles.consultationTypeText}>Consulta Geral</Text>
            <View style={styles.consultationDot} />
          </View>
        </View>

        {/* Formulário de Perguntas */}
        <View style={styles.formContainer}>
          {/* Altura */}
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

          {/* Peso */}
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

          {/* Pressão Arterial */}
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

          {/* Doenças Crônicas */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Você possui alguma doença crônica?</Text>
            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.hasChronicDiseases}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Quais</Text>
            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.chronicDiseases.join(', ')}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
            <Text style={styles.fieldInstruction}>
              É possível selecionar mais de uma doença.
            </Text>
          </View>

          {/* Alergias */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Você possui alguma alergia?</Text>
            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.hasAllergies}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Quais</Text>
            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.allergies.join(', ')}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
            <Text style={styles.fieldInstruction}>
              É possível selecionar mais de uma alergia.
            </Text>
          </View>

          {/* Cirurgias */}
          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Você já realizou alguma cirurgia?</Text>
            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.hasSurgeries}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
          </View>

          <View style={styles.fieldContainer}>
            <Text style={styles.fieldLabel}>Quais</Text>
            <TouchableOpacity style={styles.selectableField}>
              <Text style={styles.selectableFieldText}>{healthData.surgeries.join(', ')}</Text>
              <Icon name="chevron-forward" size={20} color="#666" />
            </TouchableOpacity>
            <Text style={styles.fieldInstruction}>
              É possível selecionar mais de uma cirurgia.
            </Text>
          </View>
        </View>
      </ScrollView>

      {/* Botão de Enviar */}
      <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
        <Text style={styles.sendButtonText}>Enviar</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 15,
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
  doctorCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 30,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  doctorAvatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 15,
  },
  doctorInfo: {
    flex: 1,
  },
  doctorNameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 5,
  },
  doctorName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  doctorSpecialty: {
    fontSize: 14,
    color: '#666',
  },
  consultationType: {
    alignItems: 'center',
  },
  consultationTypeText: {
    fontSize: 14,
    color: '#4CAF50',
    marginBottom: 5,
  },
  consultationDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#4CAF50',
  },
  formContainer: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 20,
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
  sendButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 18,
    borderRadius: 12,
    alignItems: 'center',
  },
  sendButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default PreConsultationQuestions;
