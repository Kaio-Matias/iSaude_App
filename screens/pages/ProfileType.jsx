import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ProfileType = () => {
  const navigation = useNavigation();
  const [selectedType, setSelectedType] = useState('paciente');

  const handleTypeSelection = (type) => {
    if (type === 'profissional') {
      Alert.alert(
        'Confirmar Alteração',
        'Você tem certeza que deseja trocar para Perfil Profissional?',
        [
          {
            text: 'Voltar',
            style: 'cancel',
            onPress: () => console.log('Cancelado'),
          },
          {
            text: 'Trocar para Profissional',
            style: 'default',
            onPress: () => {
              setSelectedType(type);
              // Aqui você pode implementar a lógica de verificação
              console.log('Trocando para perfil profissional');
              navigation.goBack();
            },
          },
        ]
      );
    } else {
      setSelectedType(type);
    }
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
        <Text style={styles.headerTitle}>Tipo de Perfil</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Opções de Tipo de Perfil */}
        <View style={styles.optionsContainer}>
          {/* Opção Paciente */}
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              selectedType === 'paciente' && styles.selectedOption
            ]}
            onPress={() => handleTypeSelection('paciente')}
          >
            <View style={styles.optionContent}>
              <Icon 
                name="person" 
                size={24} 
                color={selectedType === 'paciente' ? '#4267F6' : '#666'} 
              />
              <Text style={[
                styles.optionText, 
                selectedType === 'paciente' && styles.selectedOptionText
              ]}>
                Paciente
              </Text>
            </View>
            {selectedType === 'paciente' && (
              <View style={styles.currentBadge}>
                <Text style={styles.currentBadgeText}>Atual</Text>
              </View>
            )}
          </TouchableOpacity>

          {/* Opção Profissional */}
          <TouchableOpacity 
            style={[
              styles.optionButton, 
              selectedType === 'profissional' && styles.selectedOption
            ]}
            onPress={() => handleTypeSelection('profissional')}
          >
            <View style={styles.optionContent}>
              <Icon 
                name="medical" 
                size={24} 
                color={selectedType === 'profissional' ? '#4267F6' : '#666'} 
              />
              <Text style={[
                styles.optionText, 
                selectedType === 'profissional' && styles.selectedOptionText
              ]}>
                Profissional
              </Text>
            </View>
            <Icon name="chevron-forward" size={20} color="#C7C7CC" />
          </TouchableOpacity>
        </View>

        {/* Descrição dos Tipos */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.descriptionTitle}>
            Escolha como você deseja continuar em nossa plataforma:
          </Text>
          
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionText}>
              <Text style={styles.boldText}>Pacientes</Text> podem marcar consultas e exames, 
              além de comprar medicamentos no marketplace
            </Text>
          </View>
          
          <View style={styles.descriptionItem}>
            <Text style={styles.descriptionText}>
              <Text style={styles.boldText}>Profissionais de Saúde</Text> podem gerenciar as consultas, 
              criar conteúdo educativo e interagir com a comunidade
            </Text>
          </View>
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
  optionsContainer: {
    backgroundColor: '#FFFFFF',
    marginBottom: 20,
    paddingHorizontal: 20,
  },
  optionButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 12,
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#E5E5EA',
  },
  selectedOption: {
    backgroundColor: '#F0F8FF',
    borderColor: '#4267F6',
  },
  optionContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginLeft: 15,
  },
  selectedOptionText: {
    color: '#4267F6',
  },
  currentBadge: {
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  currentBadgeText: {
    fontSize: 12,
    fontWeight: '500',
    color: '#1976D2',
  },
  descriptionContainer: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  descriptionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 20,
    lineHeight: 22,
  },
  descriptionItem: {
    marginBottom: 15,
  },
  descriptionText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  boldText: {
    fontWeight: '600',
    color: '#000',
  },
});

export default ProfileType;
