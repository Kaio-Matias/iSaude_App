import React from 'react';
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

const AppointmentOptions = () => {
  const navigation = useNavigation();

  const handleServiceHistory = () => {
    navigation.navigate('ServiceHistory');
  };

  const handlePrescriptions = () => {
    navigation.navigate('Prescriptions');
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
        <Text style={styles.headerTitle}>Opções</Text>
        <View style={styles.headerRight} />
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* Histórico de Atendimentos */}
        <TouchableOpacity style={styles.optionCard} onPress={handleServiceHistory}>
          <Icon name="refresh" size={20} color="#4267F6" />
          <Text style={styles.optionText}>Histórico de Atendimentos</Text>
          <Icon name="chevron-forward" size={20} color="#4267F6" />
        </TouchableOpacity>

        {/* Prescrições e Atestados */}
        <TouchableOpacity style={styles.optionCard} onPress={handlePrescriptions}>
          <Icon name="document-text" size={20} color="#4267F6" />
          <Text style={styles.optionText}>Prescrições e Atestados</Text>
          <Icon name="chevron-forward" size={20} color="#4267F6" />
        </TouchableOpacity>
      </ScrollView>
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
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    marginHorizontal: 20,
    marginBottom: 15,
    padding: 20,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  optionText: {
    flex: 1,
    fontSize: 16,
    color: '#000',
    marginLeft: 15,
  },
});

export default AppointmentOptions;
