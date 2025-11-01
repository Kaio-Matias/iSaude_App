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

const EditBio = () => {
  const navigation = useNavigation();
  const [bio, setBio] = useState(
    'Clínica geral com 15 anos de experiência formada pela UNIFESP. Minha abordagem une medicina baseada em evidências a um atendimento humanizado, onde cada paciente é ouvido com atenção para construirmos juntos um plano de saúde preventivo e realista. Especializei-me em saúde integral, acreditando que cuidar de pessoas vai além do consultório – por isso, dedico parte do meu tempo a projetos voluntários em comunidades carentes. Como mãe e entusiasta de bem-estar, entendo os desafios de conciliar vida pessoal e autocuidado. Adoro compartilhar dicas práticas de alimentação saudável e gestão do estresse, sempre adaptadas à sua rotina. Meu consultório é um espaço seguro para dúvidas, orientações e, claro, um café especial da minha pequena plantação caseira. Estou aqui para ser sua parceira em cada etapa da sua jornada de saúde.'
  );

  const maxCharacters = 350;
  const currentCharacters = bio.length;

  const handleSaveChanges = () => {
    // Implementar salvamento das alterações
    console.log('Salvando bio:', bio);
    navigation.goBack();
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
        <Text style={styles.headerTitle}>Sobre Mim</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Campo de Bio */}
        <View style={styles.bioSection}>
          <Text style={styles.bioLabel}>Sobre mim</Text>
          <View style={styles.bioContainer}>
            <TextInput
              style={styles.bioInput}
              value={bio}
              onChangeText={setBio}
              placeholder="Conte um pouco sobre você..."
              placeholderTextColor="#8E8E93"
              multiline
              textAlignVertical="top"
              maxLength={maxCharacters}
            />
          </View>
          
          {/* Contador de Caracteres */}
          <View style={styles.characterCounter}>
            <Text style={[
              styles.counterText,
              currentCharacters > maxCharacters * 0.8 && styles.counterWarning
            ]}>
              {currentCharacters}/{maxCharacters} caracteres
            </Text>
          </View>
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
  bioSection: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginBottom: 20,
  },
  bioLabel: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 10,
    fontWeight: '500',
  },
  bioContainer: {
    backgroundColor: '#F2F2F7',
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 12,
    minHeight: 200,
  },
  bioInput: {
    fontSize: 16,
    color: '#000',
    lineHeight: 22,
    textAlignVertical: 'top',
  },
  characterCounter: {
    alignItems: 'flex-end',
    marginTop: 10,
  },
  counterText: {
    fontSize: 12,
    color: '#8E8E93',
  },
  counterWarning: {
    color: '#FF9500',
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

export default EditBio;
