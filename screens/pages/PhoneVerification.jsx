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

const PhoneVerification = ({ route }) => {
  const navigation = useNavigation();
  const { phone } = route.params;
  const [verificationCode, setVerificationCode] = useState(['9', '4', 'Y', '7', '', '']);

  const handleCodeChange = (text, index) => {
    const newCode = [...verificationCode];
    newCode[index] = text;
    setVerificationCode(newCode);

    // Auto-advance to next input
    if (text && index < 5) {
      // Focus next input
    }
  };

  const handleVerify = () => {
    const code = verificationCode.join('');
    if (code.length === 6) {
      // Simular verificação
      setTimeout(() => {
        navigation.navigate('VerificationSuccess');
      }, 2000);
    } else {
      Alert.alert('Erro', 'Digite o código completo de 6 dígitos');
    }
  };

  const handleResendCode = () => {
    Alert.alert('Código Reenviado', 'Um novo código foi enviado para seu telefone');
  };

  const handleEditPhone = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icon name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Verificação de Telefone</Text>
        <View style={styles.headerRight} />
      </View>

      <View style={styles.content}>
        {/* Instruções */}
        <View style={styles.instructions}>
          <Text style={styles.instructionsText}>
            Digite o código de verificação que enviamos por SMS e WhatsApp para o número de telefone{' '}
            <Text style={styles.phoneNumber}>(32) 9XXXX-4002</Text>{' '}
            <Text style={styles.editLink} onPress={handleEditPhone}>(editar)</Text>
          </Text>
        </View>

        {/* Campos de código */}
        <View style={styles.codeContainer}>
          {verificationCode.map((digit, index) => (
            <TextInput
              key={index}
              style={styles.codeInput}
              value={digit}
              onChangeText={(text) => handleCodeChange(text, index)}
              maxLength={1}
              keyboardType="numeric"
              textAlign="center"
              autoFocus={index === 0}
            />
          ))}
        </View>

        {/* Botão verificar */}
        <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
          <Text style={styles.verifyButtonText}>Verificar</Text>
        </TouchableOpacity>

        {/* Reenviar código */}
        <TouchableOpacity style={styles.resendButton} onPress={handleResendCode}>
          <Text style={styles.resendButtonText}>Reenviar Código</Text>
        </TouchableOpacity>
      </View>
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
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  instructions: {
    marginBottom: 40,
  },
  instructionsText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
    textAlign: 'center',
  },
  phoneNumber: {
    fontWeight: '600',
    color: '#000',
  },
  editLink: {
    color: '#4267F6',
    textDecorationLine: 'underline',
  },
  codeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 40,
  },
  codeInput: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5EA',
    borderRadius: 8,
    fontSize: 20,
    fontWeight: '600',
    color: '#000',
    backgroundColor: '#F8F8F8',
  },
  verifyButton: {
    backgroundColor: '#4267F6',
    paddingVertical: 16,
    borderRadius: 12,
    alignItems: 'center',
    marginBottom: 20,
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
  resendButton: {
    alignItems: 'center',
  },
  resendButtonText: {
    fontSize: 16,
    color: '#4267F6',
    textDecorationLine: 'underline',
  },
});

export default PhoneVerification;
