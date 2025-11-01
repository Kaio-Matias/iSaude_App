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

const EditUsername = () => {
  const navigation = useNavigation();
  const [username, setUsername] = useState('carlos.magl');

  const availableUsernames = [
    '@carlos.magno',
    '@carlosmagno2',
    '@carlos.m014',
    '@c.magno73'
  ];

  const handleSaveChanges = () => {
    // Implementar salvamento das alterações
    console.log('Salvando nome de usuário:', username);
    navigation.goBack();
  };

  const selectUsername = (selectedUsername) => {
    setUsername(selectedUsername.replace('@', ''));
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
        <Text style={styles.headerTitle}>Nome de Usuário</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Campo de Nome de Usuário */}
        <View style={styles.inputSection}>
          <Text style={styles.inputLabel}>Nome de Usuário</Text>
          <View style={styles.inputContainer}>
            <Icon name="at" size={20} color="#8E8E93" />
            <TextInput
              style={styles.inputField}
              value={username}
              onChangeText={setUsername}
              placeholder="Digite seu nome de usuário"
              placeholderTextColor="#8E8E93"
              autoFocus
            />
          </View>
        </View>

        {/* Nomes Disponíveis */}
        <View style={styles.availableSection}>
          <Text style={styles.availableTitle}>Alguns nomes disponíveis</Text>
          {availableUsernames.map((availableUsername, index) => (
            <TouchableOpacity
              key={index}
              style={styles.availableItem}
              onPress={() => selectUsername(availableUsername)}
            >
              <Text style={styles.availableUsername}>{availableUsername}</Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Informações */}
        <View style={styles.infoSection}>
          <Text style={styles.infoText}>
            Seu Nome de Usuário é sua identidade única na comunidade.
          </Text>
          <Text style={styles.infoText}>
            Lembre-se, ele pode ser uma mistura de letras, números e caracteres especiais.
          </Text>
          <Text style={styles.infoText}>
            Não se preocupe, você pode alterá-lo a cada 14 dias.
          </Text>
        </View>

        {/* Botão Salvar */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSaveChanges}>
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
  inputSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  inputLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 10,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
  },
  inputField: {
    flex: 1,
    fontSize: 18,
    color: '#000',
    marginLeft: 10,
    fontWeight: '600',
  },
  availableSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  availableTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
  },
  availableItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F2F2F7',
  },
  availableUsername: {
    fontSize: 16,
    color: '#4267F6',
    fontWeight: '500',
  },
  infoSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  infoText: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    marginBottom: 10,
  },
  saveButton: {
    backgroundColor: '#4267F6',
    marginHorizontal: 20,
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 30,
  },
  saveButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default EditUsername;
