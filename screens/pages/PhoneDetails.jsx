import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  ScrollView,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const PhoneDetails = ({ route }) => {
  const navigation = useNavigation();
  const { phone } = route.params;
  const [isPrimary, setIsPrimary] = useState(phone.isPrimary);

  const handleDeletePhone = () => {
    Alert.alert(
      'Excluir Telefone',
      'Você tem certeza que deseja excluir esse Número de Telefone?',
      'Não é possível desfazer essa ação.',
      [
        { text: 'Cancelar', style: 'cancel' },
        { text: 'Sim, Excluir', style: 'destructive', onPress: () => navigation.goBack() },
      ]
    );
  };

  const handleVerifyPhone = () => {
    navigation.navigate('PhoneVerification', { phone });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Seu Telefone</Text>
        <TouchableOpacity onPress={handleDeletePhone}>
          <Icon name="trash" size={24} color="#FF3B30" />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Informações sobre o telefone */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            Seu número de telefone é nosso <Text style={styles.boldText}>canal mais seguro</Text> para falar com você.
          </Text>
          <Text style={styles.infoText}>
            Usamos esse contato para proteger sua conta e garantir que informações importantes sobre sua saúde cheguem até você com privacidade e cuidado.
          </Text>
        </View>

        {/* Número do telefone */}
        <View style={styles.phoneDisplay}>
          <View style={styles.countryInfo}>
            <Icon name="flag" size={20} color="#4267F6" />
            <Text style={styles.countryCode}>+55</Text>
          </View>
          <Text style={styles.phoneNumber}>{phone.number}</Text>
        </View>

        {/* Checkbox telefone principal */}
        <TouchableOpacity 
          style={styles.primaryCheckbox}
          onPress={() => setIsPrimary(!isPrimary)}
        >
          <View style={[styles.checkbox, isPrimary && styles.checkboxChecked]}>
            {isPrimary && <Icon name="checkmark" size={16} color="#FFFFFF" />}
          </View>
          <Text style={styles.checkboxLabel}>Telefone Principal</Text>
        </TouchableOpacity>

        {/* Botão verificar telefone */}
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerifyPhone}>
          <Text style={styles.verifyButtonText}>Verificar Telefone</Text>
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
  infoSection: {
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
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  boldText: {
    fontWeight: '600',
    color: '#000',
  },
  phoneDisplay: {
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
  countryInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  countryCode: {
    fontSize: 16,
    color: '#4267F6',
    fontWeight: '600',
    marginLeft: 10,
  },
  phoneNumber: {
    fontSize: 18,
    color: '#000',
    fontWeight: '600',
  },
  primaryCheckbox: {
    flexDirection: 'row',
    alignItems: 'center',
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
  verifyButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  verifyButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default PhoneDetails;
