import React, { useState } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  Image, 
  TouchableOpacity, 
  ScrollView,
  SafeAreaView,
  StatusBar
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { fontes } from '../styles/styles';

const ProfessionalProfile = ({ route }) => {
  const navigation = useNavigation();
  const [isSaved, setIsSaved] = useState(false);
  
  // Dados mockados do profissional
  const professional = {
    name: 'Dra. Maria Glenda',
    username: '@dra.mariaglen',
    avatar: 'https://i.pravatar.cc/150?img=3',
    specialty: 'Clínica Geral',
    isVerified: true,
    description: 'Clínica geral com 15 anos de experiência formada pela UNIFESP. Minha abordagem une medicina baseada em evidências com atendimento humanizado, priorizando sempre o bem-estar e a saúde integral dos meus pacientes.',
    location: 'Mangueirão, Belém - PA',
    registration: '6789000-AL 6789000-AL',
    specialties: ['Clínica Geral'],
    stats: {
      appointments: '2.000',
      patients: '1.253',
      followers: '23k'
    }
  };

  const handleSave = () => {
    setIsSaved(!isSaved);
  };

  const handleScheduleAppointment = () => {
    // Navegar para agendamento
    navigation.navigate('AppointmentScheduling', { professional });
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
          <Ionicons name="chevron-back" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.headerUsername}>{professional.username}</Text>
        <View style={styles.headerActions}>
          <TouchableOpacity 
            style={[styles.saveButton, isSaved && styles.saveButtonActive]}
            onPress={handleSave}
          >
            <Ionicons 
              name="bookmark" 
              size={20} 
              color={isSaved ? "#FFFFFF" : "#4576F2"} 
            />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.optionsButton}
            onPress={() => navigation.navigate('ProfileOptions', { username: professional.username })}
          >
            <Ionicons name="ellipsis-horizontal" size={24} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={styles.content}>
        {/* Seção do Perfil */}
        <View style={styles.profileSection}>
          <View style={styles.profileCard}>
            <Image source={{ uri: professional.avatar }} style={styles.avatar} />
            
            <View style={styles.profileInfo}>
              <View style={styles.nameContainer}>
                <Text style={styles.name}>{professional.name}</Text>
                {professional.isVerified && (
                  <Ionicons name="checkmark-circle" size={20} color="#4CAF50" />
                )}
              </View>
              
              <View style={styles.specialtyTag}>
                <Ionicons name="medical" size={16} color="#4576F2" />
                <Text style={styles.specialtyText}>{professional.specialty}</Text>
              </View>

              <View style={styles.actionButtons}>
                <TouchableOpacity style={styles.viewProfileButton}>
                  <Text style={styles.viewProfileText}>Ver Perfil</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.shareButton}>
                  <Text style={styles.shareText}>Compartilhar</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* Estatísticas */}
          <View style={styles.statsContainer}>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{professional.stats.appointments}</Text>
              <Text style={styles.statLabel}>Atendimentos</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{professional.stats.patients}</Text>
              <Text style={styles.statLabel}>Pacientes</Text>
            </View>
            <View style={styles.statCard}>
              <Text style={styles.statNumber}>{professional.stats.followers}</Text>
              <Text style={styles.statLabel}>Seguidores</Text>
            </View>
          </View>
        </View>

        {/* Descrição */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>
            {professional.description}
            <Text style={styles.seeMore}> Ver mais</Text>
          </Text>
          
          <View style={styles.locationContainer}>
            <Ionicons name="location" size={16} color="#666" />
            <Text style={styles.locationText}>{professional.location}</Text>
          </View>
        </View>

        {/* Registro Profissional */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Registro Profissional</Text>
          <View style={styles.registrationContainer}>
            <Text style={styles.registrationText}>{professional.registration}</Text>
            <Text style={styles.crmText}>CRM</Text>
          </View>
        </View>

        {/* Especialidades */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Especialidades</Text>
          <View style={styles.specialtiesContainer}>
            {professional.specialties.map((specialty, index) => (
              <View key={index} style={styles.specialtyTag}>
                <Ionicons name="medical" size={16} color="#4576F2" />
                <Text style={styles.specialtyText}>{specialty}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* Botão de Agendamento */}
        <View style={styles.scheduleSection}>
          <TouchableOpacity 
            style={styles.scheduleButton}
            onPress={handleScheduleAppointment}
          >
            <Text style={styles.scheduleButtonText}>Agendar Atendimento</Text>
            <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
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
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  backButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerUsername: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
  },
  headerActions: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  saveButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#F0F2F5',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  saveButtonActive: {
    backgroundColor: '#4576F2',
  },
  optionsButton: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
  },
  profileSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  profileCard: {
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
    padding: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E3F2FD',
    borderStyle: 'dotted',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    marginBottom: 16,
  },
  profileInfo: {
    alignItems: 'center',
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
    marginRight: 8,
  },
  specialtyTag: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E3F2FD',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 16,
  },
  specialtyText: {
    fontSize: 14,
    color: '#4576F2',
    marginLeft: 6,
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 12,
  },
  viewProfileButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  viewProfileText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  shareButton: {
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
  },
  shareText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  statCard: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    borderRadius: 8,
    padding: 16,
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666',
  },
  section: {
    paddingHorizontal: 20,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
    fontFamily: fontes.InteloBold,
  },
  descriptionText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    marginBottom: 12,
  },
  seeMore: {
    color: '#4576F2',
    fontWeight: '500',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  locationText: {
    fontSize: 14,
    color: '#666',
    marginLeft: 6,
  },
  registrationContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  registrationText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    fontFamily: fontes.InteloBold,
  },
  crmText: {
    fontSize: 14,
    color: '#666',
  },
  specialtiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  scheduleSection: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  scheduleButton: {
    backgroundColor: '#4576F2',
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 8,
  },
  scheduleButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#FFFFFF',
    fontFamily: fontes.InteloBold,
  },
});

export default ProfessionalProfile;
