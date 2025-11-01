import React from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  TouchableOpacity, 
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { fontes } from '../styles/styles';

const AboutAccount = () => {
  const navigation = useNavigation();
  
  // Dados mockados da conta
  const accountInfo = {
    name: 'Dra. Maria Glenda',
    username: '@dra.mariaglen',
    createdAt: '31/08/2025',
    area: 'Médico',
    specialty: 'Clínico Geral'
  };

  const renderInfoCard = (icon, label, value, isEditable = false) => (
    <View style={styles.infoCard}>
      <View style={styles.cardHeader}>
        <View style={styles.iconContainer}>
          <Ionicons name={icon} size={20} color="#4576F2" />
        </View>
        <Text style={styles.cardLabel}>{label}</Text>
        {isEditable && (
          <Ionicons name="chevron-forward" size={20} color="#666" />
        )}
      </View>
      <Text style={styles.cardValue}>{value}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#FFFFFF" />
      
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Sobre a Conta</Text>
        <View style={styles.headerSpacer} />
      </View>

      <ScrollView style={styles.content}>
        {/* Nome */}
        {renderInfoCard('person', 'Nome', accountInfo.name)}
        
        {/* Nome de Usuário */}
        {renderInfoCard('at', 'Nomes de Usuário', accountInfo.username, true)}
        
        {/* Criado em */}
        {renderInfoCard('calendar', 'Criado em', accountInfo.createdAt)}
        
        {/* Área de Atuação */}
        {renderInfoCard('briefcase', 'Área de Atuação', accountInfo.area)}
        
        {/* Especialidade */}
        {renderInfoCard('medical', 'Especialidade', accountInfo.specialty)}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
  },
  headerSpacer: {
    width: 40,
  },
  content: {
    flex: 1,
    paddingTop: 20,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginBottom: 16,
    borderRadius: 12,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  iconContainer: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#E3F2FD',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  cardLabel: {
    flex: 1,
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  cardValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
    marginLeft: 44, // Alinhar com o texto do label
  },
});

export default AboutAccount;
