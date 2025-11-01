import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const ScheduleReturn = () => {
  const navigation = useNavigation();
  const [dontShowAgain, setDontShowAgain] = useState(false);

  const handleStartScheduling = () => {
    navigation.navigate('SelectDateTime');
  };

  const toggleDontShowAgain = () => {
    setDontShowAgain(!dontShowAgain);
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
        <Text style={styles.headerTitle}>Agendar Retorno</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Informações sobre o Retorno */}
        <View style={styles.infoSection}>
          <Text style={styles.infoTitle}>
            Este atendimento possui um retorno incluso.
          </Text>
          <Text style={styles.infoDescription}>
            Selecione um dia e um horário para realizar o retorno da consulta de forma gratuita.
          </Text>
        </View>

        {/* Opções de Agendamento */}
        <View style={styles.optionsSection}>
          {/* Selecionar Data */}
          <View style={styles.optionCard}>
            <Icon name="calendar" size={24} color="#4267F6" />
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>Selecione uma Data.</Text>
              <Text style={styles.optionDescription}>
                Escolha e o melhor momento para sua consulta.
              </Text>
            </View>
          </View>

          {/* Finalizar Agendamento */}
          <View style={styles.optionCard}>
            <Icon name="heart-outline" size={24} color="#4267F6" />
            <View style={styles.optionContent}>
              <Text style={styles.optionTitle}>Finalize seu Agendamento</Text>
              <Text style={styles.optionDescription}>
                Confirme seus dados.
              </Text>
            </View>
          </View>
        </View>

        {/* Chamada para Ação */}
        <View style={styles.ctaSection}>
          <Text style={styles.ctaText}>Viu como é fácil? Vamos lá!</Text>
        </View>
      </ScrollView>

      {/* Botão de Iniciar Agendamento */}
      <View style={styles.bottomSection}>
        <TouchableOpacity style={styles.checkboxContainer} onPress={toggleDontShowAgain}>
          <Icon 
            name={dontShowAgain ? "checkmark-circle" : "ellipse-outline"} 
            size={20} 
            color={dontShowAgain ? "#4267F6" : "#666"} 
          />
          <Text style={styles.checkboxText}>Não mostrar novamente!</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.startButton} onPress={handleStartScheduling}>
          <Text style={styles.startButtonText}>Iniciar Agendamento</Text>
          <Icon name="chevron-forward" size={20} color="#FFFFFF" />
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
  infoSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
    marginBottom: 15,
    lineHeight: 24,
  },
  infoDescription: {
    fontSize: 16,
    color: '#666',
    lineHeight: 22,
  },
  optionsSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 15,
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
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
  optionContent: {
    flex: 1,
    marginLeft: 15,
  },
  optionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000',
    marginBottom: 5,
  },
  optionDescription: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  ctaSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    alignItems: 'center',
  },
  ctaText: {
    fontSize: 16,
    color: '#666',
    fontStyle: 'italic',
  },
  bottomSection: {
    paddingHorizontal: 20,
    paddingBottom: 30,
    gap: 15,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: '#666',
  },
  startButton: {
    backgroundColor: '#4267F6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 18,
    borderRadius: 12,
    gap: 10,
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});

export default ScheduleReturn;
