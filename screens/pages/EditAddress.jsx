import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditAddress = ({ route }) => {
  const navigation = useNavigation();
  const { address } = route.params;
  
  const [formData, setFormData] = useState({
    addressName: address?.name || 'Academia',
    cep: address?.cep || '000.00-000',
    street: address?.street || 'Rua Feliz',
    number: address?.number || '00',
    noNumber: address?.noNumber || false,
    complement: address?.complement || '4b',
    state: address?.state || 'Alagoas',
  });

  const handleSaveAddress = () => {
    // Aqui você pode implementar a lógica para salvar o endereço
    console.log('Salvando endereço:', formData);
    navigation.goBack();
  };

  const handleDeleteAddress = () => {
    Alert.alert(
      'Excluir Endereço',
      'Você tem certeza que deseja excluir esse endereço?',
      'Não é possível desfazer essa ação.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sim, Excluir', style: 'destructive', onPress: () => navigation.goBack() },
      ]
    );
  };

  const handleStateSelect = () => {
    // Aqui você pode implementar a seleção de estado
    console.log('Selecionando estado');
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Editar Endereço</Text>
        <TouchableOpacity onPress={handleDeleteAddress}>
          <Icon name="trash" size={24} color="#FF3B30" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Formulário */}
        <View style={styles.formContainer}>
          {/* Nome do Endereço */}
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Nome do Endereço</Text>
            <TextInput
              style={styles.textInput}
              value={formData.addressName}
              onChangeText={(text) => setFormData({ ...formData, addressName: text })}
              placeholder="Digite o nome do endereço"
            />
          </View>

          {/* CEP */}
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>CEP</Text>
            <TextInput
              style={styles.textInput}
              value={formData.cep}
              onChangeText={(text) => setFormData({ ...formData, cep: text })}
              placeholder="000.00-000"
              keyboardType="numeric"
            />
          </View>

          {/* Logradouro */}
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Logradouro</Text>
            <TextInput
              style={styles.textInput}
              value={formData.street}
              onChangeText={(text) => setFormData({ ...formData, street: text })}
              placeholder="Digite o nome da rua"
            />
          </View>

          {/* Número */}
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Número</Text>
            <TextInput
              style={styles.textInput}
              value={formData.number}
              onChangeText={(text) => setFormData({ ...formData, number: text })}
              placeholder="Digite o número"
              keyboardType="numeric"
            />
          </View>

          {/* Sem Número */}
          <TouchableOpacity 
            style={styles.checkboxField}
            onPress={() => setFormData({ ...formData, noNumber: !formData.noNumber })}
          >
            <View style={[styles.checkbox, formData.noNumber && styles.checkboxChecked]}>
              {formData.noNumber && <Icon name="checkmark" size={16} color="#FFFFFF" />}
            </View>
            <Text style={styles.checkboxLabel}>Sem Número</Text>
          </TouchableOpacity>

          {/* Complemento */}
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Complemento (opcional)</Text>
            <TextInput
              style={styles.textInput}
              value={formData.complement}
              onChangeText={(text) => setFormData({ ...formData, complement: text })}
              placeholder="Digite o complemento"
            />
          </View>

          {/* Estado */}
          <View style={styles.formField}>
            <Text style={styles.fieldLabel}>Estado</Text>
            <TouchableOpacity style={styles.stateSelector} onPress={handleStateSelect}>
              <Text style={styles.stateText}>{formData.state}</Text>
              <Icon name="chevron-forward" size={20} color="#C7C7CC" />
            </TouchableOpacity>
          </View>
        </View>

        {/* Botão salvar */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveAddress}>
          <Text style={styles.saveButtonText}>Salvar Alterações</Text>
        </TouchableOpacity>
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
  content: {
    flex: 1,
    paddingTop: 20,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 20,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formField: {
    marginBottom: 20,
  },
  fieldLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 8,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#FFFFFF',
  },
  checkboxField: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderRadius: 4,
    borderWidth: 2,
    borderColor: '#4267F6',
    marginRight: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#4267F6',
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#000',
    fontWeight: '500',
  },
  stateSelector: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    backgroundColor: '#FFFFFF',
  },
  stateText: {
    fontSize: 16,
    color: '#000',
  },
  saveButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    marginBottom: 30,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  saveButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default EditAddress;



