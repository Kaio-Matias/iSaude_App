import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  TextInput,
  Alert,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const AddCard = () => {
  const navigation = useNavigation();
  const [cardData, setCardData] = useState({
    cardNumber: '',
    cardholderName: '',
    expiryDate: '',
    cvv: '',
  });

  const handleSaveCard = () => {
    if (!cardData.cardNumber.trim() || !cardData.cardholderName.trim() || 
        !cardData.expiryDate.trim() || !cardData.cvv.trim()) {
      Alert.alert('Erro', 'Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    // Aqui você pode implementar a lógica para salvar o cartão
    console.log('Salvando cartão:', cardData);
    navigation.goBack();
  };

  const formatCardNumber = (text) => {
    const cleaned = text.replace(/\s/g, '');
    const groups = cleaned.match(/.{1,4}/g);
    return groups ? groups.join(' ') : cleaned;
  };

  const formatExpiryDate = (text) => {
    const cleaned = text.replace(/\D/g, '');
    if (cleaned.length >= 2) {
      return cleaned.slice(0, 2) + '/' + cleaned.slice(2, 4);
    }
    return cleaned;
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Adicionar Cartão</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.content}>
        {/* Número do cartão */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Número do Cartão</Text>
          <TextInput
            style={styles.cardInput}
            value={cardData.cardNumber}
            onChangeText={(text) => setCardData({...cardData, cardNumber: formatCardNumber(text)})}
            placeholder="0000 0000 0000 0000"
            keyboardType="numeric"
            maxLength={19}
          />
        </View>

        {/* Nome do titular */}
        <View style={styles.inputContainer}>
          <Text style={styles.inputLabel}>Nome do Titular</Text>
          <TextInput
            style={styles.cardInput}
            value={cardData.cardholderName}
            onChangeText={(text) => setCardData({...cardData, cardholderName: text})}
            placeholder="Nome como está no cartão"
            autoCapitalize="words"
          />
        </View>

        {/* Data de validade e CVV */}
        <View style={styles.rowContainer}>
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.inputLabel}>Data de Validade</Text>
            <TextInput
              style={styles.cardInput}
              value={cardData.expiryDate}
              onChangeText={(text) => setCardData({...cardData, expiryDate: formatExpiryDate(text)})}
              placeholder="MM/AA"
              keyboardType="numeric"
              maxLength={5}
            />
          </View>
          
          <View style={[styles.inputContainer, styles.halfWidth]}>
            <Text style={styles.inputLabel}>CVV</Text>
            <TextInput
              style={styles.cardInput}
              value={cardData.cvv}
              onChangeText={(text) => setCardData({...cardData, cvv: text})}
              placeholder="123"
              keyboardType="numeric"
              maxLength={4}
            />
          </View>
        </View>

        {/* Botão salvar */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveCard}>
          <Text style={styles.saveButtonText}>Salvar Cartão</Text>
        </TouchableOpacity>
      </View>
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
  inputContainer: {
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
  halfWidth: {
    flex: 1,
    marginHorizontal: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 10,
  },
  cardInput: {
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    paddingHorizontal: 15,
    paddingVertical: 12,
    fontSize: 16,
    color: '#000',
    backgroundColor: '#FFFFFF',
  },
  saveButton: {
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
  saveButtonText: {
    fontSize: 16,
    color: '#FFFFFF',
    fontWeight: '600',
  },
});

export default AddCard;



